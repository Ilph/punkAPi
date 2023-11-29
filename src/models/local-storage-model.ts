import { FavoritesCard } from './card-model'

type UserOnServer = {
  email: string
  password: string
  repeatPassword: string
  isAuth: boolean
  favorites: FavoritesCard[]
  history: string[]
}

export type LocalStorageUser = {
  id: string
  data: UserOnServer
}

export type LocalStorageKeyUsers = LocalStorageUser[]
