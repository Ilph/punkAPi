import React, { useEffect } from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { HistoryContent } from '../components/history-content'

import { useAppDispatch } from '../hooks/store'
import { getHistorysOfCurrentUser } from '../store/historys/historys-slices'

export const HistoryPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHistorysOfCurrentUser())
  })

  return (
    <BaseLayoutWithHeaderFooter>
      <HistoryContent />
    </BaseLayoutWithHeaderFooter>
  )
}

export default HistoryPage
