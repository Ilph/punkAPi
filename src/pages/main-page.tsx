import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { MainContent } from '../components/main-content'
import { SearchModule } from '../modules/search-module'

const MainPage = () => (
  <BaseLayoutWithHeaderFooter>
    <SearchModule />
    <MainContent />
  </BaseLayoutWithHeaderFooter>
)

export default MainPage
