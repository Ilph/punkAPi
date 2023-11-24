import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { favoritesApi } from '../../api/favorites-api'

import type { favoritesCard } from '../../models/user-model'

export type FavoritesSlice = {
  favorites: favoritesCard[]
  isFavorites: boolean
}

const initialState: FavoritesSlice = {
  favorites: [],
  isFavorites: true
}

export const favoritesSlices = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<favoritesCard>) => {
      favoritesApi.addFavoriteCardtoLocalStorage(action.payload)
      const result = state.favorites.find((item) => item.id === action.payload.id)
      if (result) {
        return
      }
      state.favorites.push(action.payload)
    },
    deleteFavorites: (state, action: PayloadAction<number>) => {
      favoritesApi.deleteFavoriteCardFromLocalStorage(action.payload)
      state.favorites = state.favorites.filter((item) => item.id !== action.payload)
    },
    getFavouritesOfCurrentUser: (state) => {
      const currentUser = favoritesApi.getCurrentUser()
      if (currentUser) {
        state.favorites = currentUser.data.favorites
      } else {
        state.favorites = []
      }
    }
  }
})

export const { addFavorites, deleteFavorites, getFavouritesOfCurrentUser } = favoritesSlices.actions

export const favoritesReducer = favoritesSlices.reducer
