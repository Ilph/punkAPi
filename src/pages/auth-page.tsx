import React from 'react'

import { BaseLayout } from '../components/layout/base-layout'
import { AuthModule } from '../modules/auth-module'

export const AuthPage = () => {
  return (
    <BaseLayout>
      <AuthModule />
    </BaseLayout>
  )
}
