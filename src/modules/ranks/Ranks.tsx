import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import _ from 'lodash';

import { ProfileTabLoading } from '../../shared/components/TabLoading';
import { ProfileTabEmptyMessage } from '../../shared/components/ProfileTabEmptyMessage';

import { RankCard } from './components/RankCard';
import { Rank } from '../../shared/models/Rank.model';
import { orderRanks } from '../../shared/utils/ranks-utils';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

type RanksProps = {
  profileId: string;
  username?: string;
};

export const Ranks: React.FC<RanksProps> = ({ username }) => {
  const [isLoading, setLoading] = useState(true);
  const [ranks, setRanks] = useState<Rank[]>([]);

  useEffect(() => {
    if (username) {
      const requests = [];
      requests.push(
        axios('/api/Rank', {
          params: {
            username,
          },
        }).then((res) => {
          const formatedRes = res.data.map((rank) =>
            _.mapKeys(rank.fields, (v, k) => _.camelCase(k)),
          );
          setRanks(formatedRes);
          const requests2 = [];

          formatedRes
            .map((rank) => rank.master?.username)
            .filter(Boolean)
            .filter((item, i, ar) => ar.indexOf(item) === i)
            .map((masterUsername) =>
              requests2.push(
                axios('/api/Rank', {
                  params: {
                    username: masterUsername,
                  },
                }),
              ),
            );

          Promise.all(requests2).then((masterRankRes) => {
            const formatMasterRanks = masterRankRes
              .map((rankRes) =>
                rankRes.data.map((rank) =>
                  _.mapKeys(rank.fields, (v, k) => _.camelCase(k)),
                ),
              )
              .filter((masterRanks) => masterRanks.length > 0);
            setRanks(
              formatedRes.map((rank) => {
                const masterRanks = formatMasterRanks.find(
                  (masterRank) =>
                    masterRank[0].usernameFromAllProfiles[0] ===
                    rank.master?.username,
                );

                return masterRanks
                  ? { ...rank, masterRanks }
                  : { ...rank, masterRanks: [] };
              }),
            );
            setLoading(false);
          });
        }),
      );

      Promise.all(requests);
    }
  }, [username]);

  if (isLoading) {
    return <ProfileTabLoading />;
  }

  if (ranks?.length === 0) {
    return <ProfileTabEmptyMessage value="There is no ranks to show" />;
  }

  return (
    <>
      <Container>
        {orderRanks(ranks)?.map((el) => (
          <RankCard key={el.id} data={el} />
        ))}
      </Container>
    </>
  );
};
