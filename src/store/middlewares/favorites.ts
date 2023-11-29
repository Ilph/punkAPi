import { createListenerMiddleware } from '@reduxjs/toolkit'

import { serviceApi } from '../../api/service-api'

import { addFavorites, deleteFavorites } from '../favorites/favorites-slices'

const favoriteMiddleware = createListenerMiddleware()

favoriteMiddleware.startListening({
  actionCreator: addFavorites,
  effect: (action) => {
    serviceApi.addFavoriteCardtoLocalStorage({ ...action.payload, isFavorite: true })
  }
})

favoriteMiddleware.startListening({
  actionCreator: deleteFavorites,
  effect: (action) => {
    serviceApi.deleteFavoriteCardFromLocalStorage(action.payload)
  }
})

export { favoriteMiddleware }
