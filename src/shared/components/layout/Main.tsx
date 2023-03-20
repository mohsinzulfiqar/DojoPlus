import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';

const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const THEME_BY_VIEW = {
  profile: {
    background: 'backgroundDarkGray',
    metaThemeColor: 'backgroundDarkGray',
  },
  school: {
    background: 'backgroundGray',
    metaThemeColor: 'backgroundDarkGray',
  },
};

type MainProps = {
  themeByView: 'school' | 'profile';
};

export const Main: React.FC<MainProps> = ({ children, themeByView }) => {
  const { palette } = useTheme();
  const themeView = THEME_BY_VIEW[themeByView];
  return (
    <Container>
      <Head>
        <meta
          name="theme-color"
          content={palette[themeView.metaThemeColor].main}
        />
      </Head>
      <style jsx global>{`
        body {
          background-color: ${palette[themeView.background].main} !important;
        }
      `}</style>
      {children}
    </Container>
  );
};

export const MainProfile: React.FC = ({ children }) => (
  <Main themeByView="profile">{children}</Main>
);

export const MainSchool: React.FC = ({ children }) => (
  <Main themeByView="school">{children}</Main>
);
