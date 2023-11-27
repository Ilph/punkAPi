import { createListenerMiddleware } from '@reduxjs/toolkit'

import { favoritesApi } from '../../api/favorites-api'

import { addFavorites } from '../favorites/favorites-slices'

const addIsFavoriteMiddleware = createListenerMiddleware()

addIsFavoriteMiddleware.startListening({
  actionCreator: addFavorites,
  effect: (action) => {
    favoritesApi.addFavoriteCardtoLocalStorage({ ...action.payload, isFavorite: true })
  }
})

export { addIsFavoriteMiddleware }
