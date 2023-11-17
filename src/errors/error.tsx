export class HTTPError extends Error {
  public status: null | number

  constructor(message: string, code: number) {
    super(message)
    this.name = 'HTTPError'
    this.status = code
  }
}
