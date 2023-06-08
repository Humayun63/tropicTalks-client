import React from 'react';
import usePaymentHistory from '../../../../customHooks/usePaymentHistory';
import moment from 'moment/moment';

const PaymentHistory = () => {
    const { payments } = usePaymentHistory()
    return (
        <div>
            <div>
                <h1 className='text-3xl text-center text-green-500 font-bold my-8'>Your Previous Payment Information</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 shadow-2xl rounded-md">
                    <thead className="bg-green-500">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                Cost
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                                TransactionId
                            </th>

                        </tr>
                    </thead>
                    <tbody className="bg-green-200 divide-y divide-gray-200">
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{index + 1}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{
                                        moment(payment.date).format('Do MMMM, YYYY')
                                    }</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">${payment.price}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">${payment.transactionId}</div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;