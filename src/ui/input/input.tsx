import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

import styled from 'styled-components'

type Props = {
  errorOn?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>): React.JSX.Element => {
  const { errorOn, ...rest } = props

  return (
    <Wrapper>
      <InputStyled $errorOn={errorOn} ref={ref} {...rest} />
    </Wrapper>
  )
})

const Wrapper = styled.div`
  max-width: 315px;
  width: 100%;
`

const InputStyled = styled.input<{ $errorOn?: boolean }>`
  width: 100%;
  height: 34px;
  background: ${(props) => props.theme.colors.backgroundInput};
  border-radius: ${(props) => props.theme.borders.primary};
  border: 1px solid ${(props) => (props.$errorOn ? props.theme.colors.error : props.theme.colors.white)};
  color: ${(props) => (props.$errorOn ? props.theme.text.error : props.theme.text.textInvert)};
  padding-left: 10px;
  margin-bottom: 18px;

  &::placeholder {
    color: ${(props) => props.theme.text.placeholder};
  }

  &:hover,
  :focus {
    ::placeholder {
      color: ${(props) => props.theme.text.placeholder};
    }
  }
`
