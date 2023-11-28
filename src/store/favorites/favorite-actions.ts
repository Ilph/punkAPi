import { favoritesApi } from '../../api/favorites-api'

import { getFavouritesOfCurrentUser } from './favorites-slices'

import type { AppDispatch } from '../store'

export const getFavorites = () => (dispatch: AppDispatch) => {
  const currentUser = favoritesApi.getCurrentUser()
  if (currentUser) {
    dispatch(getFavouritesOfCurrentUser(currentUser.data.favorites))
  }
}
