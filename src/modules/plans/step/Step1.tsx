import * as React from 'react';
// import styled from 'styled-components';
// import { Box } from '@mui/material';

// import CardPlan from '../components/CardPlan';
// import { Container } from '../../../shared/components/layout/Container';
import { GetPlansQuery } from '../../../shared/types/generated';
import { EmptyViewAlert } from '../../../shared/components/EmptyViewAlert';

// NOTE: this component is not used but dont delete it yet

// const Content = styled(Box)`
//   padding-top: 5rem;
// `;

type StepProps = {
  footer: JSX.Element;
  data: GetPlansQuery;
  setSelected: (selected: number) => void | undefined;
  selected: number;
};

const Step1: React.FC<StepProps> = (): JSX.Element => {
  // const { productCategoriesList } = data;

  // if (
  //   productCategoriesList &&
  //   productCategoriesList.items[0].categoryProductRelation.items.length === 0
  // ) {
  //   return <EmptyViewAlert msg="Plans not found" />;
  // }
  // return (
  //   <>
  //     <Container>
  //       <Content>
  //         {productCategoriesList.items.map((value, i) => {
  //           if (value.categoryProductRelation.items.length > 0) {
  //             return (
  //               <CardPlan
  //                 name={value.name}
  //                 description={value.description}
  //                 key={value.id}
  //                 setSelected={setSelected}
  //                 selected={selected}
  //                 id={i}
  //               />
  //             );
  //           }
  //           return null;
  //         })}
  //       </Content>
  //       {footer}
  //     </Container>
  //   </>
  // );
  return <EmptyViewAlert msg="Plans not found" />;
};
export default Step1;
