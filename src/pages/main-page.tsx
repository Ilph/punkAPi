import React from 'react'

import { BaseLayoutWithHeaderFooter } from '../components/layout/base-layout-with-header-footer'
import { MainContent } from '../components/main-content'
import { SearchForm } from '../components/search'

export const MainPage = () => {
  return (
    <BaseLayoutWithHeaderFooter>
      <SearchForm
        onSubmitForm={(data) => {
          /* eslint-disable */
          // TODO Временно вывожу в консоль данные формы
          console.log(data)
        }}
      />
      <MainContent />
    </BaseLayoutWithHeaderFooter>
  )
}
