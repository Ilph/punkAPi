import React from 'react'

import styled from 'styled-components'

import { useSearchParams } from 'react-router-dom'

import { P3 } from '../assets/styles/texts'

import { useDoSearchQuery } from '../store/rtk-query.ts/search-api'

import { CardForMainPage } from '../ui/card/card-for-main-page'

export const SearchContent = () => {
  const [searchQuery] = useSearchParams()
  const query = searchQuery.get('beer_name')

  const { data: beers = [] } = useDoSearchQuery(
    { beerName: query! },
    {
      skip: !Boolean(query)
    }
  )

  return (
    <Container>
      <List>
        {beers.length !== 0 ? (
          beers.map((item) => (
            <CardForMainPage
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              description={item.description}
              abv={item.abv}
              ibu={item.ibu ?? ''}
            />
          ))
        ) : (
          <P3>Ничего не найдено</P3>
        )}
      </List>
    </Container>
  )
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
