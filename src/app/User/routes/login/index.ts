import { Body, HttpResponse, Response } from '@core/http'
import middy from '@middy/core'
import { checkEnv, errorHandler } from '@core/middlewares'
import { User, UserRepository } from '@app/User'

export const login = async (event: any): Promise<HttpResponse> => {
  const user: User = JSON.parse(event.body)

  const response = new Response({
    statusCode: 200,
    body: new Body({
      token: await UserRepository.login(user)
    })
  })

  return response.getValue()
}

export const handler = middy(login)
  .use(errorHandler())
  .use(checkEnv({ envVariables: ['USER_POOL_ID', 'CLIENT_ID'] }))
