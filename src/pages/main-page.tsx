import React, { useEffect } from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { MainContent } from '../components/main-content'
import { SearchModule } from '../modules/search-module'

import { useAppDispatch } from '../hooks/store'
import { getFavouritesOfCurrentUser } from '../store/favorites/favorites-slices'

const MainPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavouritesOfCurrentUser())
  })

  return (
    <BaseLayoutWithHeaderFooter>
      <SearchModule />
      <MainContent />
    </BaseLayoutWithHeaderFooter>
  )
}

export default MainPage
