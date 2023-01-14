
import { ApiError } from '@core/Error'
import middy from '@middy/core'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

export default (options: {
  envVariables: string[]
}): middy.MiddlewareObj<APIGatewayProxyEvent, APIGatewayProxyResult> => {
  const before: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = async (): Promise<void> => {
    options.envVariables.forEach(envVariable => {
      if (process.env[envVariable] === undefined) {
        throw new ApiError({
          message: 'Problems with env',
          httpStatusCodeError: 500
        })
      }
    })
  }

  return {
    before
  }
}
