import { combineReducers } from '@reduxjs/toolkit'

import { authReducer } from './auth/auth-slices'

import { beersSlice } from './rtk-query.ts/beers-api'

export const rootReducer = combineReducers({
  auth: authReducer,
  [beersSlice.reducerPath]: beersSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
