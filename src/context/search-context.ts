import { createContext } from 'react'

import type { Dispatch } from 'react'

export type Actions = {
  type: 'addSearchValue'
  searchValue: string
}

export type SearchContextType = {
  searchValue: string
}

export const InitialState: SearchContextType = {
  searchValue: ''
}

export const SearchContext = createContext(InitialState)
export const SearchDispatchContext = createContext<Dispatch<Actions>>(() => {})
