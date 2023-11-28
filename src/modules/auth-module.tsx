import React from 'react'

import { useSearchParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import { FormWrapper } from '../components/form-wrapper'
import { H3 } from '../assets/styles/texts'
import { AuthForm } from '../components/auth-form'

import { Routes } from '../constants/routes'

import { useAppSelector, useAppDispatch } from '../hooks/store'
import { authSelectors } from '../store/auth/auth-selectors'

import { logIn } from '../store/auth/auth-actions'

import type { SignIn } from '../models/signin-model'

export const AuthModule = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchQuery] = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const signInError = useAppSelector(authSelectors.getSignInError)

  const handleSubmit = (data: SignIn) => {
    dispatch(logIn(data))
    if (!signInError) {
      navigate(Routes.HOME)
      setSearchQuery({ page: '1' })
    }
  }

  return (
    <FormWrapper>
      <H3 $weight='700'>Sign in</H3>
      <AuthForm onSubmitForm={handleSubmit} />
    </FormWrapper>
  )
}
