import React, { useState } from 'react';

// Importing Tailwind CSS styles
import 'tailwindcss/tailwind.css';
import '../App.css'
import { Footer } from './Footer';

function AboutPage() {


    return (
        <>


            <div className="font-inter bg-blue-950">
                <section className="py-14 lg:py-24 relative">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                            <div className="img-box">
                                <img src="https://pagedone.io/asset/uploads/1702034769.png" alt="About Us tailwind page"
                                    className="max-lg:mx-auto" />
                            </div>
                            <div className="lg:pl-[100px] flex items-center">
                                <div className="data w-full">
                                    <h2
                                        className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                                        About
                                        Us </h2>
                                    <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                        Driven by a passion for seamless user experiences, we've meticulously curated pagedone
                                        to empower creators, designers, and developers alike. Our mission is to provide a
                                        comprehensive toolkit,
                                        enabling you to build intuitive, beautiful interfaces that resonate with users on every
                                        interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



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

                <section className=" py-14 lg:py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                        <div className="mb-16 rounded-full">
                            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">What our happy user says!</h2>
                        </div>

                        <div className="swiper mySwiper2">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="relative mb-20">
                                        {/* <!--Slider Wrapper--> */}
                                        <div className="max-w-max mx-auto lg:max-w-4xl">
                                            <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                                                I have been using pagedone for several months now, and I must say that it has made my life a lot
                                                easier. The
                                                platform's intuitive interface and ease of use have allowed me to manage my finances more effectively
                                                and
                                                make informed investment decisions. I particularly like the product's auto-tracking feature, which has
                                                saved
                                                me a lot of time and effort.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="relative mb-20">
                                        {/* <!--Slider Wrapper--> */}
                                        <div className="max-w-max mx-auto lg:max-w-4xl">
                                            <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                                                I have been using pagedone for several months now, and I must say that it has made my life a lot
                                                easier. The
                                                platform's intuitive interface and ease of use have allowed me to manage my finances more effectively
                                                and
                                                make informed investment decisions. I particularly like the product's auto-tracking feature, which has
                                                saved
                                                me a lot of time and effort.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="relative mb-20">
                                        {/* <!--Slider Wrapper--> */}
                                        <div className="max-w-max mx-auto lg:max-w-4xl">
                                            <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                                                I have been using pagedone for several months now, and I must say that it has made my life a lot
                                                easier. The
                                                platform's intuitive interface and ease of use have allowed me to manage my finances more effectively
                                                and
                                                make informed investment decisions. I particularly like the product's auto-tracking feature, which has
                                                saved
                                                me a lot of time and effort.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <Footer />

        </>
    );
}

export default AboutPage;

