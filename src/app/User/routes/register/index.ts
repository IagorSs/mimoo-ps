import { HttpResponse, Response } from '@core/http'
import middy from '@middy/core'
import { checkEnv, errorHandler } from '@core/middlewares'
import { UserRepository } from '@app/User'

const register = async (event: any): Promise<HttpResponse> => {
  // TODO put this parse, check and treatment of body on middleware
  const {
    email,
    password
  } = JSON.parse(event.body)

  await UserRepository.registerUser({
    email,
    password
  })

  const response = new Response({
    statusCode: 201
  })

  return response.getValue()
}

export const handler = middy(register)
  .use(errorHandler())
  .use(checkEnv({ envVariables: ['USER_POOL_ID'] }))
