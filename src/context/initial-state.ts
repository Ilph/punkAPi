import type { AuthContextType } from './type'

export const initialState: AuthContextType = {
  user: null,
  isAuth: false,
  signInStatus: 'initial',
  signInError: null
}
