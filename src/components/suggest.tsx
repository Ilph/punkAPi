import React, { useState } from 'react'

import { useWatch, Control } from 'react-hook-form'

import styled from 'styled-components'

import { Link } from '../ui/link/link'
import { H3 } from '../assets/styles/texts'

import { Routes } from '../constants/routes'

import type { Search } from '../models/search-model'

type Props = {
  id: number
  name: string
}

// TODO Функционал скорее всего придется выносить
const getSuggestions = (inputValue: string, data: Props[]): Props[] => {
  const suggestions: Props[] =
    inputValue.length === 0 ? [] : data.filter((item: Props) => item.name.toLowerCase().includes(inputValue))
  return suggestions
}

export const Suggest = ({ control, names }: { control: Control<Search>; names: Props[] }) => {
  const [searchResults, setSearchResults] = useState<Props[]>([])

  const searchName = useWatch({
    control,
    name: 'search',
    defaultValue: ''
  })

  const suggestions: Props[] = getSuggestions(searchName, names)
  setSearchResults(suggestions)

  return (
    <SearchWrapper>
      {searchResults.map((item) => (
        <Link to={Routes.SEARCH} key={item.id}>
          <SearchItem>
            <H3>{item.name}</H3>
          </SearchItem>
        </Link>
      ))}
    </SearchWrapper>
  )
}

const SearchWrapper = styled.ul`
  position: absolute;
  top: 110px;
  width: 315px;
  background: ${(props) => props.theme.colors.backgroundInput};
  border-radius: ${(props) => props.theme.borders.primary};
`

const SearchItem = styled.li`
  padding: 10px 0 5px 10px;
`
