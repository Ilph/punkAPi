import React from 'react'
import { useNavigate } from 'react-router-dom'

import { SubmitHandler, useForm } from 'react-hook-form'

import styled from 'styled-components'

import { Input } from '../ui/input/input'
import { Button } from '../ui/button/button'

import { Routes } from '../constants/routes'

import { Suggest } from './suggest'

import type { Search } from '../models/search-model'

type Props = {
  onSubmitForm: (data: Search) => void
}

const defaultSearchFormValues = {
  search: ''
}

export const SearchForm = (props: Props) => {
  const navigate = useNavigate()
  const { onSubmitForm } = props

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    control
  } = useForm<Search>({
    defaultValues: defaultSearchFormValues,
    mode: 'onBlur',
    criteriaMode: 'all'
  })

  const onSubmit: SubmitHandler<Search> = (data) => {
    navigate(Routes.SEARCH)
    onSubmitForm(data)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type='search' {...register('search')} errorOn={!!errors.search} />
      <Suggest control={control} names={[]} />

      <Button type='submit' size={'middle'} disabled={!isDirty || isSubmitting}>
        Search
      </Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};
  border-top: 2px solid ${(props) => props.theme.colors.accent};
  padding: 10px 0 0 10px;
`
