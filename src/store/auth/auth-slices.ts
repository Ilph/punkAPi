import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    signIn: (state, action: PayloadAction<string>) => {
      if (action.payload === 'success') {
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
    signUp: (state, action: PayloadAction<string>) => {
      if (action.payload === 'error') {
        state.signInStatus = 'error'
        state.signUpStatus = 'error'
        state.isAuth = false
        state.signInError = null
        state.signUpError = null
      } else {
        state.signInStatus = 'success'
        state.signUpStatus = 'success'
        state.isAuth = true
        state.signInError = null
        state.signUpError = null
      }
    },
    logOut: (state) => {
      state.user = null
      state.isAuth = false
      state.logOutStatus = 'success'
      state.logOutError = null
    },
    getCurrentUserPending: (state) => {
      state.user = null
      state.userStatus = 'pending'
      state.isAuth = false
      state.userError = null
    },
    getCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
      if (action.payload === null) {
        state.userStatus = 'error'
        state.isAuth = false
        state.userError = 'Текущий пользователь отсутствует'
      } else {
        state.userStatus = 'success'
        state.isAuth = true
        state.userError = null
      }
    }
  }
})

export const { signIn, signUp, logOut, getCurrentUser, getCurrentUserPending } = authSlice.actions

export const authReducer = authSlice.reducer
