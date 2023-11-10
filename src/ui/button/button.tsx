import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactElement } from 'react'

import styled from 'styled-components'

type Props = {
  icon?: ReactElement
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef((props: Props, ref: ForwardedRef<HTMLButtonElement>) => {
  const { icon, children, ...rest } = props

  return (
    <ButtonStyled ref={ref} {...rest}>
      {icon ? icon : children}
    </ButtonStyled>
  )
})

const ButtonStyled = styled.button`
  max-width: 100px;
  width: 100%;
  height: 40px;
  transition: 0.3s;
  background-color: ${(props) => props.theme.colors.backgroundButton};
  border-radius: ${(props) => props.theme.borders.primary};
  border: none;
  color: ${(props) => props.theme.text.everBlack};

  &:disabled {
    opacity: 0.6;
  }

  &:not([disabled]):hover,
  &:not([disabled]):focus {
    opacity: 0.6;
    transition: 0.3s;
    cursor: pointer;
  }
`
