class LocalStorage {
  public get = (key: string): Record<string, unknown> | null => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }

  public set = (key: string, value: Record<string, unknown>): void => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  public delete = (key: string) => localStorage.removeItem(key)
}

export const localST = new LocalStorage()
