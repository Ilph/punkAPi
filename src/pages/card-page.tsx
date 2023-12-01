import React, { useEffect } from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { SearchModule } from '../modules/search-module'
import { AboutCard } from '../components/about-card'

import { useAppDispatch } from '../hooks/store'
import { getFavorites } from '../store/favorites/favorite-actions'

const CardPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavorites())
  }, [dispatch])

  return (
    <BaseLayoutWithHeaderFooter>
      <SearchModule />
      <AboutCard />
    </BaseLayoutWithHeaderFooter>
  )
}

export default CardPage
