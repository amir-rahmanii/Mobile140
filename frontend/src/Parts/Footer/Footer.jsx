import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import newsLetterSchema from '../../Validations/newsLetter';
import { ClipLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { createNewsLetter } from '../../Redux/newsLetter/newsLetter';
import refreshToken from '../../Services/refreshToken/refreshToken';

export default function Footer() {
    const [isStartLoaderSubmit, setIsStartLoaderSubmit] = useState(false) // start loader
    const dispatch = useDispatch();

    // hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(newsLetterSchema)
    });
    return (
        <footer className='bg-mainBlue mt-8 flex justify-center items-center pt-[50px] pb-[25px]'>
            <div className=' w-[1150px]'>
                {/* logo */}
                <div className='flex justify-center items-center'>
                    <img src="/src/assets/images/logo/logo3.png" alt="logo" />
                </div>
                {/* menu */}
                <div className='grid grid-cols-4 mt-8'>
                    <div>
                        <p className='font-DanaDemiBold text-lg text-[#FFFFFF]'>خدمات مشتریان</p>
                        <ul className='text-mainRed list-disc list-inside mt-2'>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>سوالات متداول</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>اخبار و مقالات</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>ضوابط مقررات</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>آموزش رجیستری</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-DanaDemiBold text-lg text-[#FFFFFF]'>راهنمای قبل از خرید</p>
                        <ul className='text-mainRed list-disc list-inside mt-2'>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>سوالات متداول</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>اخبار و مقالات</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>ضوابط مقررات</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>آموزش رجیستری</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-DanaDemiBold text-lg text-[#FFFFFF]'>راهنمای بعد از خرید</p>
                        <ul className='text-mainRed list-disc list-inside mt-2'>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>سوالات متداول</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>اخبار و مقالات</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>ضوابط مقررات</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>آموزش رجیستری</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-DanaDemiBold text-lg text-[#FFFFFF]'>درباره ما</p>
                        <ul className='text-mainRed list-disc list-inside mt-2'>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>سوالات متداول</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>اخبار و مقالات</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>ضوابط مقررات</Link>
                            </li>
                            <li>
                                <Link className='text-xs/[32px] text-[#FFFFFF] hover:text-mainRed transition-all duration-300'>آموزش رجیستری</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* NewsLetter */}
                <div className='mt-8 flex justify-center'>
                    <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-4'>
                        <p className='text-lg font-DanaDemiBold text-white'>عضویت در خبرنامه</p>
                        {/* inputs */}
                        <div className='bg-white flex items-center  h-[50px] rounded-[10px]'>
                            <div className='text-[#BFBFBF] w-[50px] border-l border-[#BFBFBF] h-full flex justify-center items-center text-[21px]'>
                                <FiMail />
                            </div>
                            <input {...register('email')} className='text-sm px-5  w-[369px] text-[#4D4D4D] text-left outline-none' type="text" placeholder="ایمیل خود را وارد کنید" />
                        </div>
                        {errors.email && <p className='text-mainRed bg-white p-2 rounded-[10px] text-sm mt-1.5'> {errors.email.message}</p>}
                        {/* btn */}
                        <button onClick={handleSubmit((data) => {
                            setIsStartLoaderSubmit(true)
                            dispatch(createNewsLetter({ email: data.email }))
                            // refreshToken()
                            setTimeout(() => {
                                setIsStartLoaderSubmit(false)
                            }, 1000);
                        })} className={`self-center text-white border-2 border-white h-[35px] w-[100px] flex justify-center items-center rounded-[10px] duration-300 transition-all ${isStartLoaderSubmit ? "bg-[#808080]" : "bg-mainBlue hover:bg-white hover:text-black"}`}>
                            ثبت
                            {isStartLoaderSubmit && <ClipLoader size={20} color={"#ffffff"} />}
                        </button>
                        {/* bio */}
                        <p className='text-center text-white font-DanaDemiBold mt-6'>برنامه نویسی شده توسط امیررضا رحمانی</p>
                    </form>
                </div>
            </div>
        </footer>
    )
}
