import React from 'react';
import dayjs from 'dayjs';
import {
  SeminarCardContainer,
  PosterContainer,
  PosterImg,
  PosterText,
  DescriptionContainer,
  DateContainer,
  DetailContainer,
} from './seminars.styled';
import {
  TextWhite20UppercaseRegular,
  TextOrange12Regular,
  TextWhite12Regular,
  TextGray12,
  TextWhite16CapitalizeThin,
  TextWhite12UppercaseBold,
} from '../../../shared/components/texts';
import { DefaultAvatar } from '../../../shared/components/DefaultAvatar';
import { SeminarData } from '../../../shared/models/Seminar.model';

type SeminarsProps = {
  data: SeminarData;
};

export const SeminarCard: React.FC<SeminarsProps> = ({ data }) => {
  const title = data?.eventTitle;
  const address = data?.address;

  const coverImage = data?.coverImage;
  const imgUrl = coverImage && coverImage[0]?.url;

  const date = data?.startDate;
  const fetcheddate = dayjs(date).format('dddd-MMMM D-YYYY');
  const formatedDate = fetcheddate.split('-');

  return (
    <SeminarCardContainer>
      <PosterContainer>
        <PosterImg src={imgUrl || DefaultAvatar} alt="" />
        <PosterText>
          <TextWhite16CapitalizeThin>{title}</TextWhite16CapitalizeThin>
        </PosterText>
      </PosterContainer>
      <DescriptionContainer>
        <DateContainer>
          <TextOrange12Regular>{formatedDate[1]}</TextOrange12Regular>
          <TextWhite20UppercaseRegular>
            {formatedDate[0]}
          </TextWhite20UppercaseRegular>
          <TextWhite12UppercaseBold>{formatedDate[2]}</TextWhite12UppercaseBold>
        </DateContainer>
        <DetailContainer>
          <TextWhite12Regular>Martial arts</TextWhite12Regular>
          <span>
            <TextGray12>{address?.split('\\n').join(' ')}</TextGray12>
          </span>
        </DetailContainer>
      </DescriptionContainer>
    </SeminarCardContainer>
  );
};
