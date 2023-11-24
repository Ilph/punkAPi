import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_API_CONFIG } from '../../constants/base-api-config'

import { modifyBeersResponse } from '../../utils/modify-beers-response'

import type { modifyedBeer } from '../../utils/modify-beers-response'
import type { Beer } from '../../models/beer-model'

type QueryParams = {
  beerName: string
}

export const searchSlice = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_CONFIG.url }),
  endpoints: (builder) => ({
    doSearch: builder.query<modifyedBeer[], QueryParams>({
      query: ({ beerName }) => ({
        url: '/beers',
        params: { beer_name: beerName }
      }),
      transformResponse: (response: Beer[]): modifyedBeer[] => modifyBeersResponse(response)
    })
  })
})

export const { useDoSearchQuery, useLazyDoSearchQuery } = searchSlice
