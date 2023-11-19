import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Routes } from '../constants/routes'

import { Root } from '../components/root'

import { RequireAuth } from '../hoc/require-auth'
import { Spiner } from '../ui/loader/spiner'
import { ErrorBoundary } from '../components/error-boundary'

const MainPage = lazy(() => import('../pages/main-page'))
const AuthPage = lazy(() => import('../pages/auth-page'))
const RegPage = lazy(() => import('../pages/reg-page'))
const CardPage = lazy(() => import('../pages/card-page'))
const FavoritesPage = lazy(() => import('../pages/favorites-page'))
const HistoryPage = lazy(() => import('../pages/history-page'))
const SearchPage = lazy(() => import('../pages/search-page'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Spiner />}>
          <Root />
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
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
      },
      {
        path: `${Routes.CARD}/:cardId`,
        element: <CardPage />
      },
      {
        path: Routes.FAVORITES,
        element: (
          <RequireAuth>
            <FavoritesPage />
          </RequireAuth>
        )
      },
      {
        path: Routes.HISTORY,
        element: (
          <RequireAuth>
            <HistoryPage />
          </RequireAuth>
        )
      },
      {
        path: Routes.SEARCH,
        element: <SearchPage />
      }
    ]
  }
])
