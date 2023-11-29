import React, { useMemo, useReducer } from 'react'

import { SearchContext, SearchDispatchContext } from './search-context'

import { searchReducer } from './search-reducer'

import { InitialState } from './search-context'

export const SearchProvider = ({ children }: { children: JSX.Element }) => {
  const [searchContext, dispatch] = useReducer(searchReducer, InitialState)

  const searchContextMemo = useMemo(() => searchContext, [searchContext])

  return (
    <SearchContext.Provider value={searchContextMemo}>
      <SearchDispatchContext.Provider value={dispatch}>{children}</SearchDispatchContext.Provider>
    </SearchContext.Provider>
  )
}
