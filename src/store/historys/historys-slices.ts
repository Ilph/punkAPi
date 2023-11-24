import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { historyApi } from '../../api/history-api'

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
      historyApi.addStorytoLocalStorage(action.payload)
      state.historys.push(action.payload)
    },
    deleteHistoryQuery: (state, action: PayloadAction<string>) => {
      historyApi.deleteFavoriteCardFromLocalStorage(action.payload)
      state.historys = state.historys.filter((item) => item !== action.payload)
    },
    getHistorysOfCurrentUser: (state) => {
      const currentUser = historyApi.getCurrentUser()
      if (currentUser) {
        state.historys = currentUser.data.history
      } else {
        state.historys = []
      }
    }
  }
})

export const { addHistoryQuery, deleteHistoryQuery, getHistorysOfCurrentUser } = historysSlices.actions

export const historysReducer = historysSlices.reducer
