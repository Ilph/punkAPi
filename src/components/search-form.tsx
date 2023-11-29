import React, { useEffect } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import styled from 'styled-components'

import { Input } from '../ui/input/input'
import { Button } from '../ui/button/button'

import { useSearchDispatch } from '../hooks/context'

import { Suggest } from './suggest'

import type { Search } from '../models/search-model'
import type { modifyedBeer } from '../models/beer-model'

type Props = {
  onSubmitForm: (data: Search) => void
  beers: modifyedBeer[]
  isLoading: boolean
}

const defaultSearchFormValues = {
  search: ''
}

export const SearchForm = (props: Props) => {
  const dispatchContext = useSearchDispatch()
  const { onSubmitForm, beers, isLoading } = props

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty }
  } = useForm<Search>({
    defaultValues: defaultSearchFormValues,
    mode: 'onBlur',
    criteriaMode: 'all'
  })

  const searchValue = watch('search', defaultSearchFormValues.search)

  useEffect(() => {
    dispatchContext({ type: 'addSearchValue', searchValue: searchValue })
  }, [dispatchContext, searchValue])

  const onSubmit: SubmitHandler<Search> = (data) => {
    onSubmitForm(data)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder='Search beers ...' type='search' {...register('search')} errorOn={!!errors.search} />
      <Suggest beers={beers} searchValue={searchValue} isLoading={isLoading} />

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
