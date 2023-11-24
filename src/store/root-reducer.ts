import { combineReducers } from '@reduxjs/toolkit'

import { authReducer } from './auth/auth-slices'
import { favoritesReducer } from './favorites/favorites-slices'
import { historysReducer } from './historys/historys-slices'

import { beersSlice } from './rtk-query.ts/beers-api'
import { searchSlice } from './rtk-query.ts/search-api'

export const rootReducer = combineReducers({
  auth: authReducer,
  favourites: favoritesReducer,
  historys: historysReducer,
  [beersSlice.reducerPath]: beersSlice.reducer,
  [searchSlice.reducerPath]: searchSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
