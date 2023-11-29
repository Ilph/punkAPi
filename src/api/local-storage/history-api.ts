import { localST } from '../../utils/local-storage'

import { BaseApi } from './base-api'

export interface IHistoryApi {
  addStory: (historyQuery: string) => void
  deleteStory: (historyQuery: string) => void
}

class HistoryApi extends BaseApi implements IHistoryApi {
  static key = 'users'

  public addStory(historyQuery: string) {
    const users = super.getUsers()
    const currentUser = super.getCurrentUser()

    if (!users) {
      return
    }

    users.forEach((item) => {
      if (item.id === currentUser?.id) {
        item.data.history.push(historyQuery)
      }
    })
    localST.set(HistoryApi.key, users)
  }

  public deleteStory(historyQuery: string) {
    const users = super.getUsers()
    const currentUser = super.getCurrentUser()

    if (!users) {
      return
    }

    const historys = currentUser?.data.history?.filter((item) => item !== historyQuery)
    users.forEach((item) => {
      if (historys && item.id === currentUser?.id) {
        item.data.history = historys
      }
    })
    localST.set(HistoryApi.key, users)
  }
}

export const historyApi = new HistoryApi()
