import TagOptions from './TagOptions'

export default class Tag {
  private readonly value: TagOptions

  constructor (value: string) {
    if (!Object.keys(TagOptions).includes(value)) throw Error('Cannot set this value to Tag')

    this.value = (TagOptions as any)[value]
  }

  get (): string {
    return TagOptions[this.value]
  }
}
