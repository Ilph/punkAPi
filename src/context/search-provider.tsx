import React, { useReducer } from 'react'

import { SearchContext, SearchDispatchContext } from './search-context'

import { searchReducer } from './search-reducer'

import { InitialState } from './search-context'

export const SearchProvider = ({ children }: { children: JSX.Element }) => {
  const [searchContext, dispatch] = useReducer(searchReducer, InitialState)

  return (
    <SearchContext.Provider value={searchContext}>
      <SearchDispatchContext.Provider value={dispatch}>{children}</SearchDispatchContext.Provider>
    </SearchContext.Provider>
  )
}
