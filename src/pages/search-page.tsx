import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { MainContent } from '../components/main-content'
import { SearchForm } from '../components/search'

export const SearchPage = () => (
  <BaseLayoutWithHeaderFooter>
    <SearchForm
      onSubmitForm={(data) => {
        /* eslint-disable */
        console.log(data)
      }}
    />
    SearchPage
  </BaseLayoutWithHeaderFooter>
)
