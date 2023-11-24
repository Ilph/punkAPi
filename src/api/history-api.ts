import { localST } from '../utils/local-storage'

import type { LocalStorageKey } from '../models/local-storage-model'

class HistoryApi {
  static key = 'users'

  public addStorytoLocalStorage(historyQuery: string) {
    const users = this.getUsers()
    const currentUser = this.getCurrentUser()

    if (!users) {
      return
    }

    users.forEach((item) => {
      if (item.id === currentUser?.id) {
        item.data.history.push(historyQuery)
      }
    })
    localST.set(HistoryApi.key, users)
  }

  public deleteFavoriteCardFromLocalStorage(historyQuery: string) {
    const users = this.getUsers()
    const currentUser = this.getCurrentUser()

    if (!users) {
      return
    }

    const historys = currentUser?.data.history?.filter((item) => item !== historyQuery)
    users.forEach((item) => {
      if (historys && item.id === currentUser?.id) {
        item.data.history = historys
      }
    })
    localST.set(HistoryApi.key, users)
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

export const historyApi = new HistoryApi()
