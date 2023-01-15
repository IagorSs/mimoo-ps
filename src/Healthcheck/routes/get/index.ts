import { HttpResponse, Response } from '@core/http'

export async function handler (): Promise<HttpResponse> {
  const response = new Response({
    statusCode: 200
  })

  return response.getValue()
}
