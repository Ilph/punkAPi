import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { MainContent } from '../components/main-content'
import { SearchForm } from '../components/search'

const MainPage = () => (
  <BaseLayoutWithHeaderFooter>
    <SearchForm
      onSubmitForm={(data) => {
        /* eslint-disable */
        console.log(data)
      }}
    />
    <MainContent />
  </BaseLayoutWithHeaderFooter>
)

export default MainPage
