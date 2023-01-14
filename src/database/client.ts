import { DynamoDB } from 'aws-sdk'

const isLocal = process.env.IS_LOCAL !== undefined && process.env.IS_LOCAL === 'true'

const dynamodbOfflineOptions = {
  region: 'localhost',
  endpoint: 'http://localhost:6577'
}

export default isLocal
  ? new DynamoDB.DocumentClient(dynamodbOfflineOptions)
  : new DynamoDB.DocumentClient()
