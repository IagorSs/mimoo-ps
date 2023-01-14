import Body from './Body'

interface ResponseProps {
  statusCode: number
  body?: Body
  headers?: Record<string, string> // TODO create object value for this
}

interface HttpResponse extends Omit<ResponseProps, 'body'> {
  body?: string
}

export default class Response {
  private readonly props: ResponseProps

  constructor (props: ResponseProps) {
    this.props = props
  }

  getValue (): HttpResponse {
    return {
      statusCode: this.props.statusCode,
      body: this.props.body?.getStringified(),
      headers: this.props.headers
    }
  }
}
