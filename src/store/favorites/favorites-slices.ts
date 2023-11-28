import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { Card, FavoritesCard } from '../../models/card-model'

export type FavoritesSlice = {
  favorites: FavoritesCard[]
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
    addFavorites: (state, action: PayloadAction<Card>) => {
      const result = state.favorites.find((item) => item.id === action.payload.id)
      if (result) {
        return
      }
      state.favorites.push({ ...action.payload, isFavorite: true })
    },
    deleteFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload)
    },
    getFavouritesOfCurrentUser: (state, action: PayloadAction<FavoritesCard[] | []>) => {
      state.favorites = action.payload
    }
  }
})

export const { addFavorites, deleteFavorites, getFavouritesOfCurrentUser } = favoritesSlices.actions

export const favoritesReducer = favoritesSlices.reducer
