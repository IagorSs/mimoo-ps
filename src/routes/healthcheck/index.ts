import { HttpResponse } from '../../http/response'

export async function handler (): Promise<HttpResponse> {
  return {
    statusCode: 204
  }
}
