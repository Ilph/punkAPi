import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useAppDispatch } from '../hooks/store'
import { getUser } from '../store/auth/auth-actions'

export const Root = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser())
  })

  return <Outlet />
}
