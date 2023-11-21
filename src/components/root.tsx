import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useAppDispatch } from '../hooks/store'
import { getCurrentUser } from '../store/auth/auth-slices'

export const Root = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  })

  return <Outlet />
}
