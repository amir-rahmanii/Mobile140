import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

export default function Scrooler() {
    const [isShowScrooler, setIsShowScrooler] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) { //بیشتر از 400 شد نمایش داده بشود
                setIsShowScrooler(true);
            } else {
                setIsShowScrooler(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {isShowScrooler && (
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })
                } className='z-40 w-[40px] h-[40px] bg-[#D90000] text-white flex justify-center items-center text-base rounded-full fixed bottom-[30px] right-[30px]' >
                    <FaArrowUp />
                </button >

            )}
        </>
    )
}
