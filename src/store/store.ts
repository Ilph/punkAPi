import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './RootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      thunk: true,
    })
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
