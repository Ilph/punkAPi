import React from 'react'

import styled from 'styled-components'

import { Link } from '../ui/link/link'
import { P1, P3 } from '../assets/styles/texts'

import { Routes } from '../constants/routes'

import type { modifyedBeer } from '../models/beer-model'

type Props = {
  beers: modifyedBeer[]
  searchValue: string
  debounceValue: string
  isLoading: boolean
  focus: boolean
}

export const Suggest = (props: Props) => {
  const { beers, searchValue, debounceValue, isLoading, focus } = props
  return (
    <>
      {focus && searchValue && debounceValue && (
        <SearchWrapper>
          {isLoading ? (
            <Wrap>
              <P3>Loading....</P3>
            </Wrap>
          ) : beers.length === 0 ? (
            <Wrap>
              <P3>Ничего не найдено</P3>
            </Wrap>
          ) : (
            beers.map((item) => (
              <Link to={`${Routes.CARD}/${item.id}`} key={item.id}>
                <SearchItem>
                  <P1>{item.name}</P1>
                </SearchItem>
              </Link>
            ))
          )}
        </SearchWrapper>
      )}
    </>
  )
}

const SearchWrapper = styled.ul`
  position: absolute;
  top: 110px;
  width: 315px;
  min-height: 20px;
  max-height: 300px;
  overflow: overlay;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borders.primary};
  z-index: 10;
`

const SearchItem = styled.li`
  padding: 10px 0 5px 10px;
`

const Wrap = styled.div`
  text-align: center;
`
