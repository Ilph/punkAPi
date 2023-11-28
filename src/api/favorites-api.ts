import { localST } from '../utils/local-storage'

import { BaseApi } from './base-api'

import type { FavoritesCard } from '../models/card-model'

class FavoritesApi extends BaseApi {
  static key = 'users'

  public addFavoriteCardtoLocalStorage(favoriteCard: FavoritesCard) {
    const users = super.getUsers()
    const currentUser = super.getCurrentUser()

    const item = currentUser?.data.favorites.find((item) => item.id === favoriteCard.id)

    if (item) {
      return
    }

    if (!users) {
      return
    }

    users.forEach((item) => {
      if (item.id === currentUser?.id) {
        item.data.favorites.push(favoriteCard)
      }
    })
    localST.set(FavoritesApi.key, users)
  }

  public deleteFavoriteCardFromLocalStorage(id: number) {
    const users = super.getUsers()
    const currentUser = super.getCurrentUser()

    if (!users) {
      return
    }

    const favorites = currentUser?.data.favorites?.filter((item) => item.id !== id)
    users.forEach((item) => {
      if (favorites && item.id === currentUser?.id) {
        item.data.favorites = favorites
      }
    })
    localST.set(FavoritesApi.key, users)
  }
}

export const favoritesApi = new FavoritesApi()
