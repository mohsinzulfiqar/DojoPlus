import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

import Link from 'next/link';
import {
  TextWhite32CapitalizeBold,
  TextWhite14Regular,
} from '../../shared/components/texts';

const Title = styled(TextWhite32CapitalizeBold)(`
  text-align: start;
  font-size: 24px;
  margin: 0;
`);

const Content = styled('div')(
  ({ theme }) => `
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding-top: 9rem;
  padding-bottom: 0;
  max-width: 550px;
  height: 100%;
  ${theme.breakpoints.down('sm')}{
    padding-top: 6rem;
  }
`,
);

const TextContainer = styled('div')(`
  display: flex;
  justify-content: flex-start;
  margin-top: 42px;
`);

const TitleDescContainer = styled('div')(`
  margin-bottom: 47px;
`);

const Container = styled('div')(`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`);

const ButtonContainer = styled('div')(
  ({ theme }) => `
    position: absolute;
    width: 100%;
    bottom: 9rem;
    ${theme.breakpoints.down('sm')}{
      bottom: 6rem;
  }
  `,
);

const Logo = styled('img')(({ theme }) => ({
  maxWidth: 130,
}));

const RegisterForm: React.FC = () => {
  const { query } = useRouter();
  const { t } = useTranslation();

  const SignupUsersGreetings = t('signupUsersGreetings');
  const EmailConfirmation = t('emailConfirmation');
  const GoToProfile = t('goToProfile');

  if (!query.email || !query.username) {
    return <Container>ups!! something is wrong :(</Container>;
  }

  return (
    <Content>
      <Logo src="/assets/logo/DOJO+_logo_official.svg" alt="logo" />
      <TextContainer>
        <Title>
          {SignupUsersGreetings}
          <span role="img" aria-label="">
            {' '}
            🤜🤛
          </span>
        </Title>
      </TextContainer>
      <TitleDescContainer>
        <TextWhite14Regular>{`${EmailConfirmation}(${query.email})`}</TextWhite14Regular>
      </TitleDescContainer>

      <ButtonContainer>
        <Link href={`/${query.username}`}>
          <LoadingButton fullWidth size="large">
            {GoToProfile}
          </LoadingButton>
        </Link>
      </ButtonContainer>
    </Content>
  );
};

export default RegisterForm;
