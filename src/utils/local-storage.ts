class LocalStorage {
  readonly key: string

  constructor(key: string) {
    this.key = key
  }

  public get = (): Record<string, unknown>[] | null => {
    const data = localStorage.getItem(this.key)
    return data ? JSON.parse(data) : null
  }

  public set = (key: string, value: Record<string, unknown>[]): void => {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const localST = new LocalStorage('users')
