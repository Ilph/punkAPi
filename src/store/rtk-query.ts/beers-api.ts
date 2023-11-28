import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_API_CONFIG } from '../../constants/base-api-config'

import { modifyBeersResponse } from '../../utils/modify-beers-response'

import type { modifyedBeer } from '../../utils/modify-beers-response'
import type { Beer } from '../../models/beer-model'

type QueryParams = {
  page: number
}

export const beersSlice = createApi({
  reducerPath: 'beers',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_CONFIG.url }),
  endpoints: (builder) => ({
    getBeers: builder.query<modifyedBeer[], QueryParams>({
      query: ({ page = 1 }) => ({
        url: '/beers',
        params: { page }
      }),
      transformResponse: (response: Beer[]): modifyedBeer[] => modifyBeersResponse(response)
    }),

    getBeerById: builder.query<modifyedBeer, number>({
      query: (beerId) => `/beers/${beerId}`,
      transformResponse: (response: Beer[]): modifyedBeer => modifyBeersResponse(response)[0]
    })
  })
})

export const { useGetBeersQuery, useGetBeerByIdQuery } = beersSlice
