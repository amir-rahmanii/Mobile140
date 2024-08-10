import React from 'react'

export default function BlackScreen({isShowItem , setIsShowItem}) {
  return (
      <div onClick={() => setIsShowItem(false)
      } className={`bg-black/60 fixed inset-0 w-full h-full z-10 transition-all ${isShowItem ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>
  )
}
