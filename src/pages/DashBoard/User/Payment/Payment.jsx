import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useSelected from '../../../../customHooks/useSelected';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_TOKEN)
const Payment = () => {
    const { myClass } = useSelected()
    const total = myClass.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full mx-2 md:w-11/12 md:mx-auto'>
            <h2 className='text-3xl font-semibold text-center my-8'>Proceed payment to enroll Courses!</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price} selectedItems={myClass}></CheckoutForm>
                </Elements>
            </div>
        </div>

    );
};

export default Payment;