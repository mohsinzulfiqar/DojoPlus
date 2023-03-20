import * as React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  padding: 15px 0;
  font-size: 12px;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Card: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Content>
        <Wrapper>{children}</Wrapper>
      </Content>
    </>
  );
};

export default Card;
