import { useContext } from 'react'

import { SearchContext, SearchDispatchContext } from '../context/search-context'

export const useSearch = () => useContext(SearchContext)
export const useSearchDispatch = () => useContext(SearchDispatchContext)
