import React from 'react'

import styled from 'styled-components'

import { CardForMainPage } from '../ui/card/card-for-main-page'
import { Loader } from '../ui/loader/loader'

import { useGetBeersQuery } from '../store/rtk-query.ts/beers-api'

export const MainContent = () => {
  const { data: beers = [], isLoading, isSuccess, isError, error } = useGetBeersQuery({ page: 1 })

  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = (
      <List>
        {beers.map((item) => (
          <CardForMainPage
            key={item.id}
            id={item.id}
            title={item.name}
            imageUrl={item.imageUrl}
            description={item.description}
            abv={item.abv}
            ibu={item.ibu ?? ''}
          />
        ))}
      </List>
    )
  } else if (isError) {
    throw new Error(error.toString())
  }

  return <Container>{content}</Container>
}

const Container = styled.div`
  width: 60%;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0 80px 0;
`
