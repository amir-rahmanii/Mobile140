import React, { useEffect, useState } from 'react'
import verifySchema from '../../Validations/verify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../Redux/auth/auth';

export default function Verify({ verifyHandler, phoneNumber }) {
    const [time, setTime] = useState(45); //  45Second
    const [isRunning, setIsRunning] = useState(true); // Timer is Running
    const [isButtonResetDisabled, setIsButtonResetDisabled] = useState(true); // Btn reset is disabled
    const dispatch = useDispatch()
    const [isStartLoaderSubmit, setIsStartLoaderSubmit] = useState(false) // start loader

    // hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(verifySchema)
    });

    //timer
    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);// Timer is Stop
            setIsButtonResetDisabled(false); // Btn is Enable  
            localStorage.removeItem('startTime');
        }

        return () => clearInterval(timer);
    }, [isRunning, time]);


    return (
        <div className='border border-[#D9D9D9] py-[30px] px-[20px] md:px-[50px] '>

            <p className='font-DanaMedium text-[#000000] text-sm text-center'>کد تایید</p>
            <p className='font-DanaMedium text-[#000000] text-sm text-center'>کد تایید برای شماره موبایل {phoneNumber} ارسال گردید</p>
            <form onSubmit={(e) => e.preventDefault()} className='mt-8'>
                <div className='flex flex-col'>
                    {/* code */}
                    <div>
                        <div className="flex flex-col relative">
                            <input {...register('code')} type="text" className="input-field text-[#4D4D4D] w-[269px] md:w-[368px] text-sm py-[6px] px-3" autoComplete="off" placeholder=" " />
                            <label htmlFor="" className="input-label">
                                <span className="label-name text-[#4D4D4D]">کد تایید</span>
                            </label>
                        </div>
                        {errors.code && <p className='text-mainRed text-sm mt-1.5'> {errors.code.message}</p>}
                    </div>
                </div>
                {/* verify btn */}
                <div className='flex justify-center mt-8'>
                    <button disabled={isStartLoaderSubmit} onClick={handleSubmit((data) => {
                        setIsStartLoaderSubmit(true)
                        verifyHandler(data.code)
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
                <p className='text-sm text-center text-[#808080]'>  کد فعال سازی را دریافت نکرده ام؟
                    <span className={`${time === 0 ? "hidden" : "inline-block"} font-DanaDemiBold underline`}> {time} ثانیه تا </span>
                    <button disabled={isButtonResetDisabled} onClick={() => {
                        setTime(45);  // reset timer 45second
                        setIsRunning(true);  //Timer is Running again
                        setIsButtonResetDisabled(true); // Btn is disabled
                        dispatch(authLogin({ phone: phoneNumber }))
                    }} className={`underline ${isButtonResetDisabled ? "text-[#808080]" : "text-[#000000]"} font-DanaDemiBold`}>ارسال مجدد کد</button>

                </p>
            </div>
        </div>
    )
}
