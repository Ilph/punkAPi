import { RootState } from '../store'

const getIsAuth = (state: RootState) => state.auth.isAuth
const getSignInError = (state: RootState) => state.auth.signInError
const getSignUpError = (state: RootState) => state.auth.signUpError

export const authSelectors = { getIsAuth, getSignInError, getSignUpError }
