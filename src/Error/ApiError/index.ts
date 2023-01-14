export interface ApiErrorProps {
  httpStatusCodeError: number
  message: string
}

export default class ApiError extends Error {
  httpStatusCodeError: number

  constructor (props: ApiErrorProps) {
    if (props.httpStatusCodeError < 400) throw new Error('Error status code cannot be less than 400')

    super(props.message)

    this.httpStatusCodeError = props.httpStatusCodeError
  }
}
