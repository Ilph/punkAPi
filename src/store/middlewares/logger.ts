import { Action, Dispatch, Middleware, MiddlewareAPI } from '@reduxjs/toolkit'

//Реализованио для того, чтобы понять основы. Для теста подключал к store. Но отключил, чтобы console не захломлять
export const logger: Middleware = (storeApi: MiddlewareAPI) => (next: Dispatch<Action>) => (action: Action) => {
  /*eslint-disable*/
  console.group(action.type)
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', storeApi.getState())
  console.log(result)
  return result
}
