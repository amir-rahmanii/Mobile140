import React from 'react'

export default function BlackScreen({isShowItem , setisShowItem}) {
  return (
      <div onClick={() => setisShowItem(false)
      } className={`bg-black/40 md:hidden fixed inset-0 w-full h-full z-10 transition-all ${isShowItem ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>
  )
}
