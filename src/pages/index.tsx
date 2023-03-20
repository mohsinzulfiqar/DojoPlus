import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';

import Follow from '../modules/instructor-profile/components/follow';
import { COLOR_BACKGROUND_DARK_LIGHT } from '../shared/styles/colors';

// const MuiButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.letterColorWhite.main,
//   backgroundColor: theme.palette.backgroundDarkGray.main,
// }));

// const MyThemeComponent = styled('div')(({ theme }) => ({
//   color: theme.palette.letterColorWhite.main,
//   backgroundColor: theme.palette.backgroundLightGray.main,
//   margin: '11px'
// }));

const App: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '18rem',
        backgroundColor: COLOR_BACKGROUND_DARK_LIGHT,
      }}
    >
      <Follow />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: 'https://on.dojo.plus',
      permanent: true,
    },
  };
};

export default App;
