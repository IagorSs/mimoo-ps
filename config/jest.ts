import slsVars from '../.serverless/output.json'

export default async (): Promise<void> => {
  process.env.API_URL = slsVars.ApiUrl
  console.log(`\n\nAPI url set: ${process.env.API_URL}\n`)
}
