import { Response, Body, ResponseProps } from '@core/http'
import middy from '@middy/core'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { ApiError } from '@core/Error'

interface AwsError extends Error {
  code: string
}

type PossibleErrors = ApiError | Error | AwsError

export default (): middy.MiddlewareObj<APIGatewayProxyEvent, APIGatewayProxyResult> => {
  const treatAwsError = (awsError: AwsError): Response => {
    const responseProps: ResponseProps = {
      statusCode: 500,
      body: new Body(`Error creating user - ${awsError.message}`)
    }

    switch (awsError.code) {
      case 'UsernameExistsException':
        responseProps.statusCode = 409
        break
      case 'InvalidParameterException':
      case 'InvalidPasswordException':
        responseProps.statusCode = 400
        break
    }

    return new Response(responseProps)
  }

  const onError: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = (request) => {
    const error = request.error as PossibleErrors

    console.log({ error })

    let response

    if ((error as ApiError).API_ERROR !== undefined) {
      response = new Response({
        statusCode: (error as ApiError).httpStatusCodeError,
        body: new Body(error.message)
      })
    } else if ((error as AwsError).code !== undefined) {
      response = treatAwsError(error as AwsError)
    } else {
      response = new Response({
        statusCode: 500,
        body: new Body('Treated internal server Error')
      })
    }

    return response.getValue()
  }

  return {
    onError
  }
}
