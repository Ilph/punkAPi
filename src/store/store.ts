import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './root-reducer'
import { beersSlice } from './rtk-query.ts/beers-api'
import { searchSlice } from './rtk-query.ts/search-api'
import { addIsFavoriteMiddleware } from './middlewares/addFlag'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(beersSlice.middleware)
      .concat(searchSlice.middleware)
      .concat(addIsFavoriteMiddleware.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
