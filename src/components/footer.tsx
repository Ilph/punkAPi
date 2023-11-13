import React from 'react'

import styled from 'styled-components'

import { H2 } from '../assets/styles/texts'

import { FOOTER_TEXT } from '../constants/static-text'

export const Footer = () => (
  <FooterStyle>
    <Text $base>{FOOTER_TEXT}</Text>
  </FooterStyle>
)

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  min-height: 60px;
  background: ${({ theme }) => theme.colors.black};
  justify-content: center;
  align-items: center;
`

const Text = styled(H2)`
  width: 60%;
  text-align: center;
`
