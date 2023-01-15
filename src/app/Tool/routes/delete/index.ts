import middy from '@middy/core'
import { ToolRepository } from '@app/Tool'
import { checkEnv, errorHandler } from '@core/middlewares'
import { Response, HttpResponse } from '@core/http'

// TODO better this event type
const getAllTools = async (event: any): Promise<HttpResponse> => {
  // TODO change this parse to middleware
  const toolId = parseInt(event.pathParameters.id)
  // ---

  await ToolRepository.deleteTool(toolId)

  const response = new Response({
    statusCode: 204
  })

  return response.getValue()
}

export const handler = middy(getAllTools)
  .use(errorHandler())
  .use(checkEnv({ envVariables: ['TABLE_NAME'] }))
