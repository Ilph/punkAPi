import type { User } from './user-model'

export type LocalStorageUser = {
  id: string
  data: User
}

export type LocalStorageKey = LocalStorageUser[]
