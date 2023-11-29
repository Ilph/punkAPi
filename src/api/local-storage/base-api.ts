import { localST } from '../../utils/local-storage'

import type { LocalStorageUser, LocalStorageKeyUsers } from '../../models/local-storage-model'

export class BaseApi {
  protected getUsers(): LocalStorageKeyUsers | null {
    const users = localST.get<LocalStorageKeyUsers>('users')
    return users
  }

  public getCurrentUser(): LocalStorageUser | null {
    const users = this.getUsers()

    if (users) {
      for (let user of users) {
        const isAuth = user.data.isAuth
        if (isAuth) {
          return user
        } else {
          continue
        }
      }
    }
    return null
  }
}
