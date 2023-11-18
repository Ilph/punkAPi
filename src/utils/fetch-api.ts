import { HTTPError } from '../errors/error'
import { BASE_API_CONFIG } from '../constants/base-api-config'

const enum METHODS {
  GET = 'GET'
}

type Request = <T>(url: string, method: METHODS, body?: Record<string, unknown>) => Promise<T>

export class FetchApi {
  public API_URL: string

  constructor(apiUrl: string) {
    this.API_URL = apiUrl
  }

  public getURL = () => this.API_URL

  public get = async <T>(url: string) => await baseFetch<T>(this.API_URL + url, METHODS.GET)
}

const baseFetch: Request = async (url, method, body) => {
  try {
    const response = await fetch(url, {
      headers: BASE_API_CONFIG.headers,
      method,
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new HTTPError(response.statusText, response.status)
    }
    const data = await response.json()
    return data
  } catch (e) {
    throw e
  }
}

export const fetchApi = new FetchApi(BASE_API_CONFIG.url)
