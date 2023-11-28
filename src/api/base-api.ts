import { localST } from '../utils/local-storage'

import type { LocalStorageKey } from '../models/local-storage-model'

export class BaseApi {
  protected getUsers() {
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
