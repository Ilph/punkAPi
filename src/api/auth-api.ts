import { localST } from '../utils/local-storage'

import { BaseApi } from './base-api'

import type { SignUp } from '../models/signup-model'
import type { SignIn } from '../models/signin-model'

class AuthApi extends BaseApi {
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

  public signup(body: SignUp) {
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
    users.forEach((item) => {
      if (item.id === user?.id) {
        item.data.isAuth = false
      }
    })
    localST.set(AuthApi.key, users)
  }
}

export const authApi = new AuthApi()
