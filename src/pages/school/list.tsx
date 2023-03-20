import React from 'react';

import { Section } from '../../shared/components/layout/Section';
import { MainProfile } from '../../shared/components/layout/Main';
import { Container } from '../../shared/components/layout/Container';

import { SchoolList } from '../../modules/school-list/SchoolList';

const SchoolListView: React.FC = () => (
  <Section>
    <MainProfile>
      <Container notGutters isFlexGrow>
        <SchoolList />
      </Container>
    </MainProfile>
  </Section>
);

export default SchoolListView;
