import React, { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Timer from './Timer';

export default function SwiperProductOffer({bgColor , title , img}) {

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    return (
        <div className={`${bgColor} py-5 pr-[10px] h-[445px] flex items-center gap-3`}>
            {/* info */}
            <div className='flex flex-col justify-center items-center gap-5 px-5 h-full'>
                <p className='font-DanaDemiBold text-2xl text-center text-white text-wrap'>{title} </p>
                <img className='w-[130px] h-[150px]' src={img} alt="1" />
                <Link className='text-white rounded-[5px] border border-white p-2 flex justify-center items-center gap-1'>مشاهده همه  <IoIosArrowBack /></Link>
            </div>
            <div className='relative w-[530px]'>
                <div className="cursor-pointer  shadow-md translate-x-1/2 w-[40px] h-[40px] bg-[#F7F7F7] rounded-[10px] text-[#4D4D4D] text-[20px] absolute right-0 bottom-1/2 z-10 flex justify-center items-center hover:bg-[#E21E24] hover:text-white transition-all duration-300" onClick={handlePrev}><IoIosArrowForward /></div>
                <Swiper
                    ref={sliderRef}
                    speed={1200}
                    slidesPerView={3}
                    modules={[Navigation , Autoplay]}
                    autoplay={true}
                    // breakpoints={{
                    //     '@0.00': {
                    //         slidesPerView: 1,
                    //         spaceBetween: 10,
                    //     },
                    // }}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className='w-[163px] h-[405px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <img className='w-[156px] h-[201px]' src="/src/assets/images/offerProduct/2.png" alt="2" />
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] h-[75px] line-clamp-3'>  گوی مدل Pocoابایت</p>
                                {/* price */}
                                <div className='flex items-center justify-center gap-1'>
                                    <p className='text-[16px]/[31px] font-DanaDemiBold'>11,678,800</p>
                                    <p className='text-xs'>تومان</p>
                                </div>
                                {/* price offer */}
                                <div className='flex justify-center items-center gap-4'>
                                    <p className='text-[13px] text-[#999999] line-through'>11,678,800</p>
                                    <div className='w-[40px] h-[20px] bg-[#D90000] rounded-[10px]'>
                                        <p className='text-white text-sm/[22px] text-center'>%10</p>
                                    </div>
                                </div>
                            </div>
                            {/* timer */}
                            <div className='py-[7px] bg-[#E21E24]'>
                                    <div className='font-DanaDemiBold text-center text-white text-sm'><Timer /></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[163px] h-[405px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <img className='w-[156px] h-[201px]' src="/src/assets/images/offerProduct/2.png" alt="2" />
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] h-[75px] line-clamp-3'>  گوی مدل Pocoابایت</p>
                                {/* price */}
                                <div className='flex items-center justify-center gap-1'>
                                    <p className='text-[16px]/[31px] font-DanaDemiBold'>11,678,800</p>
                                    <p className='text-xs'>تومان</p>
                                </div>
                                {/* price offer */}
                                <div className='flex justify-center items-center gap-4'>
                                    <p className='text-[13px] text-[#999999] line-through'>11,678,800</p>
                                    <div className='w-[40px] h-[20px] bg-[#D90000] rounded-[10px]'>
                                        <p className='text-white text-sm/[22px] text-center'>%10</p>
                                    </div>
                                </div>
                            </div>
                            {/* timer */}
                            <div className='py-[7px] bg-[#E21E24]'>
                                    <div className='font-DanaDemiBold text-center text-white text-sm'><Timer /></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[163px] h-[405px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <img className='w-[156px] h-[201px]' src="/src/assets/images/offerProduct/2.png" alt="2" />
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] h-[75px] line-clamp-3'>  گوی مدل Pocoابایت</p>
                                {/* price */}
                                <div className='flex items-center justify-center gap-1'>
                                    <p className='text-[16px]/[31px] font-DanaDemiBold'>11,678,800</p>
                                    <p className='text-xs'>تومان</p>
                                </div>
                                {/* price offer */}
                                <div className='flex justify-center items-center gap-4'>
                                    <p className='text-[13px] text-[#999999] line-through'>11,678,800</p>
                                    <div className='w-[40px] h-[20px] bg-[#D90000] rounded-[10px]'>
                                        <p className='text-white text-sm/[22px] text-center'>%10</p>
                                    </div>
                                </div>
                            </div>
                            {/* timer */}
                            <div className='py-[7px] bg-[#E21E24]'>
                                    <div className='font-DanaDemiBold text-center text-white text-sm'><Timer /></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[163px] h-[405px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <img className='w-[156px] h-[201px]' src="/src/assets/images/offerProduct/2.png" alt="2" />
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] h-[75px] line-clamp-3'>  گوی مدل Pocoابایت</p>
                                {/* price */}
                                <div className='flex items-center justify-center gap-1'>
                                    <p className='text-[16px]/[31px] font-DanaDemiBold'>11,678,800</p>
                                    <p className='text-xs'>تومان</p>
                                </div>
                                {/* price offer */}
                                <div className='flex justify-center items-center gap-4'>
                                    <p className='text-[13px] text-[#999999] line-through'>11,678,800</p>
                                    <div className='w-[40px] h-[20px] bg-[#D90000] rounded-[10px]'>
                                        <p className='text-white text-sm/[22px] text-center'>%10</p>
                                    </div>
                                </div>
                            </div>
                            {/* timer */}
                            <div className='py-[7px] bg-[#E21E24]'>
                                    <div className='font-DanaDemiBold text-center text-white text-sm'><Timer /></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[163px] h-[405px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <img className='w-[156px] h-[201px]' src="/src/assets/images/offerProduct/2.png" alt="2" />
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] h-[75px] line-clamp-3'>  گوی مدل Pocoابایت</p>
                                {/* price */}
                                <div className='flex items-center justify-center gap-1'>
                                    <p className='text-[16px]/[31px] font-DanaDemiBold'>11,678,800</p>
                                    <p className='text-xs'>تومان</p>
                                </div>
                                {/* price offer */}
                                <div className='flex justify-center items-center gap-4'>
                                    <p className='text-[13px] text-[#999999] line-through'>11,678,800</p>
                                    <div className='w-[40px] h-[20px] bg-[#D90000] rounded-[10px]'>
                                        <p className='text-white text-sm/[22px] text-center'>%10</p>
                                    </div>
                                </div>
                            </div>
                            {/* timer */}
                            <div className='py-[7px] bg-[#E21E24]'>
                                    <div className='font-DanaDemiBold text-center text-white text-sm'><Timer /></div>
                            </div>
                        </div>
                    </SwiperSlide>
              
               

                </Swiper>

                <div className="cursor-pointer shadow-md translate-x-[-30%] w-[40px] h-[40px] bg-[#F7F7F7] rounded-[10px] text-[#4D4D4D] text-[20px] absolute left-0 bottom-1/2 z-10 flex justify-center items-center hover:bg-[#E21E24] hover:text-white transition-all duration-300" onClick={handleNext}><IoIosArrowBack /></div>
            </div>
        </div >
    )
}
