import { useContext } from 'react'

import { AuthContext, AuthDispatchContext } from '../context/auth-context'

export const useAuth = () => useContext(AuthContext)
export const useAuthDispatch = () => useContext(AuthDispatchContext)
