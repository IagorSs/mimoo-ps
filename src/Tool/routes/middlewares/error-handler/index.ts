import { Response, Body } from '@core/http'
import middy from '@middy/core'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { ApiError } from '@core/Error'

type PossibleErrors = ApiError | Error

export default (): middy.MiddlewareObj<APIGatewayProxyEvent, APIGatewayProxyResult> => {
  const onError: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = (request) => {
    const error = request.error as PossibleErrors

    console.log({ error })

    const response = (error as ApiError).API_ERROR !== undefined
      ? new Response({
        statusCode: (error as ApiError).httpStatusCodeError,
        body: new Body(error.message)
      })
      : new Response({
        statusCode: 500,
        body: new Body('Treated internal server Error')
      })

    return response.getValue()
  }

  return {
    onError
  }
}
