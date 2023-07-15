import React from 'react';

const Cars = () => {
    return (
        <>
            <div>
                <h1 className='text-center text-3xl my-3'>
                    Cars Records
                </h1>
            </div>
            <div >

                <div className="container mx-auto px-4">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration No</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Car Model</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Car Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">ABC123</td>
                                <td className="px-6 py-4 whitespace-nowrap">Toyota</td>
                                <td className="px-6 py-4 whitespace-nowrap">$30,000.00</td>
                                <td className="px-6 py-4 whitespace-nowrap">Camry</td>
                                <td className="px-6 py-4 whitespace-nowrap">Red Car</td>
                                <td className="px-6 py-4 whitespace-nowrap">1</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default Cars;
