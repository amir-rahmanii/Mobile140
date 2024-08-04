import React, { useState } from 'react'
import Header from '../../Parts/Header/Header'
import NavBar from '../../Parts/NavBar/NavBar'

export default function Register() {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className='font-Dana'>
            <div className='border-b'>
                <div className='container font-Dana'>
                    <Header />
                    <NavBar />
                </div>
            </div>
            {/* page */}
            <div className='flex flex-col justify-center items-center'>
                {/* btn register  */}
                <div className='flex justify-center items-center my-4'>
                    <div className='border-2 border-mainRed py-4 px-6'>
                        <span className='font-DanaMedium text-mainBlue text-lg'>ثبت نام مصرف کننده</span>
                    </div>
                </div>
                {/* form rgister parent */}
                <div className='flex justify-center py-2 '>
                    <div className=' bg-[#eff7f9] border border-[#D9D9D9] p-4 rounded-t-[35px] flex justify-center items-center'>
                        <img className='w-[220px] h-[60px]' src="src/assets/images/logo/logo2.png" alt="logo2" />
                    </div>
                </div>
                <div className='border border-[#D9D9D9] py-[30px] px-[50px] '>

                    <p className='font-DanaMedium text-[#000000] text-lg text-center'>ثبت نام مصرف کننده</p>
                    <form className='grid grid-cols-2 gap-8 mt-6'>
                        <div className="flex flex-col relative">
                            <input type="text" className="input-field text-[#4D4D4D] w-[500px] text-sm py-[6px] px-3" autocomplete="off" placeholder=" " />
                            <label for="" className="input-label">
                                <span className="label-name text-[#4D4D4D]">نام</span>
                            </label>
                        </div>
                        <div className="flex flex-col relative">
                            <input type="text" className="input-field text-[#4D4D4D] w-[500px] text-sm py-[6px] px-3" autocomplete="off" placeholder=" " />
                            <label for="" className="input-label">
                                <span className="label-name text-[#4D4D4D]">نام</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
