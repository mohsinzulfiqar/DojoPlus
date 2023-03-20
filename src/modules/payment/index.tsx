import React from 'react';
import { Elements } from '@stripe/react-stripe-js';

import getStripe from '../../../utils/get-stripejs';
import { PaymentForm } from './paymentForm';

interface PaymentViewProps {
  handlePaymentSubmit: (stripeId: string, email: string) => void;
  currency: string;
  amount: number;
  recurring?: boolean | null | undefined;
  priceId?: string | null | undefined;
}
const Payment: React.FC<PaymentViewProps> = ({
  handlePaymentSubmit,
  currency,
  amount,
  recurring,
  priceId,
}): JSX.Element => {
  return (
    <>
      <Elements stripe={getStripe()}>
        <PaymentForm
          handlePaymentSubmit={handlePaymentSubmit}
          currency={currency}
          amount={amount}
          recurring={recurring}
          priceId={priceId}
        />
      </Elements>
    </>
  );
};

export default Payment;
