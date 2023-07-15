import React from 'react';

const Payment = () => {
    return (
        <>
            <div>
                <h1 className='text-center text-3xl my-3'>
                    Payments Record
                </h1>
            </div>
            <div class="container mx-auto px-4">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Card Number</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">2023-07-15</td>
                            <td class="px-6 py-4 whitespace-nowrap">$100.00</td>
                            <td class="px-6 py-4 whitespace-nowrap">**** **** **** 1234</td>
                            <td class="px-6 py-4 whitespace-nowrap">1</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default Payment;
