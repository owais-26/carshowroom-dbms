import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div>
            <>
                <section id="hero" className="text-gray-600 body-font mb-3">
                    <div className="container px-5  mx-auto">
                        <div className="flex flex-col text-center w-full mb-10">
                            <h1 className=""></h1>
                            <h1 className="sm:text-3xl text-2xl font-medium mt-10 title-font mb-4 text-gray-900">Driving Success: Empowering Car Dealerships <br /> with Seamless Online Management</h1>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Admin</h2>
                                
                                <Link href={'/admin'}  className="text-green-400 font-bold hover:text-green-200 inline-flex items-center">See Records
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Appointment</h2>
                                
                                <Link href={'/appointment'}  className="text-green-400 font-bold hover:text-green-200 inline-flex items-center">See Records
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Cars</h2>
                                
                                <Link href={'/cars'}  className="text-green-400 font-bold hover:text-green-200 inline-flex items-center">See Records
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Customers</h2>
                                
                                <Link href={'/customers'}  className="text-green-400 font-bold hover:text-green-200 inline-flex items-center">See Records
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Inventory</h2>
                                
                                <Link href={'/inventory'}  className="text-green-400 font-bold hover:text-green-200 inline-flex items-center">See Records
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Login</h2>
                                
                                <Link href={'/login'}  className="text-green-400 font-bold hover:text-green-200 inline-flex items-center">See Records
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Mechanic</h2>
                                
                                <Link href={'/mechanic'}  className="text-green-400 font-bold hover:text-green-200 inline-flex items-center">See Records
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Payments</h2>
                                
                                <Link href={'/payments'}  className="text-green-400 font-bold hover:text-green-200 inline-flex items-center">See Records
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Report</h2>
                                
                                <Link href={'/report'}  className="text-green-400 font-bold hover:text-green-200 inline-flex items-center">See Records
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Token</h2>
                                
                                <Link href={'/token'}  className="text-green-400 font-bold hover:text-green-200 inline-flex items-center">See Records
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                           
                        </div>
                        
                    </div>
                </section>
            </>
            <>
                <footer className="text-gray-600 body-font mt-10">
                    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                            <img src="/cars.png" alt="logo" width={50} height={50} className='rounded-full' />
                            <span className="ml-3 text-xl">CarnCars</span>
                        </a>
                        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 CarnCars —
                            <a href="https://twitter.com/knyttneve" className="text-gray-200 ml-1" rel="noopener noreferrer" target="_blank">@dbms</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-blue-700">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-blue-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-red-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-white-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </footer>
            </>
        </div>
        
    );
}

export default Hero;
