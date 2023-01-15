import middy from '@middy/core'
import { Mappers, ToolObj, ToolRepository } from '@app/Tool'
import { errorHandler, checkEnv } from '@core/middlewares'
import { HttpResponse, Response, Body } from '@core/http'

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

  const toolId = await getNewId()

  const tool = Mappers.fromGeneralObjToJsClass({
    ...body,
    tags: body.tags.map(tag => tag.toUpperCase()),
    id: toolId
  })

  await ToolRepository.create(tool)

  const res = new Response({
    statusCode: 201,
    body: new Body(Mappers.fromJsClassToGeneralObj(tool))
  })

  return res.getValue()
}

export const handler = middy(createTool)
  .use(errorHandler())
  .use(checkEnv({ envVariables: ['TABLE_NAME'] }))
