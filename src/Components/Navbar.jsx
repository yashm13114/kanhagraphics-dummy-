import React, { useState } from 'react'
import {
    Collapse,
    initTWE,
} from "tw-elements";
import Logo from '../assets/images/image.svg'
import Design from '../assets/images/Design.svg'
import { Home } from './Home';
import ContactUs from './ContactUs';
export const Navbar = () => {
    initTWE({ Collapse });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            {/* <div className=' lg:flex hidden'>
                <img src={Design} className='h-16 w-[500px]' alt="" />
                <img src={Design} className='h-16 w-[500px]' alt="" />
                <img src={Design} className='h-16 w-[500px]' alt="" />
            </div>
            <div className=' lg:hidden md:flex hidden'>
                <img src={Design} className='h-16 ' alt="" />
                <img src={Design} className='h-16' alt="" />
                <img src={Design} className='h-16' alt="" />
                <img src={Design} className='h-16' alt="" />
            </div>
            <div className='lg:hidden flex'>
                <img src={Design} className='h-16 ' alt="" />
                
            </div> */}
            <nav className= "sticky bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">

                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="flex items-center">

                        <img
                            className="me-2 h-16"
                            src={Logo}
                            alt="TE Logo"
                            loading="lazy" />
                    </a>

                    <div className="flex items-center">
                        <button
                            id="menu-toggle"
                            type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a
                                    href="#"
                                    className="block text-xl py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/About-Us"
                                    className="block text-xl py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block text-xl py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="block text-xl py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="Contact-Us"
                                    className="block text-xl py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}
