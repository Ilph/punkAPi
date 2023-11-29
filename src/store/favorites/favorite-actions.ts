import { serviceApi } from '../../api/service-api'

import { getFavouritesOfCurrentUser } from './favorites-slices'

import type { AppDispatch } from '../store'

export const getFavorites = () => (dispatch: AppDispatch) => {
  const currentUser = serviceApi.getCurrentUser()
  if (currentUser) {
    dispatch(getFavouritesOfCurrentUser(currentUser.data.favorites))
  }
}
