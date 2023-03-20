import * as React from 'react';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import {
  TextGray12,
  TextWhite18UppercaseRegular,
} from '../../../shared/components/texts';

const ScheduleItem = styled.div`
  padding: 15px 0;
  font-size: 12px;
  background-color: #3c3c3c;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  height: 130px;
`;

const ScheduleItemWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

const Icon = styled(CheckIcon)`
  background-color: green;
  border-radius: 50%;
`;

const Item = styled.div`
  height: 40px;
`;

type CardPlanProps = {
  name: string;
  description?: string;
  selected: number;
  id: number;
  setSelected: (id: number) => void;
};

const CardPlan: React.FC<CardPlanProps> = ({
  name,
  description,
  selected,
  id,
  setSelected,
}): JSX.Element => {
  return (
    <>
      <ScheduleItem onClick={() => setSelected(id)}>
        <ScheduleItemWrapper>
          <Item>{selected === id ? <Icon /> : null}</Item>
          <TextWhite18UppercaseRegular>{name}</TextWhite18UppercaseRegular>
          <TextGray12>{description}</TextGray12>
        </ScheduleItemWrapper>
      </ScheduleItem>
    </>
  );
};

export default CardPlan;
