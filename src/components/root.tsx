import React from 'react'
import { Outlet } from 'react-router-dom'

import { useAuthDispatch } from '../hooks/context'
import { getUserAction } from '../context/auth-actions'

export const Root = () => {
  const dispatch = useAuthDispatch()
  dispatch(getUserAction())

  return <Outlet />
}
