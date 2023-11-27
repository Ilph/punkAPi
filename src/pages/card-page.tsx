import React, { useEffect } from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { SearchModule } from '../modules/search-module'
import { AboutCard } from '../components/about-card'

import { useAppDispatch } from '../hooks/store'
import { getFavouritesOfCurrentUser } from '../store/favorites/favorites-slices'

const CardPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavouritesOfCurrentUser())
  })

  return (
    <BaseLayoutWithHeaderFooter>
      <SearchModule />
      <AboutCard />
    </BaseLayoutWithHeaderFooter>
  )
}

export default CardPage
