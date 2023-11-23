import React from 'react'

import { useParams } from 'react-router-dom'

import styled from 'styled-components'

import { useGetBeerByIdQuery } from '../store/rtk-query.ts/beers-api'

import { SingelCard } from '../ui/card/card-for-card-page'
import { Loader } from '../ui/loader/loader'

export const AboutCard = () => {
  const { cardId } = useParams()
  const { data: currentBeer, isFetching, isSuccess, isError, error } = useGetBeerByIdQuery(Number(cardId))

  let content

  if (isFetching) {
    content = <Loader />
  } else if (isSuccess) {
    content = (
      <SingelCard
        title={currentBeer.name}
        imageUrl={currentBeer.imageUrl}
        firstBrewed={currentBeer.firstBrewed}
        description={currentBeer.description}
        brewersTips={currentBeer.brewersTips}
        abv={currentBeer.abv}
        ibu={currentBeer.ibu}
        srm={currentBeer.srm}
        ph={currentBeer.ph}
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
