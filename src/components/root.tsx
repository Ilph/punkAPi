import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useAppDispatch } from '../hooks/store'
import { getCurrentUser } from '../store/auth/auth-slices'
import { getFavouritesOfCurrentUser } from '../store/favorites/favorites-slices'

export const Root = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
    dispatch(getFavouritesOfCurrentUser())
  })

  return <Outlet />
}
