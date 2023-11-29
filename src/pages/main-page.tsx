import React, { useEffect } from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { MainContent } from '../components/main-content'
import { SearchModule } from '../modules/search-module'
import { Spiner } from '../ui/loader/spiner'

import { useAppDispatch, useAppSelector } from '../hooks/store'
import { getFavorites } from '../store/favorites/favorite-actions'
import { authSelectors } from '../store/auth/auth-selectors'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const userStatus = useAppSelector(authSelectors.getUserStatus)

  useEffect(() => {
    dispatch(getFavorites())
  })

  if (userStatus === 'initial' || userStatus === 'pending') {
    return <Spiner />
  }

  return (
    <BaseLayoutWithHeaderFooter>
      <SearchModule />
      <MainContent />
    </BaseLayoutWithHeaderFooter>
  )
}

export default MainPage
