import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { theme } from './assets/styles/theme'

import { SearchProvider } from './context/search-provider'

import { router } from './route/route'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </ThemeProvider>
  )
}