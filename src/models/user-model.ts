import { FavoritesCard } from './card-model'

export type User = {
  email: string
  password: string
  repeatPassword: string
  isAuth: boolean
  favorites: FavoritesCard[]
  history: string[]
}
