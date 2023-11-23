import React from 'react'

import PropTypes from 'prop-types'

import { Navigate, useLocation } from 'react-router-dom'

import { useAppSelector } from '../hooks/store'
import { authSelectors } from '../store/auth/auth-selectors'

import { Routes } from '../constants/routes'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuth = useAppSelector(authSelectors.getIsAuth)

  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={Routes.HOME} state={{ from: location }} replace />
  }

  return children
}

RequireAuth.propTypes = {
  children: PropTypes.element.isRequired
}
