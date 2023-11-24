import { localST } from '../utils/local-storage'

import type { SignUp } from '../models/signup-model'
import type { SignIn } from '../models/signin-model'
import type { LocalStorageKey } from '../models/local-storage-model'

class AuthApi {
  static key = 'users'

  public getUsers() {
    return localST.get() as LocalStorageKey
  }

  public signIn(body: SignIn) {
    const users = this.getUsers()

    if (!users) {
      return
    }

    users.forEach((item) => {
      if (item.data.email === body.email && item.data.password === body.password) {
        item.data.isAuth = true
      }
    })
    localST.set(AuthApi.key, users)
  }

  public signup(body: SignUp) {
    const users = this.getUsers()
    const { email } = body
    if (users) {
      users.push({
        id: email,
        data: { ...body, isAuth: true, favorites: [], history: [] }
      })
      localST.set(AuthApi.key, users)
    } else {
      const newUser = [
        {
          id: email,
          data: { ...body, isAuth: true, favorites: [], history: [] }
        }
      ]
      localST.set(AuthApi.key, newUser)
    }
  }

  public logOut() {
    const users = this.getUsers()
    const user = this.getCurrentUser()
    users.forEach((item) => {
      if (item.id === user?.id) {
        item.data.isAuth = false
      }
    })
    if (user) {
      localST.set(AuthApi.key, users)
    }
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

export const authApi = new AuthApi()
