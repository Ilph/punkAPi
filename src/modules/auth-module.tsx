import React from 'react'

import { FormWrapper } from '../components/form-wrapper'
import { H3 } from '../assets/styles/texts'
import { AuthForm } from '../components/auth-form'

import type { SignIn } from '../models/signin-model'

export const AuthModule = () => {
  const handleSubmit = (data: SignIn) => {
    /* eslint-disable */
    // TODO Временно вывожу в консоль данные формы
    console.log(data)
  }
  return (
    <FormWrapper>
      <H3 $weight='700'>Sign in</H3>
      <AuthForm onSubmitForm={handleSubmit} />
    </FormWrapper>
  )
}
