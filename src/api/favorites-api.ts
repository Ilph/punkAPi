import { localST } from '../utils/local-storage'

import type { FavoritesCard } from '../models/card-model'
import type { LocalStorageKey } from '../models/local-storage-model'

class FavoritesApi {
  static key = 'users'

  public addFavoriteCardtoLocalStorage(favoriteCard: FavoritesCard) {
    const users = this.getUsers()
    const currentUser = this.getCurrentUser()

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
    const users = this.getUsers()
    const currentUser = this.getCurrentUser()

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

  private getUsers() {
    return localST.get() as LocalStorageKey
  }

  public getCurrentUser() {
    const users = this.getUsers()

    if (!users) {
      return
    }

    for (let user of users) {
      const isAuth = user.data.isAuth
      if (isAuth) {
        return user
      } else {
        continue
      }
    }
  }
}

export const favoritesApi = new FavoritesApi()
