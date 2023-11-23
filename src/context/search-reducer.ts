import type { Reducer } from 'react'

import type { Actions, SearchContextType } from './search-context'

export const searchReducer: Reducer<SearchContextType, Actions> = (state, action) => {
  switch (action.type) {
    case 'addSearchValue': {
      return {
        ...state,
        searchValue: action.searchValue
      }
    }
    default: {
      return state
    }
  }
}
