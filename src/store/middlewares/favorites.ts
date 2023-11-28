import { createListenerMiddleware } from '@reduxjs/toolkit'

import { favoritesApi } from '../../api/favorites-api'

import { addFavorites, deleteFavorites } from '../favorites/favorites-slices'

const favoriteMiddleware = createListenerMiddleware()

favoriteMiddleware.startListening({
  actionCreator: addFavorites,
  effect: (action) => {
    favoritesApi.addFavoriteCardtoLocalStorage({ ...action.payload, isFavorite: true })
  }
})

favoriteMiddleware.startListening({
  actionCreator: deleteFavorites,
  effect: (action) => {
    favoritesApi.deleteFavoriteCardFromLocalStorage(action.payload)
  }
})

export { favoriteMiddleware }
