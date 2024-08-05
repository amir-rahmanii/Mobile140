import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SvgItem from '../../Components/SvgItem/SvgItem'
import { IoIosArrowBack } from "react-icons/io";

export default function NavBar() {

    const [valueSubMenu, setValueSubMenu] = useState("گوشی موبایل")

    return (
        <nav className='font-DanaMedium'>
            <ul className=' flex gap-[30px]'>
                <li className='liItemMenu border-b-[3px] relative border-white py-2.5 hover:border-[#4D4D4D] transition-all duration-300'>
                    <Link className='text-[#4C4B4B] text-sm'>موبایل و تبلت</Link>
                    {/* sub menus */}
                    <div className='subMenuItem transition-all duration-300 absolute h-[422px] bottom-[-425px] right-0 rounded-[10px] z-20 shadow-lg overflow-hidden'>
                        {/* tabs */}
                        <div className='w-[275px] px-[10px] py-10 bg-white'>
                            <ul className='flex flex-col gap-8'>
                                <li onMouseEnter={() => {
                                    setValueSubMenu("گوشی موبایل")
                                }} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>گوشی موبایل</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                                <li onMouseEnter={() => setValueSubMenu("تبلت")} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>تبلت</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='min-w-[440px] bg-[#F1F8FF] py-10 px-4'>
                            <div className='flex items-center'>
                                <p className='text-[#4D4D4D] text-sm'>{valueSubMenu}<span className='text-[#9C9D9E] text-xs'>(همه محصولات)</span></p>
                                <div className='text-xs'>
                                    <IoIosArrowBack />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <ul className='flex flex-col flex-wrap gap-2.5 max-h-[340px] w-[400px]'>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='liItemMenu border-b-[3px] relative border-white py-2.5 hover:border-[#4D4D4D] transition-all duration-300'>
                    <Link className='text-[#4C4B4B] text-sm'>هدفون و هندزفری</Link>
                    {/* sub menus */}
                    <div className='subMenuItem transition-all duration-300 absolute h-[422px] bottom-[-425px] right-0 rounded-[10px] z-20 shadow-lg overflow-hidden'>
                        {/* tabs */}
                        <div className='w-[275px] px-[10px] py-10 bg-white'>
                            <ul className='flex flex-col gap-8'>
                                <li onMouseEnter={() => {
                                    setValueSubMenu("گوشی موبایل")
                                }} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>گوشی موبایل</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                                <li onMouseEnter={() => setValueSubMenu("تبلت")} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>تبلت</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='min-w-[440px] bg-[#F1F8FF] py-10 px-4'>
                            <div className='flex items-center'>
                                <p className='text-[#4D4D4D] text-sm'>{valueSubMenu}<span className='text-[#9C9D9E] text-xs'>(همه محصولات)</span></p>
                                <div className='text-xs'>
                                    <IoIosArrowBack />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <ul className='flex flex-col flex-wrap gap-2.5 max-h-[340px] w-[400px]'>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='liItemMenu border-b-[3px] relative border-white py-2.5 hover:border-[#4D4D4D] transition-all duration-300'>
                    <Link className='text-[#4C4B4B] text-sm'>ساعت هوشمند</Link>
                    {/* sub menus */}
                    <div className='subMenuItem transition-all duration-300 absolute h-[422px] bottom-[-425px] right-0 rounded-[10px] z-20 shadow-lg overflow-hidden'>
                        {/* tabs */}
                        <div className='w-[275px] px-[10px] py-10 bg-white'>
                            <ul className='flex flex-col gap-8'>
                                <li onMouseEnter={() => {
                                    setValueSubMenu("گوشی موبایل")
                                }} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>گوشی موبایل</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                                <li onMouseEnter={() => setValueSubMenu("تبلت")} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>تبلت</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='min-w-[440px] bg-[#F1F8FF] py-10 px-4'>
                            <div className='flex items-center'>
                                <p className='text-[#4D4D4D] text-sm'>{valueSubMenu}<span className='text-[#9C9D9E] text-xs'>(همه محصولات)</span></p>
                                <div className='text-xs'>
                                    <IoIosArrowBack />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <ul className='flex flex-col flex-wrap gap-2.5 max-h-[340px] w-[400px]'>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='liItemMenu border-b-[3px] relative border-white py-2.5 hover:border-[#4D4D4D] transition-all duration-300'>
                    <Link className='text-[#4C4B4B] text-sm'>لپ تاپ و کامپیوتر</Link>
                    {/* sub menus */}
                    <div className='subMenuItem transition-all duration-300 absolute h-[422px] bottom-[-425px] right-0 rounded-[10px] z-20 shadow-lg overflow-hidden'>
                        {/* tabs */}
                        <div className='w-[275px] px-[10px] py-10 bg-white'>
                            <ul className='flex flex-col gap-8'>
                                <li onMouseEnter={() => {
                                    setValueSubMenu("گوشی موبایل")
                                }} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>گوشی موبایل</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                                <li onMouseEnter={() => setValueSubMenu("تبلت")} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>تبلت</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='min-w-[440px] bg-[#F1F8FF] py-10 px-4'>
                            <div className='flex items-center'>
                                <p className='text-[#4D4D4D] text-sm'>{valueSubMenu}<span className='text-[#9C9D9E] text-xs'>(همه محصولات)</span></p>
                                <div className='text-xs'>
                                    <IoIosArrowBack />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <ul className='flex flex-col flex-wrap gap-2.5 max-h-[340px] w-[400px]'>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='liItemMenu border-b-[3px] relative border-white py-2.5 hover:border-[#4D4D4D] transition-all duration-300'>
                    <Link className='text-[#4C4B4B] text-sm'>گیم استور </Link>
                    {/* sub menus */}
                    <div className='subMenuItem transition-all duration-300 absolute h-[422px] bottom-[-425px] right-0 rounded-[10px] z-20 shadow-lg overflow-hidden'>
                        {/* tabs */}
                        <div className='w-[275px] px-[10px] py-10 bg-white'>
                            <ul className='flex flex-col gap-8'>
                                <li onMouseEnter={() => {
                                    setValueSubMenu("گوشی موبایل")
                                }} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>گوشی موبایل</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                                <li onMouseEnter={() => setValueSubMenu("تبلت")} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>تبلت</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='min-w-[440px] bg-[#F1F8FF] py-10 px-4'>
                            <div className='flex items-center'>
                                <p className='text-[#4D4D4D] text-sm'>{valueSubMenu}<span className='text-[#9C9D9E] text-xs'>(همه محصولات)</span></p>
                                <div className='text-xs'>
                                    <IoIosArrowBack />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <ul className='flex flex-col flex-wrap gap-2.5 max-h-[340px] w-[400px]'>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='liItemMenu border-b-[3px] relative border-white py-2.5 hover:border-[#4D4D4D] transition-all duration-300'>
                    <Link className='text-[#4C4B4B] text-sm'>لوازم خانگی</Link>
                    {/* sub menus */}
                    <div className='subMenuItem transition-all duration-300 absolute h-[422px] bottom-[-425px] right-0 rounded-[10px] z-20 shadow-lg overflow-hidden'>
                        {/* tabs */}
                        <div className='w-[275px] px-[10px] py-10 bg-white'>
                            <ul className='flex flex-col gap-8'>
                                <li onMouseEnter={() => {
                                    setValueSubMenu("گوشی موبایل")
                                }} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>گوشی موبایل</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                                <li onMouseEnter={() => setValueSubMenu("تبلت")} className='liItemSubMenu transition-all duration-300 flex justify-between items-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#D7DEE0] p-1.5 rounded-full flex items-center'>
                                            <SvgItem name='mobileIcon' viewBox="0 0 28 28" className='w-[30px] h-[30px]' />
                                        </div>
                                        <span className='text-sm'>تبلت</span>
                                    </div>
                                    <div className='text-mainBlue iconSubMenu'>
                                        <IoIosArrowBack />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='min-w-[440px] bg-[#F1F8FF] py-10 px-4'>
                            <div className='flex items-center'>
                                <p className='text-[#4D4D4D] text-sm'>{valueSubMenu}<span className='text-[#9C9D9E] text-xs'>(همه محصولات)</span></p>
                                <div className='text-xs'>
                                    <IoIosArrowBack />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <ul className='flex flex-col flex-wrap gap-2.5 max-h-[340px] w-[400px]'>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                    <li>
                                        <Link className='text-[#4D4D4D] text-sm hover:text-[#000000] transition-all duration-300'>{valueSubMenu} دکمه ای</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
