import { historyApi } from '../../api/history-api'

import { addHistoryQuery, deleteHistoryQuery, getHistorysOfCurrentUser } from './historys-slices'

import type { AppDispatch } from '../store'

export const addHistory = (query: string) => (dispatch: AppDispatch) => {
  historyApi.addStory(query)
  dispatch(addHistoryQuery(query))
}

export const deleteHistory = (query: string) => (dispatch: AppDispatch) => {
  historyApi.deleteStory(query)
  dispatch(deleteHistoryQuery(query))
}

export const getHistorys = () => (dispatch: AppDispatch) => {
  const currentUser = historyApi.getCurrentUser()
  if (currentUser) {
    dispatch(getHistorysOfCurrentUser(currentUser.data.history))
  } else {
    dispatch(getHistorysOfCurrentUser([]))
  }
}
