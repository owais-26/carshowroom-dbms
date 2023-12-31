import React from 'react';

const Inventory = () => {
    return (
        <>
            <>
                <div>
                    <h1 className='text-center text-3xl my-3'>
                        Inventories Record
                    </h1>
                </div>
                <div >

                    <div className="container mx-auto px-4">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Type</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration No</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">1</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Car Part</td>
                                    <td className="px-6 py-4 whitespace-nowrap">10</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Engine Oil</td>
                                    <td className="px-6 py-4 whitespace-nowrap">ABC123</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </>
        </>
    );
}

export default Inventory;
