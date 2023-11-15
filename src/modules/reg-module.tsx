import React from 'react'

import { useNavigate } from 'react-router-dom'

import { FormWrapper } from '../components/form-wrapper'
import { H3 } from '../assets/styles/texts'
import { RegForm } from '../components/reg-form'

import { useAuthDispatch } from '../hooks/context'
import { signUpAction } from '../context/auth-actions'

import { Routes } from '../constants/routes'

import type { SignUp } from '../models/signup-model'

export const RegModule = () => {
  const navigate = useNavigate()
  const dispatch = useAuthDispatch()

  const handleSubmit = (data: SignUp) => {
    dispatch(signUpAction(data))
    navigate(Routes.HOME)
  }
  return (
    <FormWrapper padding={25}>
      <H3 $weight='700'>Sign up</H3>
      <RegForm onSubmitForm={handleSubmit} />
    </FormWrapper>
  )
}
