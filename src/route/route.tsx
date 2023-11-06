import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Routes } from '../constants/routes'

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <div>New page</div>
  }
])
