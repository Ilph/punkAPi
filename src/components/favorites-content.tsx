import React from 'react'

import styled from 'styled-components'

import { useAppSelector } from '../hooks/store'
import { favoritesSelectors } from '../store/favorites/favorites-selectors'

import { CardForMainPage } from '../ui/card/card-for-main-page'

export const FavoritesContent = () => {
  const favoritesBeers = useAppSelector(favoritesSelectors.getFavorites)
  const isFavorites = useAppSelector(favoritesSelectors.getIsFavourites)

  return (
    <Container>
      <List>
        {favoritesBeers.map((item) => (
          <CardForMainPage
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            description={item.description}
            abv={item.abv}
            ibu={item.ibu ?? ''}
            isFavorite={isFavorites}
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
