import React from 'react'

import { useSearchParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import { FormWrapper } from '../components/form-wrapper'
import { H3 } from '../assets/styles/texts'
import { RegForm } from '../components/reg-form'

import { registration } from '../store/auth/auth-actions'

import { Routes } from '../constants/routes'

import { useAppSelector, useAppDispatch } from '../hooks/store'
import { authSelectors } from '../store/auth/auth-selectors'

import type { SignUp } from '../models/signup-model'

export const RegModule = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchQuery] = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const signUpError = useAppSelector(authSelectors.getSignUpError)

  const handleSubmit = (data: SignUp) => {
    dispatch(registration(data))
    if (!signUpError) {
      navigate(Routes.HOME)
      setSearchQuery({ page: '1' })
    }
  }

  return (
    <FormWrapper padding={25}>
      <H3 $weight='700'>Sign up</H3>
      <RegForm onSubmitForm={handleSubmit} />
    </FormWrapper>
  )
}
