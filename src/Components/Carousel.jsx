import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './stle.css'
const Carousel = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        arrows: false,
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
        'https://media.licdn.com/dms/image/C560BAQFoNmwU3K_upA/company-logo_200_200/0/1630668159361/4care_lifescience_private_limited_bagdol_logo?e=1721260800&v=beta&t=BstZC--T5GDk40_bl6ZHHkmmoqiE7_4Iryc750QyQZg',
        'https://media.licdn.com/dms/image/C4E0BAQHxxF7Y1Szmng/company-logo_200_200/0/1662721429921/enomark_pharma_pvt_ltd_logo?e=2147483647&v=beta&t=9yHgYptPWfAAYshEEJaDxItym-0YqrDsEEDdPfSST_s',
        'https://collabact.com/CollabActFiles/BusinessLogos/18/BB12Va22010018_AURASOUL_LIFESCIENCE_LLP..webp',
        'https://www.sevattopharma.com/images/logo.png',
        'https://www.franchisexpress.in/healthcareformulations/images/logo.png',
        'https://media.licdn.com/dms/image/C4D0BAQFnvmyXTAKp5A/company-logo_200_200/0/1631315066282?e=2147483647&v=beta&t=oDUypRajbEYUSU83Mm_iJBsLRBHM4Q4EaY5iym4F-wg',
        'https://media.licdn.com/dms/image/C4D0BAQGUBRN1t5SE2g/company-logo_200_200/0/1663130497542?e=2147483647&v=beta&t=J7bh-76qwRnpfAxrD8FdG4-2ttsDfEuZ6ImaDNj6jeE',
        'https://media.licdn.com/dms/image/C4D0BAQGUBRN1t5SE2g/company-logo_200_200/0/1663130497542?e=2147483647&v=beta&t=J7bh-76qwRnpfAxrD8FdG4-2ttsDfEuZ6ImaDNj6jeE',
        'https://shinepharma.com/wp-content/uploads/2018/10/logo-transparent2.png',
        'https://yogeshhealthcare.com/wp-content/uploads/2022/12/logo-png.png',
        'https://pushtipack.com/wp-content/uploads/2018/08/logo-1.png',
        'https://zenexah.com/wp-content/uploads/2024/02/Zenex-Logo.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3LG9n6YnyJXvXaQNi-RzNbKp3D4kr_d1FZZDkanwhIg&s',
        'https://tiimg.tistatic.com/co_logo/3660163/dev-life-corporation-v3.jpg',
        'https://www.svhealthcare.in/wp-content/uploads/2023/03/SV-Healthcare-logo-1.png',
        'https://www.usquare.biz/images/logo.png',
        'https://media.licdn.com/dms/image/C5603AQF7ZZUW4E_ILg/profile-displayphoto-shrink_200_200/0/1637841778662?e=2147483647&v=beta&t=zYyPAU2R-VOq_pSNVPYnCDULAdNbWW3FrMGPIFQhXDE',
        'https://www.centurionhealthcare.com/storage/logo/centurion-logo.png',
        'https://media.licdn.com/dms/image/C561BAQEQgO-lVpVkQA/company-background_10000/0/1590048090707/sangharsh_lifecare_pvt_ltd_cover?e=2147483647&v=beta&t=LHyKq9QPUzBgUCgIHEyfU1rub-yo4SD32QqfcEzY5aM',
        'https://renownpharma.com/wp-content/uploads/2020/10/cropped-renown-logo.png',
        'https://rjpharma.in/wp-content/uploads/2021/05/RJ_pharma_logo-1.png',
        'https://oceanpharmaceutical.com/wp-content/uploads/2023/09/Ocean-Logo-1.png',
        'https://www.mercurylabs.com/images/mercurylogo.png'
        // Add more image URLs here...
    ];



    return (
        <>
            <hr className='' />
            <div className='bg-blue-300 pt-1 pb-7'>
                <div className='grid justify-center mb-10'>
                    <div className='flex justify-center pb-14'>
                        <p className='relative text-1 lg:pr-0 lg:pl-0 pl-10 pr-10   grid justify-center lg:text-8xl text-5xl font-bold text-white font-sans font-outline-2 outline-blue-700 text-opacity-25'>Our Clients </p>
                        <h1 className='absolute text-2 font-bold lg:pt-16 pt-5 lg:text-5xl text-3xl text-blue-950'>Our Clients</h1>
                        {/* <h1 className='z-5 text-5xl text-blue-950 font-bold'>Our Products</h1> */}
                    </div>
                </div>
                <div className='Client-logos'>
                    <div className='pl-10 pr-10 '>

                        <Slider {...settings} ref={sliderRef}>
                            {images.map((image, index) => (
                                <div key={index}>

                                    <img src={image} alt={`Image ${index}`} />
                                </div>
                            ))}
                        </Slider>

                    </div>
                </div>
                <div className='text-center mt-4 flex'>
                    <button onClick={handlePrevious} className='grid justify-start bg-blue-950 rounded-lg text 5xl ml-10 text-white p-5'><FaArrowLeft /></button>
                    <button onClick={handleNext} className='grid justify-end ml-auto bg-blue-950 rounded-lg text 3xl mr-10 text-white p-5'><FaArrowRight /></button>
                </div>
            </div>
        </>

    );
};

export default Carousel;
