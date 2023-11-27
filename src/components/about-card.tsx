import React from 'react'

import { useParams } from 'react-router-dom'

import styled from 'styled-components'

import { useGetBeerByIdQuery } from '../store/rtk-query.ts/beers-api'

import { useAppSelector } from '../hooks/store'
import { favoritesSelectors } from '../store/favorites/favorites-selectors'

import { SingelCard } from '../ui/card/card-for-card-page'
import { Loader } from '../ui/loader/loader'

export const AboutCard = () => {
  const { cardId } = useParams()
  const { data: currentBeer, isFetching, isSuccess, isError, error } = useGetBeerByIdQuery(Number(cardId))
  const favorites = useAppSelector(favoritesSelectors.getFavorites)

  let content

  if (isFetching) {
    content = <Loader />
  } else if (isSuccess) {
    let modifyCurrentBeer = { ...currentBeer, isFavorite: false }
    favorites.forEach((item) => {
      if (item.id === currentBeer.id) {
        modifyCurrentBeer = { ...currentBeer, isFavorite: item.isFavorite }
      }
    })

    content = (
      <SingelCard
        id={modifyCurrentBeer.id}
        name={modifyCurrentBeer.name}
        imageUrl={modifyCurrentBeer.imageUrl}
        firstBrewed={modifyCurrentBeer.firstBrewed}
        description={modifyCurrentBeer.description}
        brewersTips={modifyCurrentBeer.brewersTips}
        abv={modifyCurrentBeer.abv}
        ibu={modifyCurrentBeer.ibu}
        srm={modifyCurrentBeer.srm}
        ph={modifyCurrentBeer.ph}
        isFavorite={modifyCurrentBeer.isFavorite}
      />
    )
  } else if (isError) {
    throw new Error(error.toString())
  }

  return <Container>{content}</Container>
}

const Container = styled.div`
  width: 60%;
  padding-top: 20px;
`
