import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { SearchModule } from '../modules/search-module'
import { AboutCard } from '../components/about-card'

const CardPage = () => (
  <BaseLayoutWithHeaderFooter>
    <SearchModule />
    <AboutCard />
  </BaseLayoutWithHeaderFooter>
)

export default CardPage
