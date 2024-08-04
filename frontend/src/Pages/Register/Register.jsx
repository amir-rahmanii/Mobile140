import React, { useEffect, useState } from 'react'
import Header from '../../Parts/Header/Header'
import NavBar from '../../Parts/NavBar/NavBar'
import { useForm } from 'react-hook-form'
import registerSchema from '../../Validations/register';
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from 'react-redux';
import { authRegister } from '../../Redux/auth/auth';
import { notify } from '../../App';






export default function Register() {
    const dispatch = useDispatch();
    const [issubmitRules, setIsSubmitRules] = useState(false)
    const [isNewsLetter, setIsNewsLetter] = useState(false)

    // hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema)
    });


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
                    <form onSubmit={handleSubmit((data) => {
                        if (issubmitRules) {
                            dispatch(authRegister(data))
                            if(isNewsLetter){
                                
                            }
                        } else {
                            notify("لطفا با قوانین و مقررات موافقت کنید")
                        }
                    })} className='mt-6'>
                        <div className='grid grid-cols-2 gap-8'>
                            {/* name */}
                            <div>
                                <div className="flex flex-col relative">
                                    <input {...register('name')} type="text" className="input-field text-[#4D4D4D] w-[500px] text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                                    <label htmlFor="" className="input-label">
                                        <span className="label-name text-[#4D4D4D]">نام</span>
                                    </label>
                                </div>
                                {errors.name && <p className='text-mainRed text-sm mt-1.5'> {errors.name.message}</p>}
                            </div>
                            {/* Username */}
                            <div>
                                <div className="flex flex-col relative">
                                    <input {...register('username')} type="text" className="input-field text-[#4D4D4D] w-[500px] text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                                    <label htmlFor="" className="input-label">
                                        <span className="label-name text-[#4D4D4D]">نام کاربری</span>
                                    </label>
                                </div>
                                {errors.username && <p className='text-mainRed text-sm mt-1.5'> {errors.username.message}</p>}
                            </div>
                            {/* Phone */}
                            <div>
                                <div className="flex flex-col relative">
                                    <input {...register('phone')} type="text" className="input-field text-[#4D4D4D] w-[500px] text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                                    <label htmlFor="" className="input-label">
                                        <span className="label-name text-[#4D4D4D]">شماره همراه</span>
                                    </label>
                                </div>
                                {errors.phone && <p className='text-mainRed text-sm mt-1.5'> {errors.phone.message}</p>}
                            </div>

                            {/* email */}
                            <div>
                                <div className="flex flex-col relative">
                                    <input {...register('email')} type="text" className="input-field text-[#4D4D4D] w-[500px] text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                                    <label htmlFor="" className="input-label">
                                        <span className="label-name text-[#4D4D4D]">ایمیل</span>
                                    </label>
                                </div>
                                {errors.email && <p className='text-mainRed text-sm mt-1.5'> {errors.email.message}</p>}
                            </div>
                            {/* password */}
                            <div>
                                <div className="flex flex-col relative">
                                    <input {...register('password')} type="text" className="input-field text-[#4D4D4D] w-[500px] text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                                    <label htmlFor="" className="input-label">
                                        <span className="label-name text-[#4D4D4D]">رمز عبور</span>
                                    </label>
                                </div>
                                {errors.password && <p className='text-mainRed text-sm mt-1.5'> {errors.password.message}</p>}
                            </div>
                            {/* confirmPassword */}
                            <div>
                                <div className="flex flex-col relative">
                                    <input {...register('confirmPassword')} type="text" className="input-field text-[#4D4D4D] w-[500px] text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                                    <label htmlFor="" className="input-label">
                                        <span className="label-name text-[#4D4D4D]">تایید رمز عبور</span>
                                    </label>
                                </div>
                                {errors.confirmPassword && <p className='text-mainRed text-sm mt-1.5'> {errors.confirmPassword.message}</p>}
                            </div>
                        </div>
                        {/* rules */}
                        <div className='mt-8 flex flex-col gap-3'>
                            {/* newsLetter */}
                            <div className='flex gap-2'>
                                <input checked={isNewsLetter} type="checkbox" className='accent-mainBlue w-[16px]' onChange={(e) => setIsNewsLetter(e.target.checked)} />
                                <p className='text-base text-[#4D4D4D]'>مایل به دریافت خبرنامه هستم</p>
                            </div>
                            {/* submitRules */}
                            <div className='flex gap-2'>
                                <input type="checkbox" checked={issubmitRules} className='accent-mainBlue w-[16px]' onChange={(e) => setIsSubmitRules(e.target.checked)} />
                                <p className='text-base text-[#4D4D4D]'>با ثبت عضویت تمام <span className='text-[#ff0000]'>قوانین و مقررات</span> سایت را می پذیرم</p>
                            </div>
                        </div>

                        {/* register btn */}
                        <div className='flex justify-center mt-8'>
                            <button className='text-nowrap min-w-[110px] bg-mainBlue text-center text-[#FFFFFF] text-base/[41px] rounded-[10px] hover:bg-[#0A6DB7] transition-all duration-300'>
                                ثبت نام
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

