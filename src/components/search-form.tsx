import React, { useEffect, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { useSearchParams } from 'react-router-dom'

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
  debounceValue: string
}

const defaultSearchFormValues = {
  search: ''
}

export const SearchForm = (props: Props) => {
  const [searchQuery] = useSearchParams()
  const [focus, setFocus] = useState(false)
  const dispatchContext = useSearchDispatch()
  const { onSubmitForm, beers, isLoading, debounceValue } = props

  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isDirty }
  } = useForm<Search>({
    defaultValues: defaultSearchFormValues,
    mode: 'onBlur',
    criteriaMode: 'all'
  })

  const query = searchQuery.get('beer_name')
  useEffect(() => {
    if (query) {
      setValue('search', debounceValue)
    }
  }, [setValue, debounceValue, query])

  let searchValue = watch('search', defaultSearchFormValues.search)

  useEffect(() => {
    dispatchContext({ type: 'addSearchValue', searchValue: searchValue })
  }, [dispatchContext, searchValue])

  const onSubmit: SubmitHandler<Search> = (data) => {
    onSubmitForm(data)
    reset()
  }

  const handleFocus = () => {
    setFocus(true)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setFocus(false)
    }, 100)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder='Search beers ...'
        type='search'
        {...register('search')}
        errorOn={!!errors.search}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Suggest
        beers={beers}
        searchValue={searchValue}
        debounceValue={debounceValue}
        isLoading={isLoading}
        focus={focus}
      />

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
