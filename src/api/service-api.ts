import { authApi } from './local-storage/auth-api'
import { historyApi } from './local-storage/history-api'
import { favoritesApi } from './local-storage/favorites-api'

import type { SignUp } from '../models/signup-model'
import type { SignIn } from '../models/signin-model'
import type { FavoritesCard } from '../models/card-model'
import type { LocalStorageUser } from '../models/local-storage-model'
import type { IAuthApi } from './local-storage/auth-api'
import type { IHistoryApi } from './local-storage/history-api'
import type { IFavoritesApi } from './local-storage/favorites-api'

class ServiceApi {
  authApi: IAuthApi
  historyApi: IHistoryApi
  favoritesApi: IFavoritesApi

  constructor(api: { authApi: IAuthApi; historyApi: IHistoryApi; favoritesApi: IFavoritesApi }) {
    this.authApi = api.authApi
    this.historyApi = api.historyApi
    this.favoritesApi = api.favoritesApi
  }

  // Реализация методов авторизации и регистрации
  public signIn(body: SignIn): void | null {
    this.authApi.signIn(body)
  }

  public signUp(body: SignUp) {
    this.authApi.signUp(body)
  }

  public logOut() {
    this.authApi.logOut()
  }

  public getCurrentUser(): LocalStorageUser | null {
    return this.authApi.getCurrentUser()
  }

  //Реализация методов истории запросов
  public addStory(historyQuery: string) {
    this.historyApi.addStory(historyQuery)
  }

  public deleteStory(historyQuery: string) {
    this.historyApi.deleteStory(historyQuery)
  }

  //Реализация методов избранные
  public addFavoriteCard(favoriteCard: FavoritesCard) {
    this.favoritesApi.addFavoriteCardtoLocalStorage(favoriteCard)
  }

  public deleteFavoriteCard(id: number) {
    this.favoritesApi.deleteFavoriteCardFromLocalStorage(id)
  }
}

let apiType
if (process.env.REACT_APP_API_URL === 'localStorage') {
  apiType = { authApi, historyApi, favoritesApi }
} else {
  apiType = { authApi, historyApi, favoritesApi }
}

export const serviceApi = new ServiceApi(apiType)
