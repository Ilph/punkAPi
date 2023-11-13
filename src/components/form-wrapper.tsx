import React, { PropsWithChildren } from 'react'

import styled from 'styled-components'

type Props = {
  padding?: number | string
} & PropsWithChildren

export const FormWrapper = (props: Props) => {
  const { children, padding } = props

  return <Wrapper $padding={padding}>{children}</Wrapper>
}

const Wrapper = styled.div<{ $padding?: number | string }>`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: ${({ theme }) => theme.text.textBase};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.forFormBackground};
  padding: ${({ $padding = '15px' }) => (typeof $padding === 'string' ? $padding : `${$padding}px`)};
`
