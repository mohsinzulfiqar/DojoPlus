import styled from 'styled-components';
import { COLOR_LETTERS_WHITE } from '../../../shared/styles/colors';

export const MainDiv = styled.div`
  background: radial-gradient(circle, #404040 0, #111 100%);
  width: 500px;
  height: 500px;
  padding: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  } ;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;
export const ModalText = styled.div`
  color: ${COLOR_LETTERS_WHITE};
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-block: 3rem;
`;
export const RankAndIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CompetitionAndYear = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Category = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  align-items: center;
`;
export const Medal = styled.img`
  layout: intrinsic;
  width: 140px;
  height: 140px;
  margin-block: 1rem;
`;
