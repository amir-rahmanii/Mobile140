import React, { useEffect } from 'react'
import Footer from '../../Parts/Footer/Footer'
import Header from '../../Parts/Header/Header'
import NavBar from '../../Parts/NavBar/NavBar'
import SideBar from '../../Parts/UserPanel/SideBar/SideBar'
import { Outlet, useNavigate } from 'react-router-dom'

export default function UserPanel() {

  return (
    <div className='font-Dana'>
      <div className='border-b'>
        <div className='container font-Dana'>
          <Header />
          <NavBar />
        </div>
      </div>
      {/* page */}
      <div className='flex justify-center items-center px-3 mt-12'>
        <div className='md:w-[750px] lg:w-[950px] xl:w-[1150px] flex gap-5'>
          {/* sidebar */}
          <SideBar />
          {/* roures and outlet */}
          <div className='flex-1'>
            <Outlet />
          </div>
        </div>
      </div>

      <div className='font-Dana'>
        <Footer />
      </div>
    </div>
  )
}
