import { authApi } from '../../api/auth-api'

import { signIn, signUp, logOut, getCurrentUser, getCurrentUserPending } from './auth-slices'

import type { SignUp } from '../../models/signup-model'
import type { SignIn } from '../../models/signin-model'
import type { AppDispatch } from '../store'

export const registration = (data: SignUp) => (dispatch: AppDispatch) => {
  try {
    authApi.signup(data)
    dispatch(signUp('success'))
    dispatch(getUser())
  } catch {
    dispatch(signUp('error'))
  }
}

export const logIn = (data: SignIn) => (dispatch: AppDispatch) => {
  try {
    authApi.signIn(data)
    dispatch(signIn('success'))
    dispatch(getUser())
  } catch {
    dispatch(signIn('error'))
  }
}

export const exit = () => (dispatch: AppDispatch) => {
  authApi.logOut()
  dispatch(logOut())
}

export const getUser = () => (dispatch: AppDispatch) => {
  dispatch(getCurrentUserPending())
  const currentUser = authApi.getCurrentUser()
  if (currentUser) {
    const user = {
      email: currentUser.data.email
    }
    dispatch(getCurrentUser(user))
  } else {
    dispatch(getCurrentUser(null))
  }
}
