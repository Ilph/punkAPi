import React, { useEffect } from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { FavoritesContent } from '../components/favorites-content'

import { useAppDispatch } from '../hooks/store'
import { getFavouritesOfCurrentUser } from '../store/favorites/favorites-slices'

const FavoritesPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavouritesOfCurrentUser())
  })

  return (
    <BaseLayoutWithHeaderFooter>
      <FavoritesContent />
    </BaseLayoutWithHeaderFooter>
  )
}

export default FavoritesPage
