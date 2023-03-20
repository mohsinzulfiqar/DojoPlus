import * as React from 'react';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/material';
import {
  TextGray12,
  TextWhite18UppercaseRegular,
  TextWhite24CapitalizeBold,
} from '../../../shared/components/texts';

const ScheduleItem = styled(Box)`
  padding: 15px 0;
  background-color: #3c3c3c;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const ScheduleItemWrapper = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Position = styled(Box)`
  margin: 0 auto 4px;
  position: relative;
  text-align: center;
  padding: 0 5px 0 5px;
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
  amount?: string;
  term?: string;
  onClick?: (planId: string, index: number) => void;
  current?: string;
  id: string;
  index: number;
};

const CardPlanDetail: React.FC<CardPlanProps> = ({
  name,
  amount,
  term,
  description,
  onClick,
  current,
  id,
  index,
}): JSX.Element => {
  return (
    <ScheduleItem onClick={() => onClick(id, index)}>
      <ScheduleItemWrapper>
        <Item>{current === id ? <Icon /> : null}</Item>
        <Position>
          <TextWhite18UppercaseRegular>{name}</TextWhite18UppercaseRegular>
        </Position>
        <Position>
          <TextWhite24CapitalizeBold>{amount}</TextWhite24CapitalizeBold>
          {term && !term.includes('undefined') && (
            <TextGray12>{term}</TextGray12>
          )}
        </Position>
        <Position>
          <TextGray12>{description}</TextGray12>
        </Position>
      </ScheduleItemWrapper>
    </ScheduleItem>
  );
};

export default CardPlanDetail;
