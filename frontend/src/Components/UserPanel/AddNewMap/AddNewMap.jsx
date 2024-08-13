import React, { useEffect, useState } from 'react'
import { isCloseNewMap } from '../../../Redux/isNewMap/isNewMap'
import { useDispatch, useSelector } from 'react-redux'
import { IoCloseOutline } from 'react-icons/io5'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import registerSchema from '../../../Validations/register';
import { SlArrowDown } from "react-icons/sl";
import { getProvincesFromServer } from '../../../Redux/provinces/provinces';


export default function AddNewMap() {
    const [isStartLoaderSubmit, setIsStartLoaderSubmit] = useState(false) // start loader
    const [provincesValue, setProvincesValue] = useState('')
    const [showProvinces, setShowProvinces] = useState(false)
    const provinces = useSelector(state => state.provinces)


    // hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        yupResolver: yupResolver(registerSchema)
    });

    const dispatch = useDispatch();

    // get provinces from server
    useEffect(() => {
        dispatch(getProvincesFromServer())
    }, [])

    return (
        <div className='w-[570px] p-5 fixed top-5 bottom-0 overflow-y-auto bg-white z-50'>
            {/* title */}
            <div className='flex items-center justify-between'>
                <p className='text-[#4D4D4D] text-[19px] font-DanaDemiBold text-center'>افزودن آدرس جدید</p>
                <button onClick={() => dispatch(isCloseNewMap())} className='text-2xl text-black hover:text-white hover:bg-black transition-all duration-300'>
                    <IoCloseOutline />
                </button>
            </div>
            {/* forms */}
            <form onSubmit={(e) => e.preventDefault()} className='mt-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* name */}
                    <div>
                        <div className="flex flex-col relative">
                            <input {...register('name')} type="text" className="input-field text-[#4D4D4D]  text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                            <label htmlFor="" className="input-label">
                                <span className="label-name text-[#4D4D4D]">نام و نام خانوادگی تحویل گیرنده</span>
                            </label>
                        </div>
                        {errors.name && <p className='text-mainRed text-sm mt-1.5'> {errors.name.message}</p>}
                    </div>
                    {/* Phone */}
                    <div>
                        <div className="flex flex-col relative">
                            <input {...register('phone')} type="text" className="input-field text-[#4D4D4D]  text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                            <label htmlFor="" className="input-label">
                                <span className="label-name text-[#4D4D4D]">شماره همراه</span>
                            </label>
                        </div>
                        {errors.phone && <p className='text-mainRed text-sm mt-1.5'> {errors.phone.message}</p>}
                    </div>
                    {/* provinces  */}
                    <div className='relative w-full'>
                        <div onClick={() => setShowProvinces(prevstate => !prevstate)} className='w-full bg-white cursor-pointer h-[42px] px-[5px] border  border-white flex justify-between items-center'>
                            <div className='flex items-center'>
                                <input value={provincesValue} {...register('provinces')} type="text" className="input-field text-[#4D4D4D]  text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                            </div>
                            <div className='bg-white w-5 h-5 flex items-center justify-center rounded-full'>
                                <SlArrowDown />
                            </div>
                        </div>

                        <div className={`${showProvinces ? 'block' : 'hidden'} bg-white absolute overflow-auto flex-col z-10 w-full h-[210px] child:px-[5px] child:py-1 child:cursor-pointer text-[#4D4D4D] child:transition-all child:duration-300 border border-white`}>
                            <div className='border border-[#4D4D4D] m-2'>
                                <input className='w-full outline-none' type="text" placeholder='جستجو کنید' onChange={(e) => setSearchValue(e.target.value)} />
                            </div>
                            <div>
                                {provinces.map((province, index) => (
                                    <div onClick={() => {
                                        setProvincesValue(province.name)
                                        setShowProvinces(false)
                                    }} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' key={index}>
                                        <span className={`${provincesValue == province.name ? 'text-red-600' : ''} line-clamp-1`}>{province.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* provinces */}

                    {/* code post */}
                    <div>
                        <div className="flex flex-col relative">
                            <input {...register('email')} type="text" className="input-field text-[#4D4D4D]  text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                            <label htmlFor="" className="input-label">
                                <span className="label-name text-[#4D4D4D]">کد پستی</span>
                            </label>
                        </div>
                        {errors.email && <p className='text-mainRed text-sm mt-1.5'> {errors.email.message}</p>}
                    </div>

                    <div className='col-span-2'>
                        <div className="flex flex-col relative">
                            <input {...register('email')} type="text" className="input-field text-[#4D4D4D]  text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                            <label htmlFor="" className="input-label">
                                <span className="label-name text-[#4D4D4D]">آدرس تحویل گیرنده</span>
                            </label>
                        </div>
                        {errors.email && <p className='text-mainRed text-sm mt-1.5'> {errors.email.message}</p>}
                    </div>

                </div>

                {/* register btn */}
                <div className='flex justify-center mt-8'>
                    <button disabled={isStartLoaderSubmit} onClick={handleSubmit((data) => {
                        setIsStartLoaderSubmit(true)
                        if (issubmitRules) {
                            dispatch(authRegister(data))
                        } else {
                            notify("error", "لطفا با قوانین و مقررات موافقت کنید")
                        }
                        setTimeout(() => {
                            setIsStartLoaderSubmit(false)
                        }, 1000);
                    })} className={`flex items-center justify-center gap-1 text-nowrap min-w-[110px] text-center text-[#FFFFFF] text-base/[41px] rounded-[10px]  transition-all duration-300 ${isStartLoaderSubmit ? "bg-[#808080]" : "bg-mainBlue hover:bg-[#0A6DB7]"}`}>
                        ثبت نام
                        {isStartLoaderSubmit && <ClipLoader size={20} color={"#ffffff"} />}

                    </button>
                </div>
            </form>
        </div>
    )
}
