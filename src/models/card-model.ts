export type Card = {
  id: number
  name: string
  imageUrl: string
  description: string
  abv: number
  ibu: number
}

export type FavoritesCard = {
  id: number
  name: string
  imageUrl: string
  description: string
  abv: number
  ibu: number
  isFavorite: boolean
}
