import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

import { SearchForm } from '../components/search-form'

import { useDebounce } from '../hooks/use-debounce'
import { useSearch } from '../hooks/context'

import { useAppSelector, useAppDispatch } from '../hooks/store'
import { authSelectors } from '../store/auth/auth-selectors'
import { addHistory } from '../store/historys/history-actions'

import { useDoSearchQuery } from '../store/rtk-query.ts/search-api'

import { Routes } from '../constants/routes'

import type { Search } from '../models/search-model'

export const SearchModule = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchQuery] = useSearchParams()

  const isAuth = useAppSelector(authSelectors.getIsAuth)
  const dispatch = useAppDispatch()
  const searchValue = useSearch()
  const navigate = useNavigate()

  const debouncedSearchValue = useDebounce(searchValue.searchValue, 2000)

  const { data: beers = [], isLoading } = useDoSearchQuery(
    { beerName: debouncedSearchValue },
    {
      skip: !Boolean(debouncedSearchValue)
    }
  )

  const handleSubmit = (data: Search) => {
    navigate(Routes.SEARCH)
    setSearchQuery({ beer_name: data.search })
    if (isAuth) {
      dispatch(addHistory(data.search))
    }
  }

  return <SearchForm beers={beers} isLoading={isLoading} onSubmitForm={handleSubmit} />
}
