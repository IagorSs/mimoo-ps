import { Tool, Mappers, ToolDbObj } from '@core/Tool'
import { client } from '../database'

export const getAll = async (): Promise<Tool[]> => {
  return await new Promise((resolve, reject) => {
    const params = {
      TableName: process.env.TABLE_NAME as string
    }

    client.scan(params, (err, data) => {
      if (err !== null) reject(err)
      else resolve((data.Items as unknown as ToolDbObj[]).map(Mappers.fromDbToJsClass))
    })
  })
}
