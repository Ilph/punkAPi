import { HTTPError } from '../errors/error'

const BASE_ERROR = 'Sorry, something wrong'
export const handleError = (error: unknown) => {
  if (error instanceof HTTPError) {
    return error.message
  } else if (typeof error === 'string') {
    return error
  } else {
    return BASE_ERROR
  }
}
