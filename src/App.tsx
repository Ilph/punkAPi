import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { theme } from './assets/styles/theme'

import { AuthProvider } from './context/auth-provider'

import { router } from './route/route'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}
