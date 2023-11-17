import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { RootState } from '../store/root-reducer'

import { store } from '../store/store'

export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
