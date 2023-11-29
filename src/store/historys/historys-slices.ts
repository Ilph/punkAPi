import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type FavoritesSlice = {
  historys: string[]
}

const initialState: FavoritesSlice = {
  historys: []
}

export const historysSlices = createSlice({
  name: 'historys',
  initialState,
  reducers: {
    addHistoryQuery: (state, action: PayloadAction<string>) => {
      state.historys.push(action.payload)
    },
    deleteHistoryQuery: (state, action: PayloadAction<string>) => {
      state.historys = state.historys.filter((item) => item !== action.payload)
    },
    resetHistory: (state) => {
      state.historys = []
    },
    getHistorysOfCurrentUser: (state, action: PayloadAction<string[] | []>) => {
      state.historys = action.payload
    }
  }
})

export const { addHistoryQuery, deleteHistoryQuery, getHistorysOfCurrentUser, resetHistory } = historysSlices.actions

export const historysReducer = historysSlices.reducer
