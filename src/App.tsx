import React, { Suspense, useEffect } from 'react'

import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { Spiner } from './ui/loader/spiner'
import { ErrorBoundary } from './components/error-boundary'

import { theme } from './assets/styles/theme'

import { useAppDispatch } from './hooks/store'
import { getUser } from './store/auth/auth-actions'

import { SearchProvider } from './context/search-provider'

import { router } from './route/route'

export function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser())
  })

  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <ErrorBoundary>
          <Suspense fallback={<Spiner />}>
            <RouterProvider router={router} />
          </Suspense>
        </ErrorBoundary>
      </SearchProvider>
    </ThemeProvider>
  )
}
