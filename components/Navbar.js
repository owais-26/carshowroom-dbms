import React from 'react';

const Navbar = () => {
    return (
       <>
            <header className="text-gray-600 body-font ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">

                    </nav>
                    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <img src="/cars.png" alt="logo" width={50} height={50} className='rounded-full' />
                        <span className="ml-3 text-xl">CarnCars</span>
                    </a>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                       
                    </div>
                    
                </div>
            </header>
            
       </>
    );
}

export default Navbar;
