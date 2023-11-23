import { localST } from '../utils/local-storage'

import type { SignUp } from '../models/signup-model'
import type { SignIn } from '../models/signin-model'
import type { User } from '../models/user-model'

class AuthApi {
  public getUser(key: string) {
    return localST.get(key) as User
  }

  public signIn(body: SignIn) {
    let keys = Object.keys(localStorage)
    for (let key of keys) {
      const value = this.getUser(key)
      if (value.email === body.email && value.password === body.password) {
        return localST.set(key, { ...value, isAuth: true })
      }
    }
  }

  public signup(body: SignUp) {
    const { email } = body
    return localST.set(email, { ...body, isAuth: true })
  }

  public logOut() {
    const user = this.getCurrentUser()
    if (user && user.email) {
      return localST.set(user.email as string, { ...user, isAuth: false })
    }
  }

  public getCurrentUser() {
    let keys = Object.keys(localStorage)
    for (let key of keys) {
      const value = this.getUser(key)
      if (value !== null && value !== undefined && value.isAuth) {
        return this.getUser(key)
      } else {
        continue
      }
    }
  }
}

export const authApi = new AuthApi()
