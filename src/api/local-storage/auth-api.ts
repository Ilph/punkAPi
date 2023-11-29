import { localST } from '../../utils/local-storage'

import { BaseApi } from './base-api'

import type { SignUp } from '../../models/signup-model'
import type { SignIn } from '../../models/signin-model'
import type { LocalStorageUser } from '../../models/local-storage-model'

export interface IAuthApi {
  signIn: (body: SignIn) => void
  signUp: (body: SignUp) => void
  logOut: () => void
  getCurrentUser: () => LocalStorageUser | null
}

class AuthApi extends BaseApi implements IAuthApi {
  static key = 'users'

  public signIn(body: SignIn) {
    const users = super.getUsers()

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

  public signUp(body: SignUp) {
    const users = super.getUsers()
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
    const users = super.getUsers()
    const user = super.getCurrentUser()
    if (!users) {
      return
    }
    users.forEach((item) => {
      if (item.id === user?.id) {
        item.data.isAuth = false
      }
    })
    localST.set(AuthApi.key, users)
  }
}

export const authApi = new AuthApi()
