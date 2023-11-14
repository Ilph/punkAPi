import React from 'react'

import styled from 'styled-components'

import { SingelCard } from '../ui/card/card-for-card-page'

const firstElement = {
  title: 'Buzz',
  imageUrl: 'https://images.punkapi.com/v2/keg.png',
  firstBrewed: '09/2007',
  description: 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
  brewersTips:
    'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
  abv: 4.5,
  ibu: 60,
  srm: 10,
  ph: 4.4
}

export const AboutCard = () => (
  <Container>
    <SingelCard
      title={firstElement.title}
      imageUrl={firstElement.imageUrl}
      firstBrewed={firstElement.firstBrewed}
      description={firstElement.description}
      brewersTips={firstElement.brewersTips}
      abv={firstElement.abv}
      ibu={firstElement.ibu}
      srm={firstElement.srm}
      ph={firstElement.ph}
    />
  </Container>
)

const Container = styled.div`
  width: 60%;
  padding-top: 20px;
`
