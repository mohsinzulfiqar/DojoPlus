import React from 'react';
import styled from 'styled-components';

import { EmptyViewAlert } from '../shared/components/EmptyViewAlert';
import { MainProfile } from '../shared/components/layout/Main';
import { Section } from '../shared/components/layout/Section';
import { Container } from '../shared/components/layout/Container';

const AlertWrapper = styled.div`
  width: 300px;
  margin: auto;
`;

const Custom404: React.FC = () => {
  return (
    <MainProfile>
      <Section>
        <Container>
          <AlertWrapper>
            <EmptyViewAlert msg="404 - Page Not Found" />
          </AlertWrapper>
        </Container>
      </Section>
    </MainProfile>
  );
};

export default Custom404;
