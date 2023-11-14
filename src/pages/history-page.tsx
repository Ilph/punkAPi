import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { SearchForm } from '../components/search'

//TODO пока как заглушка
export const HistoryPage = () => (
  <BaseLayoutWithHeaderFooter>
    <SearchForm
      onSubmitForm={(data) => {
        /* eslint-disable */
        console.log(data)
      }}
    />
  </BaseLayoutWithHeaderFooter>
)
