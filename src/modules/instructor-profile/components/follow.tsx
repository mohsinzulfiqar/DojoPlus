import * as React from 'react';
import styled from 'styled-components';

const FollowMainDiv = styled.div`
  display: flex;
  width: inherit;
  justify-content: center;
  margin: 1rem;
`;
const NumberTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
  border-right: 0.5px solid gray;
`;
const Numbers = styled.p`
  font-size: 18px;
  margin-block: 0px;
  font-weight: 600;
`;
const Text = styled.p`
  font-size: 12px;
  color: gray;
`;

const Follow: React.FC = () => {
  return (
    <FollowMainDiv>
      <NumberTextDiv>
        <Numbers>434</Numbers>
        <Text>Following</Text>
      </NumberTextDiv>
      <NumberTextDiv>
        <Numbers>2.1K</Numbers>
        <Text>Followers</Text>
      </NumberTextDiv>
      <NumberTextDiv style={{ border: 'none' }}>
        <Numbers>653</Numbers>
        <Text>Check-ins</Text>
      </NumberTextDiv>
    </FollowMainDiv>
  );
};

export default Follow;
