import { combineReducers } from '@reduxjs/toolkit'

import { beerReducer } from './beer/beer-slice'

export const rootReducer = combineReducers({
  beers: beerReducer
})

export type RootState = ReturnType<typeof rootReducer>
