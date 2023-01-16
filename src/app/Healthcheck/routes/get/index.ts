import { HttpResponse, Response } from '@core/http'
import { errorHandler } from '@core/middlewares'
import middy from '@middy/core'

const healthCheck = async (): Promise<HttpResponse> => {
  const response = new Response({
    statusCode: 200
  })

  return response.getValue()
}

export const handler = middy(healthCheck)
  .use(errorHandler())
