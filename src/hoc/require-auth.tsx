import React from 'react'

import PropTypes from 'prop-types'

import { Navigate, useLocation } from 'react-router-dom'

import { useAppSelector } from '../hooks/store'
import { authSelectors } from '../store/auth/auth-selectors'

import { Spiner } from '../ui/loader/spiner'

import { Routes } from '../constants/routes'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuth = useAppSelector(authSelectors.getIsAuth)
  const signInStatus = useAppSelector(authSelectors.getSignInStatus)

  const location = useLocation()

  if (signInStatus === 'initial' || signInStatus === 'pending') {
    return <Spiner />
  }

  if (!isAuth) {
    return <Navigate to={`${Routes.HOME}?page=1`} state={{ from: location }} replace />
  }
  return children
}

RequireAuth.propTypes = {
  children: PropTypes.element.isRequired
}
