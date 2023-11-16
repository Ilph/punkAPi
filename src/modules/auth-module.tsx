import React from 'react'

import { useNavigate } from 'react-router-dom'

import { FormWrapper } from '../components/form-wrapper'
import { H3 } from '../assets/styles/texts'
import { AuthForm } from '../components/auth-form'

import { useAuthDispatch } from '../hooks/context'
import { signInAction } from '../context/auth-actions'

import { Routes } from '../constants/routes'

import type { SignIn } from '../models/signin-model'

export const AuthModule = () => {
  const navigate = useNavigate()
  const dispatch = useAuthDispatch()

  const handleSubmit = (data: SignIn) => {
    dispatch(signInAction(data))
    navigate(Routes.HOME)
  }

  return (
    <FormWrapper>
      <H3 $weight='700'>Sign in</H3>
      <AuthForm onSubmitForm={handleSubmit} />
    </FormWrapper>
  )
}
