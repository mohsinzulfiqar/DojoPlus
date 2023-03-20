import * as React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import CardPlanDetail from '../components/CardPlanDetail';
import { Container } from '../../../shared/components/layout/Container';
import { formatPrice } from '../../../shared/utils/ultils';
import { Product } from '../../../shared/models/school.model';

const Content = styled(Box)`
  padding-top: 5rem;
`;

type StepProps = {
  footer: JSX.Element;
  planes: Product[];
  onSelect: (planId: string, index: number) => void;
  current: string;
};

const Step2: React.FC<StepProps> = ({
  footer,
  planes,
  onSelect,
  current,
}): JSX.Element => {
  return (
    <>
      <Container>
        <Content>
          {planes?.map((value, i) => {
            return (
              <CardPlanDetail
                key={value.planName}
                id={value.planName}
                index={i}
                name={value.planName}
                amount={formatPrice(value.price, value.currency)}
                term={`    /${value.frequency}`}
                description={formatPrice(value.setupFee, value.currency)}
                onClick={onSelect}
                current={current}
              />
            );
          })}
        </Content>
        {footer}
      </Container>
    </>
  );
};

export default Step2;
