import middy from '@middy/core'
import { ToolRepository, Mappers, Tag } from '@app/Tool'
import { checkEnv, errorHandler } from '@core/middlewares'
import { Response, HttpResponse, Body } from '@core/http'
import filterByTag from './filter-by-tag'

// TODO better this event type
const getAllTools = async (event: any): Promise<HttpResponse> => {
  const tagToFilter = event.queryStringParameters?.tag.toUpperCase()

  let tools = await ToolRepository.getAll()

  if (tagToFilter !== undefined) tools = filterByTag(new Tag(tagToFilter), tools)

  const response = new Response({
    statusCode: 200,
    body: new Body(tools.map(Mappers.fromJsClassToGeneralObj))
  })

  return response.getValue()
}

export const handler = middy(getAllTools)
  .use(errorHandler())
  .use(checkEnv({ envVariables: ['TABLE_NAME'] }))
