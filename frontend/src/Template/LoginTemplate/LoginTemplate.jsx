import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import loginSchema from '../../Validations/login';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

export default function LoginTemplate({ loginHandler }) {

    const [isStartLoaderSubmit, setIsStartLoaderSubmit] = useState(false) // start loader

    // hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema)
    });

    return (
        <div className='border border-[#D9D9D9] py-[30px] px-[20px] md:px-[50px] '>
            <p className='font-DanaMedium text-[#000000] text-lg text-center'>ورود به سایت</p>
            <form onSubmit={(e) => e.preventDefault()} className='mt-6'>
                <div className='flex flex-col'>
                    {/* Phone */}
                    <div>
                        <div className="flex flex-col relative">
                            <input {...register('phone')} type="text" className="input-field text-[#4D4D4D] w-[269px] md:w-[368px] text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                            <label htmlFor="" className="input-label">
                                <span className="label-name text-[#4D4D4D]">شماره همراه</span>
                            </label>
                        </div>
                        {errors.phone && <p className='text-mainRed text-sm mt-1.5'> {errors.phone.message}</p>}
                    </div>
                </div>
                {/* login btn */}
                <div className='flex justify-center mt-8'>
                    <button disabled={isStartLoaderSubmit} onClick={handleSubmit((data) => {
                        setIsStartLoaderSubmit(true)
                        loginHandler(data.phone)
                        setTimeout(() => {
                            setIsStartLoaderSubmit(false)
                        }, 1000);
                    })} className={`flex items-center justify-center gap-1 text-nowrap min-w-[130px] text-center text-[#FFFFFF] text-base/[41px] rounded-[10px]  transition-all duration-300 ${isStartLoaderSubmit ? "bg-[#808080]" : "bg-mainBlue hover:bg-[#0A6DB7]"}`}>
                        ورود
                        {isStartLoaderSubmit && <ClipLoader size={20} color={"#ffffff"} />}

                    </button>
                </div>
            </form>
            {/* register */}
            <div className='mt-12'>
                <p className='text-sm text-center text-[#808080]'>قبلا ثبت نام نکرده اید ؟ <Link to='/register' className='underline text-[#000000] font-DanaDemiBold'>ثبت نام</Link></p>
            </div>
        </div>
    )
}
