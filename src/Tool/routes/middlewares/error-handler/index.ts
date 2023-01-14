import { Response, Body } from '@core/http'
import middy from '@middy/core'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

export default (): middy.MiddlewareObj<APIGatewayProxyEvent, APIGatewayProxyResult> => {
  const onError: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = (request) => {
    console.log({
      error: request.error
    })

    const response = new Response({
      statusCode: 500,
      body: new Body('Treated internal server Error')
    })

    return response.getValue()
  }

  return {
    onError
  }
}
