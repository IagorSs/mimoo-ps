export default class Body {
  private readonly body: string

  constructor (body: string | Object) {
    const bodyObj: Object = typeof body === 'string'
      ? { message: body }
      : body

    this.body = JSON.stringify(bodyObj)
  }

  getStringified (): string {
    return this.body
  }
}
