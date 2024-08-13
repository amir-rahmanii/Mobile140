import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isCloseBasket } from '../../Redux/isBasket/isBasket'
import { isCloseNavBar } from '../../Redux/isNavBar/isNavBar'
import { isCloseNewMap } from '../../Redux/isNewMap/isNewMap'

export default function BlackScreen() {
  const dispatch = useDispatch()
  const isBasket = useSelector(state => state.isBasket.status)
  const isNavBar = useSelector(state => state.isNavBar.status)
  const isNewMap = useSelector(state => state.isNewMap.status)

  return (
    <div onClick={() => {
      dispatch(isCloseBasket())
      dispatch(isCloseNavBar())
      dispatch(isCloseNewMap())
    }
    } className={`bg-black/60 fixed inset-0 w-full h-full z-10 transition-all ${(isBasket || isNavBar || isNewMap) ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>
  )
}
