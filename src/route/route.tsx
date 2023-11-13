import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Routes } from '../constants/routes'

import { MainPage } from '../pages/main-page'
import { AuthPage } from '../pages/auth-page'
import { RegPage } from '../pages/reg-page'

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <MainPage />
  },
  {
    path: Routes.SIGNIN,
    element: <AuthPage />
  },
  {
    path: Routes.SIGNUP,
    element: <RegPage />
  }
])
