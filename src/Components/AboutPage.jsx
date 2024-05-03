import React, { useState } from 'react';

// Importing Tailwind CSS styles
import 'tailwindcss/tailwind.css';
import '../App.css'
import logo from '../assets/images/LOGO.png'
import image2 from '../assets/images/LOGO.png';
import image1 from '../assets/images/LOGO.png'; // Import additional images
import image3 from '../assets/images/LOGO.png';
import Design2 from '../assets/images/kgDesign.png'
import Design3 from '../assets/images/kgDesign2.png'
import { Footer } from './Footer';

function AboutPage() {


    return (
        <>


            <div className="font-inter bg-blue-950">
                <div className='absolute pb-28'>
                    <img className='w-[50%] h-[40%] remove-white-background' src={Design2} alt="" />
                </div>
                <section className="py-14 lg:py-24 relative">

                    <div className="mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">

                            <div className="img-box">
                                <img src="https://assets-v2.lottiefiles.com/a/e84e8ee6-1170-11ee-9647-d3729348d81a/WnrwQzHsg9.gif" alt="About Us tailwind page"
                                    className="max-lg:mx-auto rounded-3xl" />
                            </div>
                            <div className="lg:pl-[100px] flex items-center">
                                <div className="data w-full">
                                    <h2
                                        className="font-manrope font-bold text-4xl lg:text-5xl text-white mb-9 max-lg:text-center relative">
                                        About
                                        Us </h2>
                                    <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                        We are printing and design agency with passion for helping
                                        businesses and individuals succeed through the power of
                                        design and print. With over 16 years of experience in the industry,
                                        we have honed our skills in graphic designing and packing
                                        material printing.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                <hr />
                <div className=" min-h-screen pb-10 py-10">
                    <div className="mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                            <div className="img-box">
                                <img src="https://i.pinimg.com/originals/bb/0c/c7/bb0cc783196fa9b2119864ff90eb5702.gif" alt="About Us tailwind page" className="lg:rounded-tl-[200px] lg:rounded-br-[200px] rounded-br-[100px] rounded-tl-[100px] max-lg:mx-auto shadow-lg" />
                            </div>
                            <div className="lg:pl-[100px] flex items-center">
                                <div className="data w-full">
                                    <p className="font-normal text-xl leading-8 text-white max-lg:text-center max-w-2xl mx-auto mb-6">
                                        Our mission is to provide high-quality printing and design solutions tailored to the unique needs of our
                                        clients. Whether you need custom packaging materials, labels, or promotional materials, we are dedicated
                                        to delivering excellence in both product and service.
                                    </p>
                                    <p className="font-normal text-xl leading-8 text-white max-lg:text-center max-w-2xl mx-auto mb-6">
                                        At our agency, creativity and collaboration are at the heart of everything we do. We believe in working
                                        closely with our clients to understand their goals and bring their vision to life through innovative
                                        design and meticulous attention to detail. Let us be your partner in success, and together, we can create
                                        impactful print solutions that elevate your brand and exceed your expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 lg:px-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={image2} alt="Image 2" className="w-full h-56 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Printing</h3>
                                <p className="text-gray-600">
                                    Our state-of-the-art printing technology ensures the highest quality results for all your printing needs.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={image3} alt="Image 3" className="w-full h-56 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Creative Design</h3>
                                <p className="text-gray-600">
                                    Our team of talented designers is dedicated to bringing your ideas to life with creative and innovative
                                    designs.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={logo} alt="Company Logo" className="w-full h-56 object-cover object-center" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Satisfaction</h3>
                                <p className="text-gray-600">
                                    We prioritize customer satisfaction and strive to exceed expectations with every project we undertake.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>




                <section className="py-20 bg-blue-300">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">Our results in numbers</h2>
                        <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
                            <div
                                className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                                <div className="flex gap-5">
                                    <div className="font-manrope text-2xl font-bold text-indigo-600">
                                        240%
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                                        <p className="text-xs text-gray-500 leading-5">Company's remarkable growth journey as we
                                            continually innovate and drive towards new heights of success.</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                                <div className="flex gap-5">
                                    <div className="font-manrope text-2xl font-bold text-indigo-600">
                                        175+
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                                        <p className="text-xs text-gray-500 leading-5">Our very talented team members are the powerhouse
                                            of pagedone and pillars of our success. </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                                <div className="flex gap-5">
                                    <div className="font-manrope text-2xl font-bold text-indigo-600">
                                        625+
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl text-gray-900 font-semibold mb-2">Projects Completed</h4>
                                        <p className="text-xs text-gray-500 leading-5">We have accomplished more than 625 projects
                                            worldwide and we are still counting many more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            <div className="bg-blue-950 mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                    <div className="img-box">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SWqXl4AX8FLao5CHV1VcX_vAWB-40X-3V6KWCaIogA&s' alt="About Us tailwind page" className="absolute lg:h-[46%] lg:w-[17%] h-[15%] w-[25%] lg:ml-72 ml-16  rounded-full" />
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SWqXl4AX8FLao5CHV1VcX_vAWB-40X-3V6KWCaIogA&s' alt="About Us tailwind page" className="relative lg:h-[76%] lg:w-[60%] h-[95%] w-[40%] rounded-full" />
                    </div>
                    <div className="lg:pl-[100px] flex items-center">
                        <div className="data w-full">
                            <p className="font-normal text-xl leading-8 text-white max-lg:text-center max-w-2xl mx-auto mb-6">
                                Our mission is to provide high-quality printing and design solutions tailored to the unique needs of our
                                clients. Whether you need custom packaging materials, labels, or promotional materials, we are dedicated
                                to delivering excellence in both product and service.
                            </p>
                            <p className="font-normal text-xl leading-8 text-white max-lg:text-center max-w-2xl mx-auto mb-6">
                                At our agency, creativity and collaboration are at the heart of everything we do. We believe in working
                                closely with our clients to understand their goals and bring their vision to life through innovative
                                design and meticulous attention to detail. Let us be your partner in success, and together, we can create
                                impactful print solutions that elevate your brand and exceed your expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />

        </>
    );
}

export default AboutPage;

