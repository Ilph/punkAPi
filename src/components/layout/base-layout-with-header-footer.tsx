import React, { PropsWithChildren } from 'react'

import { useNavigate } from 'react-router-dom'

import { useSearchParams } from 'react-router-dom'

import PropTypes from 'prop-types'

import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from '../../hooks/store'
import { authSelectors } from '../../store/auth/auth-selectors'

import { exit } from '../../store/auth/auth-actions'

import { Routes } from '../../constants/routes'

import { Header } from '../header'
import { Footer } from '../footer'

type Props = {
  position?: string
} & PropsWithChildren

export const BaseLayoutWithHeaderFooter = (props: Props) => {
  const isAuth = useAppSelector(authSelectors.getIsAuth)
  const { position, children } = props
  const [searchQuery, setSearchPage] = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const queryPage = searchQuery.get('page')

  const handleClick = (path: string) => () => {
    dispatch(exit())
    navigate(path)
    if (queryPage !== null) {
      setSearchPage({ page: queryPage })
    } else {
      setSearchPage({ page: '1' })
    }
  }

  return (
    <Container>
      <Header isAuth={isAuth} onClick={handleClick(Routes.HOME)} />
      <Root $center={position}>{children}</Root>
      <Footer />
    </Container>
  )
}

BaseLayoutWithHeaderFooter.propTypes = {
  position: PropTypes.string
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Root = styled.main<{ $center?: string }>`
  background: ${({ theme }) => theme.colors.primary};
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$center || 'flex-start'};
  align-items: center;
  width: 100%;
`
