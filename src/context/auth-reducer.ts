import { ActionType } from './type'

import type { Reducer } from 'react'

import type { AuthContextType } from './type'
import type { Actions } from './type'

export const authReducer: Reducer<AuthContextType, Actions> = (state, action) => {
  switch (action.type) {
    case ActionType.GetUser: {
      return {
        ...state,
        user: action.user ? action.user : null,
        isAuth: action.isAuth,
        signInStatus: action.signInStatus,
        signInError: action.signInError
      }
    }
    case ActionType.AddUser: {
      return {
        ...state,
        user: action.user ? action.user : null,
        isAuth: action.isAuth,
        signInStatus: action.signInStatus,
        signInError: action.signInError
      }
    }
    case ActionType.LogOut: {
      return {
        ...state,
        user: action.user,
        isAuth: action.isAuth,
        signInStatus: action.signInStatus,
        signInError: action.signInError
      }
    }
    default: {
      return state
    }
  }
}
