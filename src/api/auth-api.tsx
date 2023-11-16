import { localST } from '../utils/local-storage'
import { SignUp } from '../models/signup-model'

class AuthApi {
  public getUser() {
    return localST.get('user')
  }

  public signup(body: SignUp) {
    return localST.set('user', body)
  }
}

export const authApi = new AuthApi()
