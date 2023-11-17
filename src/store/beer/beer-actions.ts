import { createAsyncThunk } from '@reduxjs/toolkit'

import { beerApi } from '../../api/beer-api'

export const getBeers = createAsyncThunk('beers/getBeers', async (_, { rejectWithValue }) => {
  try {
    return await beerApi.getOnePageOfBeers()
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const getBeerById = createAsyncThunk('beer/getBeerById', async (id: number, { rejectWithValue }) => {
  try {
    return await beerApi.getBeerById(id)
  } catch (error) {
    return rejectWithValue(error)
  }
})
