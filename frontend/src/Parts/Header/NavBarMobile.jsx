import React, { useState } from 'react'
import BlackScreen from '../../Components/BlackScreen/BlackScreen'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function NavBarMobile({ isOpenNavBar, setIsOpenNavBar }) {

    const [isOpenedSubMenu, setIsOpenedSubMenu] = useState(false)
    const [isOpenedSubSubMenu, setIsOpenedSubSubMenu] = useState(false)

    return (
        <>
            <div className={`fixed z-50 lg:hidden font-DanaMedium bg-white overflow-y-auto w-[320px] md:w-[356px] transition-all duration-300 top-0 bottom-0 ${isOpenNavBar ? "right-0" : "right-[-356px]"}`}>
                {/* title and cancel */}
                <div className='border-b px-4 py-2 bg-mainBlue border-[#DEDEDE] flex justify-between items-center'>
                    <strong className='text-sm font-Dana text-white'>منوی دسترسی</strong>
                    <button onClick={() => setIsOpenNavBar(false)} className='text-2xl text-white hover:text-mainRed hover:bg-white transition-all duration-300'>
                        <IoCloseOutline />
                    </button>
                </div>
                <div className=' bg-[#F5F5F5] text-[#4D4D4D] justify-between'>
                    <ul className='flex flex-col'>
                        <li className='py-2 border-b '>
                            <Link to='/' className='text-sm  py-2 px-4'>صفحه اصلی</Link>
                        </li>
                        <li className='border-b'>
                            {/* menu item */}
                            <div onClick={() => setIsOpenedSubMenu(prev => !prev)} className='flex justify-between items-center'>
                                <p className='text-sm py-2 px-4 cursor-pointer'>موبایل و تبلت</p>
                                <div className='px-4'>
                                    {isOpenedSubMenu ? <FaMinus /> : <FaPlus />}
                                </div>
                            </div>
                            {/* sub menu item */}
                            <ul className={`bg-[#E7E7E7] ${isOpenedSubMenu ? "flex" : "hidden"} flex-col`}>
                                <li className='py-2'>
                                    <Link className='text-sm px-6'>همه موارد این دسته</Link>
                                </li>
                                <li>
                                    <div onClick={() => setIsOpenedSubSubMenu(prev => !prev)} className='flex justify-between items-center'>
                                        <p className='text-sm px-6 cursor-pointer py-2'> گوشی موبایل</p>
                                        <div className='px-4'>
                                            {isOpenedSubSubMenu ? <FaMinus /> : <FaPlus />}
                                        </div>
                                    </div>
                                    {/* sub sub menu */}
                                    <ul className={`bg-[#F5F5F5] flex-col ${isOpenedSubSubMenu ? "flex" : "hidden"}`}>
                                        <li className='py-2'>
                                            <Link className='text-sm px-8'>موبایل دکمه ای</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='py-2'>
                                    <Link className='text-sm px-6'>تبلت </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='lg:hidden'>
                <BlackScreen isShowItem={isOpenNavBar} setIsShowItem={setIsOpenNavBar} />
            </div>
        </>
    )
}
