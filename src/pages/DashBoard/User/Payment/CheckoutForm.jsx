import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../../../customHooks/useAxiosSecure';
import useAuth from '../../../../customHooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = ({ price, selectedItems }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        } else {
            console.log(paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown',
                    }
                }
            }
        )
        setProcessing(false)
        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Payment Success',
                showConfirmButton: false,
                timer: 1500
            })

            const payment = {
                name: user?.displayName,
                email: user?.email,
                price,
                date: new Date(),
                transactionId: paymentIntent.id,
                totalItems: selectedItems.length,
                selectedItemsIds: selectedItems.map(item => item._id),
                classIds: selectedItems.map(item => item.classId)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedResult.insertedId) {
                        // confirm
                    }
                })
            console.log(payment);

            navigate('/dashboard/user/enrolled')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='border-2 rounded-md shadow-lg p-4 '>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn-primary my-4 btn' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError &&
                <p className='text-red-500'>{cardError}</p>
            }
            {
                transactionId &&
                <p className='text-green-600 text-2xl'>Success! Your ID is: ${transactionId}</p>
            }
        </>

    );
};

export default CheckoutForm;