import React, { PropsWithChildren } from 'react'

import styled from 'styled-components'

export const BaseLayout = (props: PropsWithChildren) => {
  const { children } = props
  return <Root>{children}</Root>
}

const Root = styled.main`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`
