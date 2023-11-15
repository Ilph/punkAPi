import { createContext } from 'react'

import { initialState } from './initial-state'

import type { Dispatch } from 'react'
import type { Actions } from './type'

export const AuthContext = createContext(initialState)
export const AuthDispatchContext = createContext<Dispatch<Actions>>(() => {})
