import React from 'react'
import BlackScreen from '../../Components/BlackScreen/BlackScreen';
import { IoCloseOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { isCloseBasket } from '../../Redux/isBasket/isBasket';

export default function BasketSide() {
  const dispatch = useDispatch()
  const isBasket = useSelector(state => state.isBasket.status)

  console.log(isBasket);
  
  return (
    <>
      <div className={`fixed z-50 font-DanaMedium bg-white  w-[320px] md:w-[356px] transition-all duration-300 px-5 top-0 bottom-0 ${isBasket ? "right-0" : "right-[-356px]"}`}>
        {/* title and cancel */}
        <div className='border-b border-[#DEDEDE] flex justify-between items-center'>
          <strong className='text-lg/[50px] font-Dana text-mainBlue'>سبد خرید</strong>
          <button onClick={() => dispatch(isCloseBasket())} className='text-2xl text-[#4D4D4D]'>
            <IoCloseOutline />
          </button>
        </div>
        <div className=' h-screen relative'>
          {/* products */}
          <div className='my-3 flex flex-col overflow-y-auto h-[645px] md:h-[515px] 3xl:h-[645px] divide-y-2 border-t border-b'>
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
                  <button className='text-[#FF0000] flex items-center '>
                    <div className='text-base'>
                      <MdDelete />
                    </div>
                    <span className='text-sm'>حذف</span>

                  </button>
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
                  <button className='text-[#FF0000] flex items-center '>
                    <div className='text-base'>
                      <MdDelete />
                    </div>
                    <span className='text-sm'>حذف</span>

                  </button>
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
                  <button className='text-[#FF0000] flex items-center '>
                    <div className='text-base'>
                      <MdDelete />
                    </div>
                    <span className='text-sm'>حذف</span>

                  </button>
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
                  <button className='text-[#FF0000] flex items-center '>
                    <div className='text-base'>
                      <MdDelete />
                    </div>
                    <span className='text-sm'>حذف</span>

                  </button>
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
                  <button className='text-[#FF0000] flex items-center '>
                    <div className='text-base'>
                      <MdDelete />
                    </div>
                    <span className='text-sm'>حذف</span>

                  </button>
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
          {/* sum and submit */}
          <div className='absolute bottom-24 w-full'>
            <div className='flex items-center justify-between'>
              <p className='text-sm text-[#000000]'>جمع کل خرید</p>
              <p className='text-mainBlue text-[17px]/[59px]'>
                62,455,4545
                تومان
              </p>
            </div>
            <button className='text-[#FFFFFF] rounded-[10px] bg-[#D90000] w-full py-2'>
              تسویه حساب
            </button>
          </div>
        </div>
      </div>
      <BlackScreen />
    </>
  )
}
