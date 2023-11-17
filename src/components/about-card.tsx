import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import styled from 'styled-components'

import { SingelCard } from '../ui/card/card-for-card-page'

import { useAppDispatch, useAppSelector } from '../hooks/store'
import { beerSelectors } from '../store/beer/beer-selectors'
import { getBeerById } from '../store/beer/beer-actions'

export const AboutCard = () => {
  const { cardId } = useParams()
  const dispatch = useAppDispatch()
  const currentBeer = useAppSelector(beerSelectors.getCurrentBeer)

  useEffect(() => {
    dispatch(getBeerById(Number(cardId)))
  }, [dispatch, cardId])

  return (
    <Container>
      {currentBeer ? (
        <SingelCard
          title={currentBeer.name}
          imageUrl={currentBeer.image_url}
          firstBrewed={currentBeer.first_brewed}
          description={currentBeer.description}
          brewersTips={currentBeer.brewers_tips}
          abv={currentBeer.abv}
          ibu={currentBeer.ibu}
          srm={currentBeer.srm}
          ph={currentBeer.ph}
        />
      ) : (
        <p>No card of beer</p>
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 60%;
  padding-top: 20px;
`
