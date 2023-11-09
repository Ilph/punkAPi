import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Routes } from '../constants/routes'

import { AuthPage } from '../pages/auth-page'

export const router = createBrowserRouter([
  {
    path: Routes.SIGNIN,
    element: <AuthPage />
  }
])
