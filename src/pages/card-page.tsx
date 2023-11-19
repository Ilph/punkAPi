import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { SearchForm } from '../components/search'
import { AboutCard } from '../components/about-card'

const CardPage = () => (
  <BaseLayoutWithHeaderFooter>
    <SearchForm
      onSubmitForm={(data) => {
        /* eslint-disable */
        // TODO Временно вывожу в консоль данные формы
        console.log(data)
      }}
    />
    <AboutCard />
  </BaseLayoutWithHeaderFooter>
)

export default CardPage
