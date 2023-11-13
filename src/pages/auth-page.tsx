import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { AuthModule } from '../modules/auth-module'

export const AuthPage = () => (
  <BaseLayoutWithHeaderFooter position={'center'}>
    <AuthModule />
  </BaseLayoutWithHeaderFooter>
)
