import React from 'react'

import { FormWrapper } from '../components/form-wrapper'
import { H3 } from '../assets/styles/texts'
import { RegForm } from '../components/reg-form'

import type { SignUp } from '../models/signup-model'

export const RegModule = () => {
  const handleSubmit = (data: SignUp) => {
    /* eslint-disable */
    // TODO Временно вывожу в консоль данные формы
    console.log(data)
  }
  return (
    <FormWrapper padding={25}>
      <H3 $weight='700'>Sign up</H3>
      <RegForm onSubmitForm={handleSubmit} />
    </FormWrapper>
  )
}
