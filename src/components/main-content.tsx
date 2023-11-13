import React from 'react'

import styled from 'styled-components'

import { CardForMainPage } from '../ui/card/card-for-main-page'

import { data } from '../data/mockData'

export const MainContent = () => (
  <Container>
    <List>
      {data.map((item) => (
        <CardForMainPage
          key={item.id}
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

const Container = styled.div`
  width: 60%;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0 80px 0;
`
