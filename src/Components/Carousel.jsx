import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Clogo1 from '../assets/images/Clogo1.png'
import Clogo2 from '../assets/images/centurion2.png'
import Clogo3 from '../assets/images/Clogo3.png'
import Clogo4 from '../assets/images/Clogo4.png'
import Clogo5 from '../assets/images/Clogo5.png'
import Clogo6 from '../assets/images/Clogo6.png'
import Clogo7 from '../assets/images/Clogo7.png'
import Clogo8 from '../assets/images/Clogo8.png'
import Clogo9 from '../assets/images/Clogo9.png'
import Clogo10 from '../assets/images/Clogo10.png'
import Clogo11 from '../assets/images/Clogo11.png'
import Clogo12 from '../assets/images/Clogo12.png'
import Clogo13 from '../assets/images/Clogo13.png'
import Clogo14 from '../assets/images/Clogo14.png'
import Clogo15 from '../assets/images/Clogo15.png'
import Clogo16 from '../assets/images/Clogo16.png'
import Clogo17 from '../assets/images/Clogo17.png'
import './stle.css'
const Carousel = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handlePrevious = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };
    const images = [
        Clogo1,
        Clogo2,
        Clogo3,
        Clogo4,
        Clogo5,
        Clogo7,
        Clogo8,
        Clogo9,
        Clogo10,
        Clogo11,
        Clogo12,
        Clogo13,
        Clogo15,
        Clogo16,
        Clogo17
        // Add more image URLs here...
    ];



    return (
        <>
            <hr className='' />
            <div className='bg-blue-300 bg-remove pt-1 pb-7'>
                <div className='grid justify-center mb-10'>
                    <div className='flex justify-center pb-14'>
                        <p className='relative text-1 lg:pr-0 lg:pl-0 pl-10 pr-10   grid justify-center lg:text-8xl text-5xl font-bold text-white font-sans font-outline-2 outline-blue-700 text-opacity-25'>Our Clients </p>
                        <h1 className='absolute text-2 font-bold lg:pt-16 pt-5 lg:text-5xl text-3xl text-blue-950'>Our Clients</h1>
                        {/* <h1 className='z-5 text-5xl text-blue-950 font-bold'>Our Products</h1> */}
                    </div>
                </div>
                <div className='Client-logos'>
                    <div className='pl-10 pr-7'>

                        <Slider {...settings} ref={sliderRef}>
                            {images.map((image, index) => (
                                <>
                                    <div key={index} className='image-container'>
                                        <img src={image} alt={`Image ${index}`} className="p-16 carousel-image h-48 w-80" />

                                    </div>
                                </>

                            ))}
                        </Slider>

                    </div>
                </div>
                {/* <div className='text-center mt-4 flex'>
                    <button onClick={handlePrevious} className='grid justify-start bg-blue-950 rounded-lg text 5xl ml-10 text-white p-5'><FaArrowLeft /></button>
                    <button onClick={handleNext} className='grid justify-end ml-auto bg-blue-950 rounded-lg text 3xl mr-10 text-white p-5'><FaArrowRight /></button>
                </div> */}
            </div>
        </>

    );
};

export default Carousel;
