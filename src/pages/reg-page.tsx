import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { RegModule } from '../modules/reg-module'

export const RegPage = () => {
  return (
    <BaseLayoutWithHeaderFooter>
      <RegModule />
    </BaseLayoutWithHeaderFooter>
  )
}
