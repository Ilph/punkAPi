import { fetchApi } from '../utils/fetch-api'

import type { Beer } from '../models/beer-model'

class BeerApi {
  public getOnePageOfBeers() {
    return fetchApi.get<Beer[]>('/beers')
  }

  public getBeerById(id: number) {
    return fetchApi.get<Array<Beer>>(`/beers/${id}`)
  }
}

export const beerApi = new BeerApi()
