import middy from '@middy/core'
import { Mappers, ToolObj, ToolRepository } from '@core/Tool'
import { errorHandler, checkEnv } from '@core/middlewares'
import { HttpResponse, Response } from '@core/http'

// TODO better this performance
const getNewId = async (): Promise<number> => {
  const tools = await ToolRepository.getAll()

  return 1 + (tools
    .reduce(
      (previousTool, currentTool) =>
        (previousTool.id as number) > (currentTool.id as number)
          ? previousTool
          : currentTool
    )
    .id as number)
}

// TODO better this event type
const createTool = async (event: any): Promise<HttpResponse> => {
  // TODO put this parse, check and treatment of body on middleware
  const body: ToolObj = JSON.parse(event.body)

  await ToolRepository.create(Mappers.fromGeneralObjToJsClass({
    ...body,
    tags: body.tags.map(tag => tag.toUpperCase()),
    id: await getNewId()
  }))

  const res = new Response({
    statusCode: 201
  })

  return res.getValue()
}

export const handler = middy(createTool)
  .use(errorHandler())
  .use(checkEnv({ envVariables: ['TABLE_NAME'] }))
