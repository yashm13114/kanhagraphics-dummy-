import React, { useEffect } from 'react'
import {
    Ripple,
    initTWE,
} from "tw-elements";
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import Logo from '../assets/images/image.svg'
import Carousel from './Carousel';
import './stle.css'
export const Home = () => {
    initTWE({ Ripple });
    useEffect(() => {
        const handleScroll = () => {
            const productElements = document.querySelectorAll('.animated-item');
            productElements.forEach(product => {
                const productPosition = product.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;
                if (productPosition < screenHeight) {
                    product.classList.add('animated-item');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className=''>
                <div className="relative h-[700px] overflow-hidden bg-[url('https://www.accurate.in/img/college/1681558312-best-educational-apps-featured_1.jpg')] bg-cover bg-no-repeat bg-center p-12 text-center text-white">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/20 bg-fixed">
                        <div className="flex h-full items-center justify-center">
                            <div className="text-white">
                                <div id="floatingText" className='header '>
                                    <p className='lg:pr-0 lg:pl-0 pl-10 pr-10 lg:text-8xl grid justify-center text-6xl font-bold text-white font-sans font-outline-2 outline-white text-opacity-30'>We Bring Your Vision</p>
                                    <p className='lg:text-8xl text-white flex justify-center text-6xl font-bold font-sans outline-white text-opacity-30'>to reality</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* about */}
                <section className="p-10 bg-blue-950 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]  text-white dark:bg-dark">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center justify-between -mx-4">
                            <div className="w-full px-4 lg:w-6/12">
                                <div className="flex items-center -mx-3 sm:-mx-4">
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                        <div className="py-3 sm:py-4">
                                            <img
                                                src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                        <div className="py-3 sm:py-4">
                                            <img
                                                src="https://i.ibb.co/rfHFq15/image-2.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                        <div className="relative z-10 my-4">
                                            <img
                                                src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                            <span className="absolute -right-7 -bottom-7 z-[-1]">
                                                <svg
                                                    width={134}
                                                    height={106}
                                                    viewBox="0 0 134 106"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="1.66667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 31 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3334"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3334 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 103 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy={104}
                                                        r="1.66667"
                                                        transform="rotate(-90 132 104)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="89.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 89.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="89.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 89.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="74.6673"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 74.6673)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="31.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 31.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="74.6668"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 74.6668)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="30.9998"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 30.9998)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="60.0003"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 60.0003)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="16.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 16.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="1.66667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 1.66667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="16.3333"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 16.3333 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={31}
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 31 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="45.3333"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 45.3333)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="45.6667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 45.6667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="60.3333"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 60.3333 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="88.6667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 88.6667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="117.667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 117.667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx="74.6667"
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 74.6667 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={103}
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 103 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="45.3338"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 45.3338)"
                                                        fill="#3056D3"
                                                    />
                                                    <circle
                                                        cx={132}
                                                        cy="1.66683"
                                                        r="1.66667"
                                                        transform="rotate(-90 132 1.66683)"
                                                        fill="#3056D3"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                <div className="mt-10 lg:mt-0">
                                    <span className="block mb-4 text-lg font-semibold text-primary">
                                        Why Choose Us
                                    </span>
                                    <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                        Make our customers happy by giving services.
                                    </h2>
                                    <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                        Kanna Graphic, a dedicated printing and design agency passionate about empowering businesses and individuals through impactful design and print solutions.

                                    </p>
                                    <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                        With over five years of industry experience, we specialize in crafting bespoke printed packaging materials, including cartons, customized labels, leaflets, and cylindrical printing on various substrates like Alu-Alu Blister, Alu-PVC Blister, and more. Our commitment to quality extends to offering minimum quantities as low as 10 pieces, ensuring accessibility without compromising excellence.

                                    </p>
                                    <Link
                                        to="/About-Us"
                                        className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                                    >
                                        More...
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* products */}
                {/* <div className="bg-[url('https://pharmanewsintel.com/images/site/article_headers/_normal/drug_one.png')]  bg-cover bg-inherit bg-no-repeat pt-10"> */}
                {/* <div className=" pt-10 bg-blue-300">
                    <div className='flex justify-center pb-14'>
                        <p className='relative text-1 lg:pr-0 lg:pl-0 pl-10 pr-10   grid justify-center lg:text-8xl text-5xl font-bold text-white font-sans font-outline-2 outline-blue-700 text-opacity-25'>Our Products </p>
                        <h1 className='absolute text-2 font-bold lg:pt-16 pt-5 lg:text-5xl text-3xl text-blue-950'>Our Products</h1>
                   
                    </div>
                    

                    <div className='grid justify-center  pb-7'>
                        <div className='lg:flex lg:justify-evenly inline-block pr-10 pl-10'>

                            <div className='animated-item'>
                                <img src="https://www.centurionhealthcare.com/storage/homepage/GASTRO%20CARE.jpg" className='h-[75%] rounded-xl ' alt="" />
                            </div>
                            <div className='animated-item'>
                                <img src="https://www.centurionhealthcare.com/storage/homepage/GASTRO%20CARE.jpg" className='h-[75%] rounded-xl lg:mt-0 mt-10' alt="" />
                            </div>
                            <div className='animated-item'>
                                <img src="https://www.centurionhealthcare.com/storage/homepage/GASTRO%20CARE.jpg" className='h-[75%] rounded-xl lg:mt-0 mt-10' alt="" />
                            </div>
                        </div>
                        
                    </div>
                    
                </div> */}

                {/* 3D card */}
                {/* <div className='lg:flex inline-block lg:p-0 p-16 justify-evenly bg-blue-300'>
                    <div className="card mt-10 mb-10 w-[400px] h-[400px]">
                        <div className="content">
                            <div className="back">
                                <div className="back-content p-5">
                                    <img src={Logo} alt="" />
                                    <strong>Read...</strong>
                                </div>
                            </div>
                            <div className="front">

                                <div className="img">
                                    <div className="circle">
                                    </div>
                                    <div className="circle" id="right">
                                    </div>
                                    <div className="circle" id="bottom">
                                    </div>
                                </div>

                                <div className="front-content text-4xl">
                                    <small className="badge">Pasta</small>
                                    <div className="description">
                                        <div className="title">
                                            <p className="title">
                                                <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati laudantium enim possimus dolore, nulla dicta illum quod molestias dolorem, autem voluptate ipsam. Cumque alias voluptates, vero modi consequatur labore!</strong>
                                            </p>
                                            <p className="title ">
                                                <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati laudantium enim possimus dolore, nulla dicta illum quod molestias dolorem, autem voluptate ipsam. Cumque alias voluptates, vero modi consequatur labore!</strong>
                                            </p>

                                        </div>
                                        <p className="card-footer">
                                            30 Mins &nbsp; | &nbsp; 1 Serving
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-10 mb-10 w-[400px] h-[400px]">
                        <div className="content">
                            <div className="back">
                                <div className="back-content p-5">
                                    <img src={Logo} alt="" />
                                    <strong>Read...</strong>
                                </div>
                            </div>
                            <div className="front">

                                <div className="img">
                                    <div className="circle">
                                    </div>
                                    <div className="circle" id="right">
                                    </div>
                                    <div className="circle" id="bottom">
                                    </div>
                                </div>

                                <div className="front-content">
                                    <small className="badge">Pasta</small>
                                    <div className="description">
                                        <div className="title">
                                            <p className="title">
                                                <strong>Spaguetti Bolognese</strong>
                                            </p>
                                            <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                                        </div>
                                        <p className="card-footer">
                                            30 Mins &nbsp; | &nbsp; 1 Serving
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-10 mb-10 w-[400px] h-[400px]">
                        <div className="content">
                            <div className="back">
                                <div className="back-content p-5">
                                    <img src={Logo} alt="" />
                                    <strong>Read...</strong>
                                </div>
                            </div>
                            <div className="front">

                                <div className="img">
                                    <div className="circle">
                                    </div>
                                    <div className="circle" id="right">
                                    </div>
                                    <div className="circle" id="bottom">
                                    </div>
                                </div>

                                <div className="front-content">
                                    <small className="badge">Pasta</small>
                                    <div className="description">
                                        <div className="title">
                                            <p className="title">
                                                <strong>Spaguetti Bolognese</strong>
                                            </p>
                                            <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                                        </div>
                                        <p className="card-footer">
                                            30 Mins &nbsp; | &nbsp; 1 Serving
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='bg-blue-300'>
                    <div className='grid justify-center lg:mb-10'>
                        <div className='flex justify-center pb-5'>
                            <p className='relative text-1 lg:pr-0 lg:pl-0 pl-10 pr-10   grid justify-center lg:text-8xl md:text-3xl text-2xl font-bold text-white font-sans font-outline-2 outline-blue-700 text-opacity-25'>Our Printing Services </p>
                            <h1 className='absolute text-2 font-bold lg:pt-16 pt-5 lg:text-5xl md:text-2xl text-xl text-white'>Our Printing Services</h1>

                        </div>
                    </div>
                    <div className=' lg:flex inline-block justify-evenly   pt pb-10'>


                        <div className="lg:w-80 md:w-full w-[80%] lg:h-auto md:h-[500px] relative lg:m-0 m-10 rounded-xl bg-blue-950 bg-clip-border text-white shadow-md">
                            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg')]">
                            </div>
                            <div className="p-6">
                                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Cartons
                                </h5>
                                <h1 className='text-3xl font-bold underline mb-1'>Benefits:</h1>

                                <ul className="list-disc block ml-4 font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                    <li>No dia cost, No punching cost</li>
                                    <li>Working 2 - 3 days fast delivery</li>
                                    <li>Minimum quantity: 10 nos.</li>
                                </ul>

                            </div>
                            <div className="p-6 pt-0">
                                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <Link to="/Services">Read More</Link>
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-80 md:w-full w-[80%] lg:h-auto md:h-[500px] relative lg:m-0 m-10 rounded-xl bg-blue-950 bg-clip-border text-white shadow-md">
                            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg')]">
                            </div>
                            <div className="p-6">
                                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Alu Alu Blisters / Alu PVC Blisters / Strips /
                                    Sachets Printing
                                </h5>
                                <h1 className='text-3xl font-bold underline mb-1'>Benefits:</h1>

                                <ul className="list-disc block ml-4 font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                    <li>Multicolor Printing</li>
                                    <li>Cylindrical type printing</li>
                                    <li> Door Step Delivery at Additional Cost</li>
                                </ul>

                            </div>

                            <div className="p-6 pt-0">
                                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <Link to="/Services">Read More</Link>
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-80 md:w-full w-[80%] lg:h-auto md:h-[500px] relative lg:m-0 m-10 rounded-xl bg-blue-950 bg-clip-border text-white shadow-md">
                            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-[url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg')]">
                            </div>
                            <div className="p-6">
                                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Lable Sheet Form
                                    (Round cut lable)
                                </h5>
                                <h1 className='text-3xl font-bold underline mb-1'>Benefits:</h1>

                                <ul className='list-disc block ml-4  font-sans text-base font-light leading-relaxed text-inherit antialiased'>
                                    <li>Multicolor Printing</li>
                                    <li>Cylindrical type printing</li>
                                    <li> Door Step Delivery at Additional Cost</li>
                                </ul>

                            </div>
                            <div className="p-6 pt-0">
                                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <Link to="/Services">Read More</Link>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

            <Carousel />
            <Footer />

        </>
    )
}
