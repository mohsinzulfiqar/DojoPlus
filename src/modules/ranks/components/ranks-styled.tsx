import styled from 'styled-components';

export const RankContainer = styled.div`
  background-color: #333435;
  margin: 0.5rem;
  padding-bottom: 1rem;
  width: calc(50% - 1rem);
  -webkit-box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 600px) {
    width: calc(100% - 0.5rem);
  }
`;

export const DateAndVerification = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
export const VerificationBox = styled.div`
  border-radius: 12px;
  background-color: rgb(40, 40, 40);
  text-align: center;
  vertical-align: middle;
  height: 24px;
`;
export const ProfileCardVerification = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  margin: 0px;
`;
export const ContainerCategory = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 15px 0px 15px;
  padding: 0px 16px;
`;
export const BeltImage = styled.img`
  width: 100%;
  box-shadow: 0 -3px 0 rgba(34, 34, 34, 0.35);
`;
export const NoBelt = styled.div`
  margin: 0px;
  width: 100%;
  height: 24px;
  padding: 0px;
  opacity: 0.05;
  background-color: gray;
`;
export const ContainerSchoolMaster = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 48px;
  max-height: fit content;
  padding: 0px 16px 5px;
  margin-top: 16px;
`;
export const BeltImgCont = styled.div``;
export const MasterImage = styled.img`
  object-fit: cover;
  height: 48px;
  width: 48px;
  position: absolute;
`;
export const MasterBelt = styled.img`
  background-color: #484848;
  align-content: flex-end;
  max-width: 48px;
  height: 7px;
  position: relative;
  top: 31px;
  left: 0px;
`;
export const NamesSchoolMaster = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 6px 0 6px;
`;
export const ContainerImgText = styled.div`
  display: flex;
`;
export const SchoolLogo = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  box-sizing: border-box;
`;
