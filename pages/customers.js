import React from 'react';

const Customers = () => {
    return (
       <>
       <div>
        <h1 className='text-center text-3xl my-3'>
            Customers Record
        </h1>
       </div>
           <div >

                <div class="container mx-auto px-4">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile No</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">1</td>
                                <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
                                <td class="px-6 py-4 whitespace-nowrap">30</td>
                                <td class="px-6 py-4 whitespace-nowrap">Male</td>
                                <td class="px-6 py-4 whitespace-nowrap">1234567890</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>

           </div>
       </>
    );
}

export default Customers;
