import React from 'react'
import BlackScreen from '../../Components/BlackScreen/BlackScreen';
import { IoCloseOutline } from "react-icons/io5";

export default function BasketSide({ isShowOpenBasket, setIsShowOpenBasket }) {
  return (
    <>
      <div className={`fixed z-50 font-DanaMedium bg-white w-[356px] transition-all duration-300 px-5 top-0 bottom-0 ${isShowOpenBasket ? "right-0" : "right-[-356px]"}`}>
        {/* title and cancel */}
        <div className='border-b border-[#DEDEDE] flex justify-between items-center'>
          <strong className='text-lg/[50px] font-Dana text-mainBlue'>سبد خرید</strong>
          <button onClick={() => setIsShowOpenBasket(false)} className='text-2xl text-[#4D4D4D]'>
            <IoCloseOutline />
          </button>
        </div>
        {/* products */}
        <div className='my-3 flex flex-col overflow-y-auto h-[550px] divide-y-2 border-t border-b'>
          <div className='py-5 pl-2'>
            <div className='flex items-start gap-3'>
              {/* images */}
              <div className='border shrink-0 p-1 hover:border-[#D90000]'>
                <img className='w-[59px] h-[75px]' src="/src/assets/images/product/1.png" alt="1" />
              </div>
              {/* title product */}
              <div >
                <p className='line-clamp-3 h-auto text-[13px]/[18px] text-justify hover:text-mainBlue transition-all duration-300'>گوشی موبایل  موبایل موبایل موبایل موبایل موبایل  موبایل موبایل  موبایل موبایل موبایل موبایل موبایل موبایل موبایل موبایل موبایل موبایل موبایلایفون 13</p>
                {/* count */}
                <p className='text-sm text-[#4D4D4D] py-1'>تعداد : 4</p>
                {/* delete from basket */}
                <button className='text-[#FF0000] text-sm'>حذف</button>
              </div>
            </div>
            {/* price and offer price */}
            <div>
              <p className='text-mainBlue text-end'>
                50
                تومان
              </p>
              <p className='text-[13px]/[18px] text-end text-[#4D4D4D] line-through'>
              12,000,000
              تومان
              </p>
              {/* offer */}
              <div className='flex justify-end gap-1'>
                <p className='text-white bg-[#FF0000] text-[11px]/[15px] px-1 py-px'>%3</p>
                <p className='text-white bg-[#FF0000] text-[11px]/[15px] px-1 py-px'>تخفیف</p>
              </div>
            </div>
          </div>
     
   
        </div>
      </div>
      <BlackScreen isShowItem={isShowOpenBasket} setIsShowItem={setIsShowOpenBasket} />
    </>
  )
}
