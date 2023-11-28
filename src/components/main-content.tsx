import React, { useEffect } from 'react'

import styled from 'styled-components'

import { useSearchParams } from 'react-router-dom'

import { CardForMainPage } from '../ui/card/main-card'
import { Loader } from '../ui/loader/loader'

import { useScroll } from '../hooks/use-scroll'

import { useGetBeersQuery } from '../store/rtk-query.ts/beers-api'
import { useAppSelector } from '../hooks/store'
import { favoritesSelectors } from '../store/favorites/favorites-selectors'
import { P3 } from '../assets/styles/texts'

export const MainContent = () => {
  const pageScroll = useScroll(1)
  const [searchQuery, setSearchPage] = useSearchParams()

  useEffect(() => {
    setSearchPage({ page: String(pageScroll) })
  }, [pageScroll, setSearchPage])

  const queryPage = Number(searchQuery.get('page'))

  const { data: beers = [], isLoading, isSuccess, isError, error } = useGetBeersQuery({ page: queryPage })

  const favorites = useAppSelector(favoritesSelectors.getFavorites)

  const newData = beers.map((item) => {
    const element = favorites.find((element) => element.id === item.id)
    if (element) {
      return { ...item, isFavorite: element.isFavorite }
    }
    return { ...item, isFavorite: false }
  })

  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = (
      <List>
        {newData.length !== 0 ? (
          newData.map((item) => (
            <CardForMainPage
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              description={item.description}
              abv={item.abv}
              ibu={item.ibu ?? ''}
              isFavorite={item.isFavorite}
            />
          ))
        ) : (
          <P3>The beer is out</P3>
        )}
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
