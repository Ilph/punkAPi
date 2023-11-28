import React, { useEffect } from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { FavoritesContent } from '../components/favorites-content'

import { useAppDispatch } from '../hooks/store'
import { getFavorites } from '../store/favorites/favorite-actions'

const FavoritesPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavorites())
  })

  return (
    <BaseLayoutWithHeaderFooter>
      <FavoritesContent />
    </BaseLayoutWithHeaderFooter>
  )
}

export default FavoritesPage
