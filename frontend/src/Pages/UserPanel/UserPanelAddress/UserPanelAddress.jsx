import React from 'react'
import { FaUser } from 'react-icons/fa'
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { isOpenNewMap } from '../../../Redux/isNewMap/isNewMap';
import AddNewMap from '../../../Components/UserPanel/AddNewMap/AddNewMap';

export default function UserPanelAddress() {
  const dispatch = useDispatch()
  const isNewMap = useSelector(state => state.isNewMap.status)
  return (
    <>
      <div className='py-[15px] px-5 h-full border border-[#E6E6E6] w-f rounded-[10px]'>
        <div>
          {/* title */}
          <div className=' flex items-center gap-2'>
            <div className='text-mainBlue text-base'>
              <FaUser />
            </div>
            <p className='text-lg/[20px] font-DanaDemiBold'>اطلاعات حساب کاربری</p>
          </div>
          {/* address */}
          <button onClick={() => dispatch(isOpenNewMap())} className='mt-8 rounded-[10px] hover:border-black transition-all duration-300 text-[#999999] flex gap-1 justify-center items-center border border-dashed border-[#D9D9D9] w-[397px] h-[140px]'>
            <FaPlus />
            <p>افزودن آدرس جدید</p>
          </button>
        </div>
      </div>
      {isNewMap && (
        <AddNewMap />
      )}
    </>
  )
}
