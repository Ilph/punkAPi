import React from 'react'

import { H3, P3 } from '../assets/styles/texts'
import { BaseLayout } from '../components/layout/base-layout'
import { Link } from '../ui/link/link'

import { Routes } from '../constants/routes'

const NotFoundPage = () => (
  <BaseLayout>
    <Link to={`${Routes.HOME}?page=1`}>
      <H3>Page not found</H3>
      <P3>Кликни, чтобы вернуться на главную страницу</P3>
    </Link>
  </BaseLayout>
)

export default NotFoundPage
