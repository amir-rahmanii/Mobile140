import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
    return (
        <header className='py-2.5 flex justify-between'>
            {/* logo and searchbar */}
            <div className='flex items-center gap-8'>
                {/* logo page */}
                <div className='w-[176px] h-[50px]'>
                    <img src="/src/assets/images/logo/logo.png" alt="logo" />
                </div>
                {/* search bar  */}
                <div className='bg-[#F0F0F0] w-[568px] h-[40px] flex items-center rounded-[10px] py-px px-5'>
                    <input type="text" className='outline-none w-full bg-transparent text-xs text-[#4D4D4D]' placeholder='نام محصول مورد نظر خود را وارد کنید' />
                    {/* icon search */}
                    <button className='text-2xl'>
                        <CiSearch />
                    </button>
                </div>
            </div>
            {/* login register and basket product */}
            <div className='flex items-center gap-5'>
                {/* login register */}
                <div className='text-sm flex rounded-[5px] items-center border border-[#D7DEE0] p-[5px]'>
                    <Link to="/login" className='px-[5px]'>
                    ورود
                    </Link>
                    | 
                    <Link to="/register" className='px-[5px]'>
                    ثبت نام
                    </Link>
                </div>
                {/* basket */}
                <div className='flex rounded-[5px] relative items-center border border-[#D7DEE0] p-[5px] text-[20px]'>
                    <FiShoppingCart className='hover:scale-110 transition-all duration-300' />
                    <div className='bg-mainRed text-[#ffffff] absolute right-[-10px] bottom-[-5px] rounded-[5px] min-w-4 h-4 pt-[2px] flex justify-center items-center text-xs'>
                            <span>1</span>
                    </div>
                </div>
            </div>
        </header>
    )
}