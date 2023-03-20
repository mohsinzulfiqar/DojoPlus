import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import AddIcon from '@mui/icons-material/Add';
// import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import { ProfileTabLoading } from '../../shared/components/TabLoading';
import { ProfileTabEmptyMessage } from '../../shared/components/ProfileTabEmptyMessage';

import { AchievementItem } from './components/AchievementItem';
import { COLOR_BACKGROUND_LIGHT } from '../../shared/styles/colors';
import { TextWhite18UppercaseRegular } from '../../shared/components/texts';
import { Achievement } from '../../shared/models/achievement.model';

const LastestSection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AllAchievementBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${COLOR_BACKGROUND_LIGHT};
  padding: 1rem;
`;

const AllAchievementSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

type AchievementsProps = {
  profileId: string;
  username: string;
};

export const Achievements: React.FC<AchievementsProps> = ({ username }) => {
  const [isLoading, setLoading] = useState(true);
  const [achievements, setAchievements] = useState<Achievement[]>();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (username) {
      axios('/api/Achievement', {
        params: {
          username,
        },
      }).then((res) => {
        console.log(res.data);
        setAchievements(res.data);
        setLoading(false);
      });
    }
  }, [username]);

  const { t } = useTranslation();
  const textLastAchi = t('LastAchie').toUpperCase();
  const textAllAchie = t('AllAchie').toUpperCase();

  if (isLoading) {
    return <ProfileTabLoading />;
  }

  if (!username || !achievements || achievements.length === 0) {
    return <ProfileTabEmptyMessage value="There is no achievements to show" />;
  }
  const lastestAchivement = achievements[0];
  const allAchievements =
    achievements.length > 1 ? achievements.slice(1, achievements.length) : [];
  return (
    <>
      <LastestSection>
        <TextWhite18UppercaseRegular>
          {textLastAchi}
        </TextWhite18UppercaseRegular>
        <AchievementItem achievement={lastestAchivement} />
      </LastestSection>
      <AllAchievementBar>
        <TextWhite18UppercaseRegular>
          {textAllAchie}
        </TextWhite18UppercaseRegular>
      </AllAchievementBar>
      <AllAchievementSection>
        {allAchievements.length > 0
          ? allAchievements.map((achievement) => (
            <AchievementItem achievement={achievement} key={achievement.id} />
          ))
          : null}
      </AllAchievementSection>
    </>
  );
};
