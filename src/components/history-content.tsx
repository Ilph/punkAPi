import React from 'react'

import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import { useSearchParams } from 'react-router-dom'

import { P3 } from '../assets/styles/texts'
import { Button } from '../ui/button/button'
import { IconDelete } from '../assets/icons/icon-delete'

import { useAppSelector, useAppDispatch } from '../hooks/store'
import { historySelectors } from '../store/historys/historys-selectors'
import { deleteHistory } from '../store/historys/history-actions'

import { useSearchDispatch } from '../hooks/context'

import { BASE_API_CONFIG } from '../constants/base-api-config'
import { Routes } from '../constants/routes'

export const HistoryContent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchQuery] = useSearchParams()
  const dispatchContext = useSearchDispatch()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const historys = useAppSelector(historySelectors.getHistorys)

  const handleClick = (query: string) => () => {
    navigate(Routes.SEARCH)
    setSearchQuery({ beer_name: query })
    dispatchContext({ type: 'addSearchValue', searchValue: query })
  }

  const handleDelete = (query: string) => () => {
    dispatch(deleteHistory(query))
  }

  return (
    <Container>
      <List>
        {historys.length !== 0 ? (
          historys.map((item, index) => (
            <ListItem key={index}>
              <LinkButton onClick={handleClick(item)}>
                {BASE_API_CONFIG.url}/beers?beer_name={item}
              </LinkButton>
              <DeleteButton icon={IconDelete} size={'small'} onClick={handleDelete(item)} />
            </ListItem>
          ))
        ) : (
          <P3>Список истории поиска пуст</P3>
        )}
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
  align-items: center;
  gap: 10px;
  padding: 20px 0 80px 0;
`

const ListItem = styled.li`
  width: 50%;
  display: flex;
  justify-content: space-between;
`

const LinkButton = styled.button`
  border: none;
  border-bottom: 1px solid #0000ff;
  color: blue;
`
const DeleteButton = styled(Button)`
  background-color: transparent;
`
