import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { handleError } from '../../utils/handle-error'

import { getBeers, getBeerById } from './beer-actions'

import { BeerSlice } from './beer-slice'

export const buildBeers = (builder: ActionReducerMapBuilder<BeerSlice>) =>
  builder
    .addCase(getBeers.pending, (state) => {
      state.getBeesStatus = 'pending'
    })
    .addCase(getBeers.fulfilled, (state, action) => {
      state.getBeesStatus = 'success'
      state.getBeersError = null
      state.beers = action.payload
    })
    .addCase(getBeers.rejected, (state, action) => {
      state.getBeesStatus = 'error'
      state.getBeersError = handleError(action.error.message)
    })

export const buildBeerById = (builder: ActionReducerMapBuilder<BeerSlice>) =>
  builder
    .addCase(getBeerById.pending, (state) => {
      state.getCurrentBeerStatus = 'pending'
    })
    .addCase(getBeerById.fulfilled, (state, action) => {
      state.getCurrentBeerStatus = 'success'
      state.getCurrentBeerError = null
      state.currentBeer = action.payload
    })
    .addCase(getBeerById.rejected, (state, action) => {
      state.getCurrentBeerStatus = 'error'
      state.getCurrentBeerError = handleError(action.error.message)
    })
