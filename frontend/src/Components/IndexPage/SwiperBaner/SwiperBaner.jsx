import React, { useCallback, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './SwiperBaner.css'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function SwiperBaner() {

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };


    return (
        <div className='relative parentSwiper '>
            <div className="prev-arrow cursor-pointer text-white text-[40px] absolute right-6 bottom-1/2 z-10" onClick={handlePrev}><IoIosArrowForward /></div>
            <Swiper
                ref={sliderRef}
                effect={'fade'}
                pagination={pagination}
                modules={[Navigation, Pagination, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/src/assets/images/Swiper/1.jpg" alt="1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/images/Swiper/2.jpg" alt="2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/images/Swiper/3.jpg" alt="3" />
                </SwiperSlide>
            </Swiper>

            <div className="next-arrow cursor-pointer text-white text-[40px] absolute left-6 bottom-1/2 z-10" onClick={handleNext}><IoIosArrowBack /></div>
        </div>
    )
}
