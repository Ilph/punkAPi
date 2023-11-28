import React, { useEffect } from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { HistoryContent } from '../components/history-content'

import { useAppDispatch } from '../hooks/store'
import { getHistorys } from '../store/historys/history-actions'

export const HistoryPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHistorys())
  })

  return (
    <BaseLayoutWithHeaderFooter>
      <HistoryContent />
    </BaseLayoutWithHeaderFooter>
  )
}

export default HistoryPage
