import { Action, Dispatch, Middleware, MiddlewareAPI } from '@reduxjs/toolkit'

export const logger: Middleware = (storeApi: MiddlewareAPI) => (next: Dispatch<Action>) => (action: Action) => {
  if (action.type === 'auth/signIn') {
    let user
    if (storeApi.getState().auth.user) {
      user = storeApi.getState().auth.user.email
      /*eslint-disable*/
      console.log(`Пользователь ${user} авторизовался`)
    } else {
      /*eslint-disable*/
      console.log(`Пользователь не зарегестрирован`)
    }
  }
  return next(action)
}
