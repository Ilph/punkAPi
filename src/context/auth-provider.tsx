import React, { useReducer } from 'react'

import { AuthContext, AuthDispatchContext } from './auth-context'

import { initialState } from './initial-state'

import { authReducer } from './auth-reducer'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [authContext, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={authContext}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}
