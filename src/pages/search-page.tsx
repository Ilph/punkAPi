import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { SearchModule } from '../modules/search-module'
import { SearchContent } from '../components/search-content'

export const SearchPage = () => (
  <BaseLayoutWithHeaderFooter>
    <SearchModule />
    <SearchContent />
  </BaseLayoutWithHeaderFooter>
)

export default SearchPage
