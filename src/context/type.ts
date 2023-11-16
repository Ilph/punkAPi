import type { SignUp } from '../models/signup-model'

export type AuthContextType = {
  user: SignUp | null
  isAuth: boolean
  signInStatus: string
  signInError: string | null
}

export enum ActionType {
  AddUser = 'addUser',
  GetUser = 'getUser',
  LogOut = 'logOut'
}

type AddUserAction = {
  type: ActionType.AddUser
  user: SignUp | null
  isAuth: boolean
  signInStatus: string
  signInError: string | null
}

type GetUserAction = {
  type: ActionType.GetUser
  user: SignUp | null
  isAuth: boolean
  signInStatus: string
  signInError: string | null
}

type LogOutAction = {
  type: ActionType.LogOut
  user: SignUp | null
  isAuth: boolean
  signInStatus: string
  signInError: string | null
}

export type Actions = AddUserAction | GetUserAction | LogOutAction
