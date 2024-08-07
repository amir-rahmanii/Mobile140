import React, { useState } from 'react'
import Header from '../../Parts/Header/Header'
import NavBar from '../../Parts/NavBar/NavBar'
import { useDispatch, useSelector } from 'react-redux';
import { authLogin, authVerify } from '../../Redux/auth/auth';
import LoginTemplate from '../../Template/LoginTemplate/LoginTemplate';
import Verify from '../../Template/Verify/Verify';
import Footer from '../../Parts/Footer/Footer';

export default function Login() {
    const dispatch = useDispatch();
    const [phoneNumber, setPhoneNumber] = useState('')
    const isInfoAuthLogin = useSelector(state => state.auth)

    //login Handler
    const loginHandler = (phone) => {
        dispatch(authLogin({ phone: phone }))
        setPhoneNumber(phone)
    }

    //verify code
    const verifyHandler = (code) => {
        dispatch(authVerify({ phone: phoneNumber, code: +code }))
    }

    return (
        <div className='font-Dana'>
            <div className='border-b'>
                <div className='container font-Dana'>
                    <Header />
                    <NavBar />
                </div>
            </div>
            {/* page */}
            <div className='flex flex-col justify-center items-center mt-8'>
                {/* form rgister parent */}
                <div className='flex justify-center py-2 '>
                    <div className=' bg-[#eff7f9] border border-[#D9D9D9] p-4 rounded-t-[35px] flex justify-center items-center'>
                        <img className='w-[220px] h-[60px]' src="src/assets/images/logo/logo2.png" alt="logo2" />
                    </div>
                </div>
                {isInfoAuthLogin.some(data => data) ? (
                    <Verify verifyHandler={verifyHandler} phoneNumber={phoneNumber} />
                ) : (
                    <LoginTemplate loginHandler={loginHandler} />
                )}

            </div>
            {/* footer */}
            <div>
                <Footer />
            </div>
        </div>
    )
}
