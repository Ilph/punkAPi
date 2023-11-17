import { RootState } from '../root-reducer'

const getBeers = (state: RootState) => state.beers.beers
const getBeersStatus = (state: RootState) => state.beers.getBeesStatus

const getCurrentBeer = (state: RootState) => state.beers.currentBeer[0]
const getCurrentBeerStatus = (state: RootState) => state.beers.getCurrentBeerStatus

export const beerSelectors = {
  getBeers,
  getBeersStatus,
  getCurrentBeer,
  getCurrentBeerStatus
}
