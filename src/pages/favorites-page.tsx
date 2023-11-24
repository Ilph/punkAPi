import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { FavoritesContent } from '../components/favorites-content'

const FavoritesPage = () => (
  <BaseLayoutWithHeaderFooter>
    <FavoritesContent />
  </BaseLayoutWithHeaderFooter>
)

export default FavoritesPage
