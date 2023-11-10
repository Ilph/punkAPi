import * as yup from 'yup'

import { passwordRegExp } from './regular-exps'

export const regSchema = yup.object({
  email: yup.string().required('Пожалуйста, введите email').email('Пожалуйста, введите корректный email'),
  password: yup
    .string()
    .required('Пожалуйста, введите пароль')
    .min(8, 'Пароль не может быть короче 8 символов')
    .max(40, 'Пароль должен быть короче 40 символов')
    .matches(passwordRegExp, 'Пароль дожен содержать хотя бы одну заглавную букву и цифру'),
  repeatPassword: yup
    .string()
    .required('Пожалуйста, введите пароль')
    .oneOf([yup.ref('password')], 'Введенные пароли не совпадают')
})
