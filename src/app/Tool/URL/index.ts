import { URL } from 'url'

export default class ToolURL {
  private readonly url: URL

  constructor (value: string) {
    this.url = new URL(value)
  }

  get (): string {
    return this.url.href
  }
}
