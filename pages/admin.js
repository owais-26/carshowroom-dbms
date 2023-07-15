import React from 'react';

const Admin = () => {
    return (
        <div>
            <>
                <div>
                    <h1 className='text-center text-3xl my-3'>
                        Admins Table
                    </h1>
                </div>
                <div >

                    <div className="container mx-auto px-4">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile No</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">1</td>
                                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                                    <td className="px-6 py-4 whitespace-nowrap">30</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Male</td>
                                    <td className="px-6 py-4 whitespace-nowrap">1234567890</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </>
        </div>
    );
}

export default Admin;
