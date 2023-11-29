import { createSelector } from 'reselect'

import { RootState } from '../store'

const getIsAuth = createSelector(
  (state: RootState) => state.auth.isAuth,
  (isAuth) => isAuth
)
const getSignInStatus = (state: RootState) => state.auth.signInStatus
const getSignInError = (state: RootState) => state.auth.signInError
const getSignUpError = (state: RootState) => state.auth.signUpError
const getUserStatus = (state: RootState) => state.auth.userStatus

export const authSelectors = { getIsAuth, getSignInStatus, getSignInError, getSignUpError, getUserStatus }
