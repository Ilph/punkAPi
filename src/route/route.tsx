import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Routes } from '../constants/routes'

import { MainPage } from '../pages/main-page'
import { AuthPage } from '../pages/auth-page'
import { RegPage } from '../pages/reg-page'
import { CardPage } from '../pages/card-page'
import { FavoritesPage } from '../pages/favorites-page'
import { HistoryPage } from '../pages/history-page'
import { SearchPage } from '../pages/search-page'

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
  },
  {
    path: Routes.CARD,
    element: <CardPage />
  },
  {
    path: Routes.FAVORITES,
    element: <FavoritesPage />
  },
  {
    path: Routes.HISTORY,
    element: <HistoryPage />
  },
  {
    path: Routes.SEARCH,
    element: <SearchPage />
  }
])
