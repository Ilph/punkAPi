import React from 'react'

import styled from 'styled-components'

import { Link } from '../ui/link/link'
import { P1 } from '../assets/styles/texts'

import { Routes } from '../constants/routes'

import type { modifyedBeer } from '../models/beer-model'

type Props = {
  beers: modifyedBeer[]
  searchValue: string
  isLoading: boolean
}

export const Suggest = ({ beers, searchValue, isLoading }: Props) => (
  <>
    {searchValue && (
      <SearchWrapper>
        {isLoading && <p>Loading....</p>}
        {beers.map((item) => (
          <Link to={`${Routes.CARD}/${item.id}`} key={item.id}>
            <SearchItem>
              <P1>{item.name}</P1>
            </SearchItem>
          </Link>
        ))}
      </SearchWrapper>
    )}
  </>
)

const SearchWrapper = styled.ul`
  position: absolute;
  top: 110px;
  width: 315px;
  min-height: 20px;
  max-height: 300px;
  overflow: overlay;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borders.primary};
`

const SearchItem = styled.li`
  padding: 10px 0 5px 10px;
`
