import React from 'react'
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

export default function SideBar() {
    return (
        <div className='text-sm w-[274px] rounded-[10px] font-DanaMedium border border-[#E6E6E6] pt-[15px] px-5 pb-[30px]'>
            <div>
                {/* name */}
                <p className='text-lg/[25px]'>حمیدرضا رحمانی</p>
                <div className='flex justify-between items-center mt-1.5'>
                    {/* welcome and logout */}
                    <p className='text-sm/[25px]'>خوش آمدید</p>
                    <div className='text-[#E60000] flex items-center text-sm gap-1'>
                        <MdOutlinePowerSettingsNew />
                        <p>خروج</p>
                    </div>
                </div>
                {/* menu */}
                <ul className='text-[#4D4D4D] text-sm mt-4'>
                    <li>
                        <NavLink to='' className="flex bg-white text-black py-[13px] px-[15px] rounded-[10px] justify-between items-center hover:bg-mainBlue transition-all duration-300 hover:text-white" >
                            پروفایل کاربری
                            <IoIosArrowBack />
                        </NavLink>
                        <NavLink to='address' className={({ isActive }) =>
                            isActive ? "flex bg-mainBlue text-white py-[13px] px-[15px] rounded-[10px] justify-between items-center" : "flex bg-white py-[13px] px-[15px] rounded-[10px] justify-between items-center hover:bg-mainBlue transition-all duration-300 hover:text-white"
                        } >
                             لیست آدرس ها
                            <IoIosArrowBack />
                        </NavLink>
                        <NavLink to='orders' className={({ isActive }) =>
                            isActive ? "flex bg-mainBlue text-white py-[13px] px-[15px] rounded-[10px] justify-between items-center" : "flex bg-white py-[13px] px-[15px] rounded-[10px] justify-between items-center hover:bg-mainBlue transition-all duration-300 hover:text-white"
                        } >
                             لیست سفارشات
                            <IoIosArrowBack />
                        </NavLink>
                        <NavLink to='comments' className={({ isActive }) =>
                            isActive ? "flex bg-mainBlue text-white py-[13px] px-[15px] rounded-[10px] justify-between items-center" : "flex bg-white py-[13px] px-[15px] rounded-[10px] justify-between items-center hover:bg-mainBlue transition-all duration-300 hover:text-white"
                        } >
                              نظرات داده شده
                            <IoIosArrowBack />
                        </NavLink>
                        <NavLink to='likeProduct' className={({ isActive }) =>
                            isActive ? "flex bg-mainBlue text-white py-[13px] px-[15px] rounded-[10px] justify-between items-center" : "flex bg-white py-[13px] px-[15px] rounded-[10px] justify-between items-center hover:bg-mainBlue transition-all duration-300 hover:text-white"
                        } >
                             لیست علاقه مندی ها
                            <IoIosArrowBack />
                        </NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}
