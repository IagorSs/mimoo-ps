import { Tool, Mappers, ToolDbObj } from '@core/Tool'
import { client } from '../database'

const getDefaultParams = (): any => ({
  TableName: process.env.TABLE_NAME as string
})

export const getAll = async (): Promise<Tool[]> => {
  return await new Promise((resolve, reject) => {
    const params = getDefaultParams()

    client.scan(params, (err, data) => {
      if (err !== null) reject(err)
      else resolve((data.Items as unknown as ToolDbObj[]).map(Mappers.fromDbToJsClass))
    })
  })
}

export const create = async (tool: Tool): Promise<void> => {
  const params = {
    ...getDefaultParams(),
    Item: {
      tags: client.createSet(tool.tags.map(tag => tag.get())),
      id: tool.id,
      link: tool.link.get(),
      description: tool.description,
      title: tool.title
    }
  }

  await client.put(params).promise()
}

export const deleteTool = async (toolId: number): Promise<void> => {
  const params = {
    ...getDefaultParams(),
    Key: {
      id: toolId
    }
  }

  await client.delete(params).promise()
}
