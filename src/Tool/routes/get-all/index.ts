import middy from '@middy/core'
import { ToolRepository, Mappers } from '@core/Tool'
import { checkEnv, errorHandler } from '../middlewares'
import { Response, HttpResponse, Body } from '@core/http'

const getAllTools = async (): Promise<HttpResponse> => {
  const tools = await ToolRepository.getAll()

  const response = new Response({
    statusCode: 200,
    body: new Body(tools.map(Mappers.fromJsClassToGeneralObj))
  })

  return response.getValue()
}

export const handler = middy(getAllTools)
  .use(errorHandler())
  .use(checkEnv({ envVariables: ['TABLE_NAME'] }))
