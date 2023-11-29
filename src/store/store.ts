import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './root-reducer'
import { beersSlice } from './rtk-query.ts/beers-api'
import { searchSlice } from './rtk-query.ts/search-api'
import { favoriteMiddleware } from './middlewares/favorites'
import { logger } from './middlewares/logger'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(beersSlice.middleware)
      .concat(searchSlice.middleware)
      .concat(favoriteMiddleware.middleware)
      .concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
