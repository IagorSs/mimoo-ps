import { Response } from '@core/http'

export async function handler (): Promise<Response> {
  return {
    statusCode: 204
  }
}
