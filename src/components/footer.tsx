import React from 'react'

import styled from 'styled-components'

import { H2 } from '../assets/styles/texts'

import { FOOTER_TEXT } from '../constants/static-text'

export const Footer = () => {
  return (
    <FooterStyle>
      <Text $base>{FOOTER_TEXT}</Text>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  display: flex;
  min-height: 55px;
  background: ${({ theme }) => theme.colors.black};
  justify-content: center;
  align-items: center;
`

const Text = styled(H2)`
  width: 60%;
  text-align: center;
`
