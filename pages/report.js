import React from 'react';

const Report = () => {
    return (
        <>
            <div>
                <h1 className='text-center text-3xl my-3'>
                    Reports Record
                </h1>
            </div>
            <div >

                <div class="container mx-auto px-4">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment Number</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">12345</td>
                                <td class="px-6 py-4 whitespace-nowrap">John Smith</td>
                                <td class="px-6 py-4 whitespace-nowrap">Engine Specialist</td>
                                <td class="px-6 py-4 whitespace-nowrap">$50,000.00</td>
                                <td class="px-6 py-4 whitespace-nowrap">1</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default Report;
