import { FavoritesCard } from './card-model'

type DataOfUser = {
  email: string
  password: string
  repeatPassword: string
  isAuth: boolean
  favorites: FavoritesCard[]
  history: string[]
}

export type LocalStorageUser = {
  id: string
  data: DataOfUser
}

export type LocalStorageKey = LocalStorageUser[]
