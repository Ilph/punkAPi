import React, { PropsWithChildren } from 'react'

import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Header } from '../header'
import { Footer } from '../footer'

type Props = {
  position?: string
} & PropsWithChildren

export const BaseLayoutWithHeaderFooter = (props: Props) => {
  const { position, children } = props
  return (
    <Container>
      <Header />
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
