class LocalStorage {
  public get = <T>(key: string): T | null => {
    const data = localStorage.getItem(key)
    return data ? (JSON.parse(data) as T) : null
  }

  public set = (key: string, value: Record<string, unknown>[]): void => {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      throw new Error('Local storage is not supported in this browser.')
    }
  }
}

export const localST = new LocalStorage()
