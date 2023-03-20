import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ProfileTabLoading } from '../../shared/components/TabLoading';
import { ProfileTabEmptyMessage } from '../../shared/components/ProfileTabEmptyMessage';
import { SeminarsData } from '../../shared/models/Seminar.model';
import { SeminarCard } from './components/SeminarCard';
import { TextWhite18UppercaseRegular } from '../../shared/components/texts';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
const Heading = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 1rem 0;
`;

export const Seminars: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [seminars, setSeminars] = useState<SeminarsData[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    axios('/api/Seminars').then((res) => {
      setSeminars(res.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <ProfileTabLoading />;
  }

  if (!seminars || seminars.length === 0) {
    return <ProfileTabEmptyMessage value="There is no achievements to show" />;
  }

  return (
    <>
      <Heading>
        <TextWhite18UppercaseRegular>
          Upcoming Events
        </TextWhite18UppercaseRegular>
      </Heading>
      <Container>
        {seminars &&
          seminars.seminars.map((data) => {
            return <SeminarCard data={data} />;
          })}
      </Container>
    </>
  );
};
