import React, { useState, useMemo, useCallback } from 'react';
// import Step1 from '../step/Step1';
import Step2 from '../step/Step2';
import Step3 from '../step/Step3';
import Footer from './Footer';
//  import { School, Product } from '../../../shared/types/generated';
import { Product, SchoolSchedules } from '../../../shared/models/school.model';

interface Plans extends SchoolSchedules {
  plans: Product[];
}

interface WrapperProps {
  data: Plans;
}

const Wrapper: React.FC<WrapperProps> = ({ data }): JSX.Element => {
  const currentPlans = useMemo(() => data?.plans || [], [data]);
  const [step, setStep] = useState(2);
  const [current, setCurrent] = useState<string>('');
  const [productSelected, setProductSelected] = useState<Product>();

  const onSelectPlan = useCallback(
    (planId: string, index: number) => {
      setCurrent(planId);
      if (currentPlans[index]) {
        setProductSelected(currentPlans[index] as Product);
      }
    },
    [currentPlans],
  );

  return (
    <>
      {/* {step === 1 ? (
        <Step1
          footer={<Footer step={step} setStep={setStep} selected={selected} />}
          data={data}
          setSelected={setSelected}
          selected={selected}
        />
      ) : null} */}
      {step === 2 ? (
        <Step2
          footer={
            <Footer step={step} setStep={setStep} selected={current?.length} />
          }
          planes={data.plans}
          onSelect={onSelectPlan}
          current={current}
        />
      ) : null}
      {step === 3 ? (
        <Step3 plan={productSelected} school={data as SchoolSchedules} />
      ) : null}
    </>
  );
};

export default Wrapper;
