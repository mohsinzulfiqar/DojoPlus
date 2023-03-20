import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  position: relative;
`;

const Spacer = styled.div`
  padding-top: 25px;
`;

const FixedContainer = styled.div`
  position: relative;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #111111;
  display: flex;
  height: 50px;
  flex: -1;
  justify-content: center;
  padding: 8px 0;
`;

const Image = styled.img`
  width: 100px;
  max-height: 100%;
  object-fit: contain;
`;

export const ProfileHeader: React.FC = () => (
  <Container>
    <Spacer />
    <FixedContainer>
      <Image src="/assets/logo/dojo_plus_Logo.png" />
    </FixedContainer>
  </Container>
);
