import React from 'react'
import { useNavigate } from 'react-router-dom'

import { SearchForm } from '../components/search'

import { useDebounce } from '../hooks/use-debounce'
import { useSearch } from '../hooks/context'

import { useDoSearchQuery } from '../store/rtk-query.ts/search-api'

import { Routes } from '../constants/routes'

export const SearchModule = () => {
  const searchValue = useSearch()
  const navigate = useNavigate()

  const debouncedSearchValue = useDebounce(searchValue.searchValue, 2000)

  const { data: beers = [], isLoading } = useDoSearchQuery(
    { beerName: debouncedSearchValue },
    {
      skip: !Boolean(debouncedSearchValue)
    }
  )

  const handleSubmit = () => {
    navigate(Routes.SEARCH)
  }

  return <SearchForm beers={beers} isLoading={isLoading} onSubmitForm={handleSubmit} />
}
