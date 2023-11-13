import React from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import { Button } from '../ui/button/button'
import { Link } from '../ui/link/link'
import { P1 } from '../assets/styles/texts'
import { IconBack } from '../assets/icons/icon-back'

import { Routes } from '../constants/routes'

import IconBeer from '../assets/icons/icon-beer.png'

import type { Props as LinkProps } from '../ui/link/link'

export const Header = () => {
  const navigate = useNavigate()
  // TODO Пока только для верстки. Нужно править.
  const isAuth = true

  const handleClick = (path: string) => () => {
    // TODO Разлогиниться
    navigate(path)
  }

  return (
    <HeaderStyle>
      <Wrapper>
        <Link to={Routes.HOME}>
          <BrandWrapperr>
            <img src={IconBeer} alt='Icon of beer' />
            <P1 $accent>ABOUT.BEER</P1>
          </BrandWrapperr>
        </Link>

        {isAuth ? (
          <Container>
            <HeaderLink to={Routes.HISTORY}>History</HeaderLink>
            <HeaderLink to={Routes.FAVORITES}>Favorites</HeaderLink>
            <Button icon={IconBack} onClick={handleClick(Routes.HOME)} />
          </Container>
        ) : (
          <Container>
            <HeaderLink to={Routes.SIGNIN}>Sign in</HeaderLink>
            <HeaderLink to={Routes.SIGNUP}>Sign up</HeaderLink>
          </Container>
        )}
      </Wrapper>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
  min-height: 60px;
  width: 100%;
`

const Wrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BrandWrapperr = styled.div`
  display: flex;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`

const HeaderLink = styled(Link)<LinkProps>`
  color: ${(props) => props.theme.text.textBaseWhite};
  font-size: ${(props) => props.theme.vars.fontSize.m};
`
