import React, { useEffect } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import styled from 'styled-components'

import { Input } from '../ui/input/input'
import { Button } from '../ui/button/button'
import { Link } from '../ui/link/link'
import { P4 } from '../assets/styles/texts'

import { useAuth } from '../hooks/context'

import { Routes } from '../constants/routes'

import { authSchema } from '../utils/validation/auth-schema'

import type { SignIn } from '../models/signin-model'

const defaultAuthFormValues = {
  email: '',
  password: ''
}

type Props = {
  onSubmitForm: (data: SignIn) => void
}

export const AuthForm = (props: Props) => {
  const auth = useAuth()
  const { onSubmitForm } = props

  const {
    register,
    reset,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting, isDirty, isValid }
  } = useForm<SignIn>({
    defaultValues: defaultAuthFormValues,
    mode: 'onBlur',
    criteriaMode: 'all',
    resolver: yupResolver(authSchema)
  })

  useEffect(() => {
    setFocus('email')
  }, [setFocus])

  const onSubmit: SubmitHandler<SignIn> = (data) => {
    onSubmitForm(data)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input placeholder='Email' {...register('email')} errorOn={!!errors.email} />
        {errors.email && <Error>{errors.email.message}</Error>}

        <Input placeholder='Password' {...register('password')} errorOn={!!errors.password} />
        {errors.password && <Error $topSize={124}>{errors.password.message}</Error>}
      </InputContainer>

      <ButtonContainer>
        <Button type='submit' disabled={!isDirty || !isValid || isSubmitting}>
          Log in
        </Button>
        <Link to={Routes.SIGNUP}>Sign up</Link>
        {auth.signInError ?? <Error $topSize={180}>{auth.signInError}</Error>}
      </ButtonContainer>
    </Form>
  )
}

const Form = styled.form`
  width: 100%;
  max-width: 380px;
  min-width: 340px;
  height: 100%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borders.primary};
  padding: 20px 0;
`

const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 246px;
  padding-top: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  position: relative;
  padding-top: 35px;
  align-items: center;

  :last-child {
    text-align: center;
  }
`

const Error = styled(P4)<{ $topSize: number }>`
  color: ${(props) => props.theme.text.error};
  position: absolute;
  top: ${({ $topSize = '57px' }) => (typeof $topSize === 'string' ? $topSize : `${$topSize}px`)};
  left: 12px;
`
