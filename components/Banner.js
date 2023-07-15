import React from 'react';

const Banner = () => {
    return (
       <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-3 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font text-5xl mb-4 font-medium text-gray-900">Car Showroom Inventory Management System
                            
                        </h1>
                        <p className="mb-8 leading-relaxed">Discover the Ultimate Car Showroom Management System - Optimize Inventory, Accelerate Sales, Simplify Service, and Delight Customers. Experience Seamless Operations, Real-Time Insights, and Unmatched Efficiency for Your Dealershisps Success!
                        
                          </p>
                        <div className="flex justify-center">
                            <a href="#hero"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See All Records</button></a>
                            
                            
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                        <img className="object-cover object-center rounded" alt="hero" src="/cars.png"/>
                    </div>
                </div>
            </section>
       </>
    );
}

export default Banner;
