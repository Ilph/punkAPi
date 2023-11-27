import React from 'react'

import styled from 'styled-components'

import { P3 } from '../assets/styles/texts'

import { useAppSelector } from '../hooks/store'
import { favoritesSelectors } from '../store/favorites/favorites-selectors'

import { CardForMainPage } from '../ui/card/card-for-main-page'

export const FavoritesContent = () => {
  const favoritesBeers = useAppSelector(favoritesSelectors.getFavorites)
  const isFavorite = useAppSelector(favoritesSelectors.getIsFavourites)

  return (
    <Container>
      <List>
        {favoritesBeers.length !== 0 ? (
          favoritesBeers.map((item) => (
            <CardForMainPage
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              description={item.description}
              abv={item.abv}
              ibu={item.ibu ?? ''}
              isFavorite={isFavorite}
            />
          ))
        ) : (
          <P3>Список избранных пуст</P3>
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
