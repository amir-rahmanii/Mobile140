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
            <div className='flex flex-col justify-center items-center gap-5 px-5 h-full w-[233px]'>
                <p className='font-DanaDemiBold text-[26px] text-center text-[#4c4B4B] text-wrap'>پکیج محصولات ویژه همکاران </p>
                <img className='w-[200px] h-[200px]' src={'/src/assets/images/title/2.png'} alt="2" />
                <Link className='text-[#4c4B4B] border border-[#4c4B4B] p-2 flex justify-center items-center gap-6 rounded-[5px]'>مشاهده همه  <IoIosArrowBack /></Link>
            </div>
            <div className='relative w-[1150px]'>
                <div className="cursor-pointer  shadow-md translate-x-1/2 w-[40px] h-[40px] bg-[#F7F7F7] rounded-[10px] text-[#4D4D4D] text-[20px] absolute right-0 bottom-1/2 z-10 flex justify-center items-center hover:bg-[#E21E24] hover:text-white transition-all duration-300" onClick={handlePrev}><IoIosArrowForward /></div>
                <Swiper
                    ref={sliderRef}
                    speed={1200}
                    slidesPerView={5}
                    modules={[Navigation]}
                    // breakpoints={{
                    //     '@0.00': {
                    //         slidesPerView: 1,
                    //         spaceBetween: 10,
                    //     },
                    // }}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className='w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] line-clamp-3'>  گوشی موبایل شیائومی مدل Poco M5S ظرفیت 128 گیگابایت رم 6 گیگابایت</p>
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
                                <div className='py-[7px] bg-[#16509D]'>
                                    <div className='font-DanaDemiBold text-center text-white text-sm'>
                                        <Link>مشاهده بیشتر</Link>
                                    </div>
                                </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] line-clamp-3'>  گوشی موبایل شیائومی مدل Poco M5S ظرفیت 128 گیگابایت رم 6 گیگابایت</p>
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
                                <div className='py-[7px] bg-[#16509D]'>
                                    <div className='font-DanaDemiBold text-center text-white text-sm'>
                                        <Link>مشاهده بیشتر</Link>
                                    </div>
                                </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] line-clamp-3'>  گوشی موبایل شیائومی مدل Poco M5S ظرفیت 128 گیگابایت رم 6 گیگابایت</p>
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
                                <div className='py-[7px] bg-[#16509D]'>
                                    <div className='font-DanaDemiBold text-center text-white text-sm'>
                                        <Link>مشاهده بیشتر</Link>
                                    </div>
                                </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] line-clamp-3'>  گوشی موبایل شیائومی مدل Poco M5S ظرفیت 128 گیگابایت رم 6 گیگابایت</p>
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
                                <div className='py-[7px] bg-[#16509D]'>
                                    <div className='font-DanaDemiBold text-center text-white text-sm'>
                                        <Link>مشاهده بیشتر</Link>
                                    </div>
                                </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] line-clamp-3'>  گوشی موبایل شیائومی مدل Poco M5S ظرفیت 128 گیگابایت رم 6 گیگابایت</p>
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
                                <div className='py-[7px] bg-[#16509D]'>
                                    <div className='font-DanaDemiBold text-center text-white text-sm'>
                                        <Link>مشاهده بیشتر</Link>
                                    </div>
                                </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] line-clamp-3'>  گوشی موبایل شیائومی مدل Poco M5S ظرفیت 128 گیگابایت رم 6 گیگابایت</p>
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
                                <div className='py-[7px] bg-[#16509D]'>
                                    <div className='font-DanaDemiBold text-center text-white text-sm'>
                                        <Link>مشاهده بیشتر</Link>
                                    </div>
                                </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[208px] h-[384px] bg-white flex flex-col justify-between overflow-hidden border  rounded-[10px]'>
                            <div className='px-[10px]'>
                                {/* img */}
                                <div className='flex justify-center'>
                                    <img className='w-[156px] h-[201px]' src="/src/assets/images/product/1.png" alt="1" />
                                </div>
                                {/* title */}
                                <p className='font-DanaDemiBold my-[10px] text-center text-[12px]/[25px] line-clamp-3'>  گوشی موبایل شیائومی مدل Poco M5S ظرفیت 128 گیگابایت رم 6 گیگابایت</p>
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
                                <div className='py-[7px] bg-[#16509D]'>
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
