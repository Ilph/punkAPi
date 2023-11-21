import React from 'react'

import { useNavigate } from 'react-router-dom'

import { FormWrapper } from '../components/form-wrapper'
import { H3 } from '../assets/styles/texts'
import { RegForm } from '../components/reg-form'

import { signUp } from '../store/auth/auth-slices'

import { Routes } from '../constants/routes'

import { useAppSelector, useAppDispatch } from '../hooks/store'
import { authSelectors } from '../store/auth/auth-selectors'

import type { SignUp } from '../models/signup-model'

export const RegModule = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const signUpError = useAppSelector(authSelectors.getSignUpError)

  const handleSubmit = (data: SignUp) => {
    dispatch(signUp(data))
    if (!signUpError) {
      navigate(Routes.HOME)
    }
  }

  return (
    <FormWrapper padding={25}>
      <H3 $weight='700'>Sign up</H3>
      <RegForm onSubmitForm={handleSubmit} />
    </FormWrapper>
  )
}
