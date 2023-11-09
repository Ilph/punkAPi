import React from 'react'

import styled from 'styled-components'

import { Link as ReactLink, LinkProps } from 'react-router-dom'

type Props = LinkProps

export const Link = (props: Props) => {
  const { children } = props
  return (
    <div>
      <LinkStyled {...props}>{children}</LinkStyled>
    </div>
  )
}

const LinkStyled = styled(ReactLink)`
  &:link,
  &:visited {
    text-decoration: none;
    position: relative;
  }
`
