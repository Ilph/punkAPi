export type User = {
  email: string
  password: string
  repeatPassword: string
  isAuth: boolean
  favorites: favoritesCard[]
  history: string[]
}

export type favoritesCard = {
  id: number
  name: string
  imageUrl: string
  description: string
  abv: number
  ibu: number
}
