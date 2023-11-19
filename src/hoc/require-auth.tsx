import React from 'react'

import PropTypes from 'prop-types'

import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '../hooks/context'

import { Routes } from '../constants/routes'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.isAuth) {
    return <Navigate to={Routes.HOME} state={{ from: location }} replace />
  }

  return children
}

RequireAuth.propTypes = {
  children: PropTypes.element.isRequired
}
