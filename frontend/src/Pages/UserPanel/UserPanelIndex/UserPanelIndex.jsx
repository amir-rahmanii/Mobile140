import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdError } from "react-icons/md";

export default function UserPanelIndex() {
    return (
        <div className='text-sm flex gap-5'>
            {/* userinfo */}
            <div className='py-[15px] px-5 h-full border border-[#E6E6E6] w-[418px] rounded-[10px]'>
                {/* title */}
                <div className=' flex items-center gap-2'>
                    <div className='text-mainBlue text-base'>
                        <FaUser />
                    </div>
                    <p className='text-lg/[20px] font-DanaDemiBold'>اطلاعات حساب کاربری</p>
                </div>
                {/* table */}
                <ul className='border-t border-b divide-y-2 border-[#D9D9D9] mt-4'>
                    <li className='py-[13px] bg-[#F7F7F7] px-[10px] flex items-center justify-between'>
                        <span>کد ملی</span>
                        <span>4380470751</span>
                    </li>
                    <li className='py-[13px] bg-[#FFFFFF] px-[10px] flex items-center justify-between'>
                        <span>شماره تلفن همراه</span>
                        <span>4380470751</span>
                    </li>
                    <li className='py-[13px] bg-[#F7F7F7] px-[10px] flex items-center justify-between'>
                        <span>محل سکونت</span>
                        <span>قزوین _ تاکستان</span>
                    </li>
                </ul>
                {/* btns */}
                <div className='flex justify-end items-center mt-6 gap-3'>
                    <button className='text-sm/[40px] border border-mainBlue rounded-[10px] text-black px-[10px] hover:bg-mainBlue hover:text-white transition-all duration-300'>تغییر رمز</button>
                    <button className='text-sm/[40px] border bg-mainBlue rounded-[10px] text-white px-[10px] hover:bg-[#0087CD] transition-all duration-300'>ویرایش اطلاعات حساب</button>
                </div>
            </div>

            {/* report user */}
            <div className='py-[15px] px-5 h-full border border-[#E6E6E6] w-[418px] rounded-[10px]'>
                {/* title */}
                <div className=' flex items-center gap-2'>
                    <div className='text-mainBlue text-xl'>
                        <MdError />
                    </div>
                    <p className='text-lg/[20px] font-DanaDemiBold'>گزارش عملکرد</p>
                </div>
                {/* table */}
                <ul className='border-t border-b divide-y-2 border-[#D9D9D9] mt-4'>
                    <li className='py-[13px] bg-[#F7F7F7] px-[10px] flex items-center justify-between'>
                        <span>تعداد نظرات ارسال شده</span>
                        <span>0</span>
                    </li>
                    <li className='py-[13px] bg-[#FFFFFF] px-[10px] flex items-center justify-between'>
                        <span>تعداد کل سفارشات</span>
                        <span>0</span>
                    </li>
                    <li className='py-[13px] bg-[#F7F7F7] px-[10px] flex items-center justify-between'>
                        <span>سفارشات در انتظار تأیید</span>
                        <span>0</span>
                    </li>
                    <li className='py-[13px] bg-[#FFFFFF] px-[10px] flex items-center justify-between'>
                        <span>سفارشات در حال پردازش</span>
                        <span>0</span>
                    </li>
                    <li className='py-[13px] bg-[#F7F7F7] px-[10px] flex items-center justify-between'>
                        <span>سفارشات انصراف داده شده</span>
                        <span>0</span>
                    </li>
                    <li className='py-[13px] bg-[#FFFFFF] px-[10px] flex items-center justify-between'>
                        <span>سفارشات ارسال شده</span>
                        <span>0</span>
                    </li>
                    <li className='py-[13px] bg-[#F7F7F7] px-[10px] flex items-center justify-between'>
                        <span>تعداد علاقمندی ها</span>
                        <span>0</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
