import React, { memo } from 'react'

import styled from 'styled-components'

import { Button } from '../ui/button/button'
import { Link } from '../ui/link/link'
import { P1 } from '../assets/styles/texts'
import { IconBack } from '../assets/icons/icon-back'

import { Routes } from '../constants/routes'

import IconBeer from '../assets/icons/icon-beer.png'

import type { Props as LinkProps } from '../ui/link/link'

type Props = {
  isAuth: boolean
  onClick: () => void
}

export const Header = memo(({ isAuth, onClick }: Props) => (
  <HeaderStyle>
    <Wrapper>
      <Link to={`${Routes.HOME}?page=1`}>
        <BrandWrapperr>
          <img src={IconBeer} alt='Icon of beer' />
          <P1 $accent>ABOUT.BEER</P1>
        </BrandWrapperr>
      </Link>

      {isAuth ? (
        <Container>
          <HeaderLink to={Routes.HISTORY}>History</HeaderLink>
          <HeaderLink to={Routes.FAVORITES}>Favorites</HeaderLink>
          <Button icon={IconBack} onClick={onClick} />
        </Container>
      ) : (
        <Container>
          <HeaderLink to={Routes.SIGNIN}>Sign in</HeaderLink>
          <HeaderLink to={Routes.SIGNUP}>Sign up</HeaderLink>
        </Container>
      )}
    </Wrapper>
  </HeaderStyle>
))

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
