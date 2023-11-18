import React, { useEffect } from 'react'

import styled from 'styled-components'

import { CardForMainPage } from '../ui/card/card-for-main-page'

import { useAppDispatch, useAppSelector } from '../hooks/store'
import { beerSelectors } from '../store/beer/beer-selectors'
import { getBeers } from '../store/beer/beer-actions'

export const MainContent = () => {
  const dispatch = useAppDispatch()
  const beers = useAppSelector(beerSelectors.getBeers)
  const beersStatus = useAppSelector(beerSelectors.getBeersStatus)

  useEffect(() => {
    if (beersStatus === 'initial') {
      dispatch(getBeers())
    }
  }, [dispatch, beersStatus])

  return (
    <Container>
      <List>
        {beers.map((item) => (
          <CardForMainPage
            key={item.id}
            id={item.id}
            title={item.name}
            imageUrl={item.image_url}
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
