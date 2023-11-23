import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { authApi } from '../../api/auth-api'

import type { SignIn } from '../../models/signin-model'
import type { SignUp } from '../../models/signup-model'
import type { User } from '../../models/user-model'

export type AuthSlice = {
  user: User | null
  isAuth: boolean

  signInStatus: string
  signInError: string | null

  signUpStatus: string
  signUpError: string | null

  logOutStatus: string
  logOutError: string | null

  userStatus: string
  userError: string | null
}

const initialState: AuthSlice = {
  user: null,
  isAuth: false,

  signInStatus: 'initial',
  signInError: null,

  signUpStatus: 'initial',
  signUpError: null,

  logOutStatus: 'initial',
  logOutError: null,

  userStatus: 'initial',
  userError: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<SignIn>) => {
      authApi.signIn(action.payload)
      const currentUser = authApi.getCurrentUser()
      if (currentUser) {
        state.user = currentUser
        state.isAuth = true
        state.signInStatus = 'success'
        state.signInError = null
      } else {
        state.user = null
        state.isAuth = false
        state.signInStatus = 'error'
        state.signInError = 'Пользователь не зарегистрирован'
      }
    },
    signUp: (state, action: PayloadAction<SignUp>) => {
      authApi.signup(action.payload)
      const currentUser = authApi.getCurrentUser()
      if (currentUser) {
        state.user = currentUser
        state.signInStatus = 'success'
        state.signUpStatus = 'success'
        state.isAuth = true
        state.signInError = null
        state.signUpError = null
      } else {
        state.user = null
        state.signInStatus = 'error'
        state.signUpStatus = 'error'
        state.isAuth = false
        state.signInError = 'Ошибка регистрации'
        state.signUpError = 'Ошибка регистрации'
      }
    },
    logOut: (state) => {
      authApi.logOut()
      state.user = null
      state.isAuth = false
      state.logOutStatus = 'success'
      state.logOutError = null
    },
    getCurrentUser: (state) => {
      const currentUser = authApi.getCurrentUser()
      if (currentUser) {
        state.userStatus = 'success'
        state.user = currentUser
        state.isAuth = true
        state.userError = null
      } else {
        state.userStatus = 'error'
        state.user = null
        state.isAuth = false
        state.userError = 'Текущий пользователь отсутствует'
      }
    }
  }
})

export const { signIn, signUp, logOut, getCurrentUser } = authSlice.actions

export const authReducer = authSlice.reducer
