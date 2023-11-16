import { authApi } from '../api/auth-api'

import { ActionType } from './type'

import type { SignUp } from '../models/signup-model'
import type { SignIn } from '../models/signin-model'

export const signUpAction = (data: SignUp) => {
  registration(data)
  return {
    type: ActionType.AddUser,
    user: getUser(),
    isAuth: true,
    signInStatus: 'initial',
    signInError: null
  }
}

export const signInAction = (data: SignIn) => {
  const user = getUser()
  if (user && user.email === data.email && user.password === data.password) {
    return {
      type: ActionType.GetUser,
      user,
      isAuth: true,
      signInStatus: 'succses',
      signInError: null
    }
  } else {
    return {
      type: ActionType.GetUser,
      user: null,
      isAuth: false,
      signInStatus: 'error',
      signInError: 'Неверный логин или пароль'
    }
  }
}

export const logOut = () => ({
  type: ActionType.LogOut,
  user: null,
  isAuth: false,
  signInStatus: 'initial',
  signInError: null
})

export const getUserAction = () => {
  const user = getUser()
  const auth = user ? true : false
  return {
    type: ActionType.GetUser,
    user,
    isAuth: auth,
    signInStatus: 'succses',
    signInError: null
  }
}

export const registration = (data: SignUp) => {
  authApi.signup(data)
}

export const getUser = () => {
  const user = authApi.getUser() as SignUp | null
  return user
}
