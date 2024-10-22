import React, { useCallback, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SwiperProduct() {

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
        <div className={`bg-[#EEEEEE] my-5 py-5 pr-[10px] h-[445px] flex justify-center items-center gap-3`}>
            {/* info */}
            <div className='flex flex-col justify-center items-center gap-5 px-5 h-full w-[150px] md:w-[233px]'>
                <p className='font-DanaDemiBold text-xl md:text-[26px] text-center text-[#4c4B4B] text-wrap'>پکیج محصولات ویژه همکاران </p>
                <img className='max-w-[150px] max-h-[150px]' src={'/src/assets/images/title/2.png'} alt="2" />
                <Link className='text-sm md:text-base text-[#4c4B4B] border border-[#4c4B4B] p-1 md:p-2 flex justify-center items-center gap-1 md:gap-6 rounded-[5px]'>مشاهده همه  <IoIosArrowBack /></Link>
            </div>
            <div className='relative w-[180px] md:w-[460px] lg:w-[700px] 2xl:w-[1150px]'>
                <div className="cursor-pointer  shadow-md translate-x-1/2 w-[40px] h-[40px] bg-[#F7F7F7] rounded-[10px] text-[#4D4D4D] text-[20px] absolute right-0 bottom-1/2 z-10 flex justify-center items-center hover:bg-[#E21E24] hover:text-white transition-all duration-300" onClick={handlePrev}><IoIosArrowForward /></div>
                <Swiper
                    ref={sliderRef}
                    speed={1200}
                    slidesPerView={1}
                    modules={[Navigation]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3
                        },
                        1440: {
                            slidesPerView: 5
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className='w-[163px] md:w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold mt-[10px] mb-[5px] text-center text-[12px]/[25px] line-clamp-3 h-[75px]'>  گوشی موبایل vموبایلم و یلموب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا ئومیم 6 گیگابایت</p>
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
                            {/* infp more */}
                            <div className='py-[7px] bg-mainBlue'>
                                <div className='font-DanaDemiBold text-center text-white text-sm'>
                                    <Link>مشاهده بیشتر</Link>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[163px] md:w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold mt-[10px] mb-[5px] text-center text-[12px]/[25px] line-clamp-3 h-[75px]'>  گوشی موبایل vموبایلم و یلموب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا ئومیم 6 گیگابایت</p>
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
                            {/* infp more */}
                            <div className='py-[7px] bg-mainBlue'>
                                <div className='font-DanaDemiBold text-center text-white text-sm'>
                                    <Link>مشاهده بیشتر</Link>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[163px] md:w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold mt-[10px] mb-[5px] text-center text-[12px]/[25px] line-clamp-3 h-[75px]'>  گوشی موبایل vموبایلم و یلموب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا ئومیم 6 گیگابایت</p>
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
                            {/* infp more */}
                            <div className='py-[7px] bg-mainBlue'>
                                <div className='font-DanaDemiBold text-center text-white text-sm'>
                                    <Link>مشاهده بیشتر</Link>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[163px] md:w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold mt-[10px] mb-[5px] text-center text-[12px]/[25px] line-clamp-3 h-[75px]'>  گوشی موبایل vموبایلم و یلموب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا ئومیم 6 گیگابایت</p>
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
                            {/* infp more */}
                            <div className='py-[7px] bg-mainBlue'>
                                <div className='font-DanaDemiBold text-center text-white text-sm'>
                                    <Link>مشاهده بیشتر</Link>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[163px] md:w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold mt-[10px] mb-[5px] text-center text-[12px]/[25px] line-clamp-3 h-[75px]'>  گوشی موبایل vموبایلم و یلموب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا ئومیم 6 گیگابایت</p>
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
                            {/* infp more */}
                            <div className='py-[7px] bg-mainBlue'>
                                <div className='font-DanaDemiBold text-center text-white text-sm'>
                                    <Link>مشاهده بیشتر</Link>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[163px] md:w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold mt-[10px] mb-[5px] text-center text-[12px]/[25px] line-clamp-3 h-[75px]'>  گوشی موبایل vموبایلم و یلموب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا  وب ایل شیا ئومیم 6 گیگابایت</p>
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
                            {/* infp more */}
                            <div className='py-[7px] bg-mainBlue'>
                                <div className='font-DanaDemiBold text-center text-white text-sm'>
                                    <Link>مشاهده بیشتر</Link>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
            



                </Swiper>

                <div className="cursor-pointer shadow-md w-[40px] h-[40px] bg-[#F7F7F7] rounded-[10px] text-[#4D4D4D] text-[20px] absolute left-0 bottom-1/2 z-10 flex justify-center items-center hover:bg-[#E21E24] hover:text-white transition-all duration-300" onClick={handleNext}><IoIosArrowBack /></div>
            </div>
        </div >
    )
}
