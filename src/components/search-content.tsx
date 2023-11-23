import React from 'react'

import styled from 'styled-components'

import { useSearch } from '../hooks/context'
import { useDebounce } from '../hooks/use-debounce'

import { useDoSearchQuery } from '../store/rtk-query.ts/search-api'

import { CardForMainPage } from '../ui/card/card-for-main-page'

export const SearchContent = () => {
  const searchValue = useSearch()

  const debouncedSearchValue = useDebounce(searchValue.searchValue, 2000)

  const { data: beers = [] } = useDoSearchQuery(
    { beerName: debouncedSearchValue },
    {
      skip: !Boolean(debouncedSearchValue)
    }
  )

  return (
    <Container>
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
