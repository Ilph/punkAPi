import React, { PropsWithChildren } from 'react'

import styled from 'styled-components'

import { Header } from '../header'
import { Footer } from '../footer'

export const BaseLayoutWithHeaderFooter = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <Container>
      <Header />
      <Root>{children}</Root>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Root = styled.main`
  background: ${({ theme }) => theme.colors.primary};
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
