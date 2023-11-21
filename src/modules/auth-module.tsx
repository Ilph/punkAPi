import React from 'react'

import { useNavigate } from 'react-router-dom'

import { FormWrapper } from '../components/form-wrapper'
import { H3 } from '../assets/styles/texts'
import { AuthForm } from '../components/auth-form'

import { Routes } from '../constants/routes'

import { useAppSelector, useAppDispatch } from '../hooks/store'
import { authSelectors } from '../store/auth/auth-selectors'

import { signIn } from '../store/auth/auth-slices'

import type { SignIn } from '../models/signin-model'

export const AuthModule = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const signInError = useAppSelector(authSelectors.getSignInError)

  const handleSubmit = (data: SignIn) => {
    dispatch(signIn(data))
    if (!signInError) {
      navigate(Routes.HOME)
    }
  }

  return (
    <FormWrapper>
      <H3 $weight='700'>Sign in</H3>
      <AuthForm onSubmitForm={handleSubmit} />
    </FormWrapper>
  )
}
