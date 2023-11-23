import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactElement } from 'react'

import styled from 'styled-components'

type Props = {
  icon?: ReactElement
  size?: 'small' | 'middle' | 'big'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef((props: Props, ref: ForwardedRef<HTMLButtonElement>) => {
  const { icon, children, ...rest } = props

  return (
    <ButtonStyled ref={ref} {...rest}>
      {icon ? icon : children}
    </ButtonStyled>
  )
})

const ButtonStyled = styled.button<{ size?: string }>`
  max-width: ${(props) => (props.size === 'small' ? '40px' : props.size === 'middle' ? '80px' : '100px')};
  width: 100%;
  height: ${(props) => (props.size === 'small' ? '40px' : props.size === 'middle' ? '34px' : '40px')};
  transition: 0.3s;
  background-color: ${(props) => props.theme.colors.backgroundButton};
  border-radius: ${(props) => props.theme.borders.primary};
  border: none;
  color: ${(props) => props.theme.text.everBlack};

  &: active {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.6;
  }

  &:not([disabled]):hover {
    opacity: 0.6;
    transition: 0.3s;
    cursor: pointer;
  }
`
