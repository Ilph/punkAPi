import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Routes } from '../constants/routes'

import { Root } from '../components/root'
import { MainPage } from '../pages/main-page'
import { AuthPage } from '../pages/auth-page'
import { RegPage } from '../pages/reg-page'
import { CardPage } from '../pages/card-page'
import { FavoritesPage } from '../pages/favorites-page'
import { HistoryPage } from '../pages/history-page'
import { SearchPage } from '../pages/search-page'

import { RequireAuth } from '../hoc/require-auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
