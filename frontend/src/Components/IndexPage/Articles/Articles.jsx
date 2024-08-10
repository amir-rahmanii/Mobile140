import React, { useCallback, useRef } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Articles() {

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
    <div className='w-[1150px] mt-16 font-DanaMedium'>
      <div className=''>
        {/* title and btns */}
        <div className='flex justify-between'>
          <p className='font-DanaDemiBold text-2xl/[34px]'>اخبار و مقالات</p>
          {/* btns and archive */}
          <div className='flex gap-3'>
            <Link className='w-[130px] h-[40px] flex justify-center items-center bg-mainBlue rounded-[10px] text-white text-sm text-center hover:bg-[#0087CD] transition-all duration-300'>مشاهده آرشیو</Link>
            <div className="cursor-pointer  shadow-md  w-[40px] h-[40px] bg-[#F7F7F7] rounded-[10px] text-[#4D4D4D] text-[14px] z-10 flex justify-center items-center hover:bg-[#000000] hover:text-white transition-all duration-300" onClick={handlePrev}><FaArrowRight /></div>
            <div className="cursor-pointer shadow-md  w-[40px] h-[40px] bg-[#F7F7F7] rounded-[10px] text-[#4D4D4D] text-[14px] z-10 flex justify-center items-center hover:bg-[#000000] hover:text-white transition-all duration-300" onClick={handleNext}><FaArrowLeft /></div>
          </div>
        </div>

        <Swiper
          ref={sliderRef}
          speed={1200}
          spaceBetween={20}
          slidesPerView={3}
          modules={[Navigation]}
          // breakpoints={{
          //     '@0.00': {
          //         slidesPerView: 1,
          //         spaceBetween: 10,
          //     },
          // }}
          className="mySwiper mt-6"
        >
          <SwiperSlide >
            <div className='h-[350px]'>
              <div className='w-[364px] relative bg-white flex flex-col justify-between border  rounded-[10px]'>
                <div>
                  {/* img */}
                  <div className='w-[362px] h-[218px] rounded-t-[10px] overflow-hidden '>
                    <img className='hover:scale-125 transition-all duration-700' src="/src/assets/images/articles/1.jpg" alt="1" />
                  </div>
                  <div className='px-5 pt-[10px] pb-5'>
                    {/* title */}
                    <p className='font-DanaDemiBold text-right text-[14px]/[28x] line-clamp-1'>بهترین گوشی  هترین گوشی از نظر آنتن ده از نظر آنتن دهی</p>
                    {/* info */}
                    <div dir='ltr' className='flex items-center mt-10 justify-end text-[#999999] divide-x-2'>
                      {/* buy */}
                      <p className='text-[14px]/[20px] pr-4'>راهنمای خرید</p>
                      {/* date */}
                      <p className='text-[14px]/[20px] font-DanaDemiBold pl-4'>03/03/03</p>
                    </div>
                  </div>
                </div>
                {/* btn */}
                <Link className='w-[80px] h-[30px] absolute bottom-[-15px] left-[30px] text-xs/[30px] justify-center items-center text-center bg-mainBlue text-white rounded-[10px] hover:bg-[#0087CD] transition-all duration-300'>
                  مشاهده
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='h-[350px]'>
              <div className='w-[364px] relative bg-white flex flex-col justify-between border  rounded-[10px]'>
                <div>
                  {/* img */}
                  <div className='w-[362px] h-[218px] rounded-t-[10px] overflow-hidden '>
                    <img className='hover:scale-125 transition-all duration-700' src="/src/assets/images/articles/1.jpg" alt="1" />
                  </div>
                  <div className='px-5 pt-[10px] pb-5'>
                    {/* title */}
                    <p className='font-DanaDemiBold text-right text-[14px]/[28x] line-clamp-1'>بهترین گوشی  هترین گوشی از نظر آنتن ده از نظر آنتن دهی</p>
                    {/* info */}
                    <div dir='ltr' className='flex items-center mt-10 justify-end text-[#999999] divide-x-2'>
                      {/* buy */}
                      <p className='text-[14px]/[20px] pr-4'>راهنمای خرید</p>
                      {/* date */}
                      <p className='text-[14px]/[20px] font-DanaDemiBold pl-4'>03/03/03</p>
                    </div>
                  </div>
                </div>
                {/* btn */}
                <Link className='w-[80px] h-[30px] absolute bottom-[-15px] left-[30px] text-xs/[30px] justify-center items-center text-center bg-mainBlue text-white rounded-[10px] hover:bg-[#0087CD] transition-all duration-300'>
                  مشاهده
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='h-[350px]'>
              <div className='w-[364px] relative bg-white flex flex-col justify-between border  rounded-[10px]'>
                <div>
                  {/* img */}
                  <div className='w-[362px] h-[218px] rounded-t-[10px] overflow-hidden '>
                    <img className='hover:scale-125 transition-all duration-700' src="/src/assets/images/articles/1.jpg" alt="1" />
                  </div>
                  <div className='px-5 pt-[10px] pb-5'>
                    {/* title */}
                    <p className='font-DanaDemiBold text-right text-[14px]/[28x] line-clamp-1'>بهترین گوشی  هترین گوشی از نظر آنتن ده از نظر آنتن دهی</p>
                    {/* info */}
                    <div dir='ltr' className='flex items-center mt-10 justify-end text-[#999999] divide-x-2'>
                      {/* buy */}
                      <p className='text-[14px]/[20px] pr-4'>راهنمای خرید</p>
                      {/* date */}
                      <p className='text-[14px]/[20px] font-DanaDemiBold pl-4'>03/03/03</p>
                    </div>
                  </div>
                </div>
                {/* btn */}
                <Link className='w-[80px] h-[30px] absolute bottom-[-15px] left-[30px] text-xs/[30px] justify-center items-center text-center bg-mainBlue text-white rounded-[10px] hover:bg-[#0087CD] transition-all duration-300'>
                  مشاهده
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='h-[350px]'>
              <div className='w-[364px] relative bg-white flex flex-col justify-between border  rounded-[10px]'>
                <div>
                  {/* img */}
                  <div className='w-[362px] h-[218px] rounded-t-[10px] overflow-hidden '>
                    <img className='hover:scale-125 transition-all duration-700' src="/src/assets/images/articles/1.jpg" alt="1" />
                  </div>
                  <div className='px-5 pt-[10px] pb-5'>
                    {/* title */}
                    <p className='font-DanaDemiBold text-right text-[14px]/[28x] line-clamp-1'>بهترین گوشی  هترین گوشی از نظر آنتن ده از نظر آنتن دهی</p>
                    {/* info */}
                    <div dir='ltr' className='flex items-center mt-10 justify-end text-[#999999] divide-x-2'>
                      {/* buy */}
                      <p className='text-[14px]/[20px] pr-4'>راهنمای خرید</p>
                      {/* date */}
                      <p className='text-[14px]/[20px] font-DanaDemiBold pl-4'>03/03/03</p>
                    </div>
                  </div>
                </div>
                {/* btn */}
                <Link className='w-[80px] h-[30px] absolute bottom-[-15px] left-[30px] text-xs/[30px] justify-center items-center text-center bg-mainBlue text-white rounded-[10px] hover:bg-[#0087CD] transition-all duration-300'>
                  مشاهده
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='h-[350px]'>
              <div className='w-[364px] relative bg-white flex flex-col justify-between border  rounded-[10px]'>
                <div>
                  {/* img */}
                  <div className='w-[362px] h-[218px] rounded-t-[10px] overflow-hidden '>
                    <img className='hover:scale-125 transition-all duration-700' src="/src/assets/images/articles/1.jpg" alt="1" />
                  </div>
                  <div className='px-5 pt-[10px] pb-5'>
                    {/* title */}
                    <p className='font-DanaDemiBold text-right text-[14px]/[28x] line-clamp-1'>بهترین گوشی  هترین گوشی از نظر آنتن ده از نظر آنتن دهی</p>
                    {/* info */}
                    <div dir='ltr' className='flex items-center mt-10 justify-end text-[#999999] divide-x-2'>
                      {/* buy */}
                      <p className='text-[14px]/[20px] pr-4'>راهنمای خرید</p>
                      {/* date */}
                      <p className='text-[14px]/[20px] font-DanaDemiBold pl-4'>03/03/03</p>
                    </div>
                  </div>
                </div>
                {/* btn */}
                <Link className='w-[80px] h-[30px] absolute bottom-[-15px] left-[30px] text-xs/[30px] justify-center items-center text-center bg-mainBlue text-white rounded-[10px] hover:bg-[#0087CD] transition-all duration-300'>
                  مشاهده
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='h-[350px]'>
              <div className='w-[364px] relative bg-white flex flex-col justify-between border  rounded-[10px]'>
                <div>
                  {/* img */}
                  <div className='w-[362px] h-[218px] rounded-t-[10px] overflow-hidden '>
                    <img className='hover:scale-125 transition-all duration-700' src="/src/assets/images/articles/1.jpg" alt="1" />
                  </div>
                  <div className='px-5 pt-[10px] pb-5'>
                    {/* title */}
                    <p className='font-DanaDemiBold text-right text-[14px]/[28x] line-clamp-1'>بهترین گوشی  هترین گوشی از نظر آنتن ده از نظر آنتن دهی</p>
                    {/* info */}
                    <div dir='ltr' className='flex items-center mt-10 justify-end text-[#999999] divide-x-2'>
                      {/* buy */}
                      <p className='text-[14px]/[20px] pr-4'>راهنمای خرید</p>
                      {/* date */}
                      <p className='text-[14px]/[20px] font-DanaDemiBold pl-4'>03/03/03</p>
                    </div>
                  </div>
                </div>
                {/* btn */}
                <Link className='w-[80px] h-[30px] absolute bottom-[-15px] left-[30px] text-xs/[30px] justify-center items-center text-center bg-mainBlue text-white rounded-[10px] hover:bg-[#0087CD] transition-all duration-300'>
                  مشاهده
                </Link>
              </div>
            </div>
          </SwiperSlide>
 



        </Swiper>
      </div>
    </div>
  )
}
