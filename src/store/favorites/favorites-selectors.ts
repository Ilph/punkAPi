import { RootState } from '../store'

const getFavorites = (state: RootState) => state.favourites.favorites
const getIsFavourites = (state: RootState) => state.favourites.isFavorites

export const favoritesSelectors = { getFavorites, getIsFavourites }
