import { createSlice } from '@reduxjs/toolkit'

import { buildBeers, buildBeerById } from './extra-reducers'

import type { Beer } from '../../models/beer-model'
import type { RequestStatus } from '../types'

export type BeerSlice = {
  beers: Array<Beer>
  currentBeer: Array<Beer>

  getBeesStatus: RequestStatus
  getBeersError: string | null

  getCurrentBeerStatus: RequestStatus
  getCurrentBeerError: string | null
}

const initialState: BeerSlice = {
  beers: [],
  currentBeer: [],

  getBeesStatus: 'initial',
  getBeersError: null,

  getCurrentBeerStatus: 'initial',
  getCurrentBeerError: null
}

export const beerSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buildBeers(buider)
    buildBeerById(buider)
  }
})

export const beerReducer = beerSlice.reducer
