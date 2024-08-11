import React from 'react'
import SvgItem from '../../SvgItem/SvgItem'

export default function Info140({title , svgName}) {
    return (
        <div className='flex px-3 lg:px-7 xl:px-14 justify-center items-center gap-3'>
            <p className='text-sm/[24px] w-[71px] text-center text-wrap text-[#4D4D4D]'>{title}</p>
            <SvgItem className='w-[40px] h-[40px]' name={svgName} />
        </div>
    )
}
