import { ApiError } from '@core/Error'
import TagOptions from './TagOptions'

export default class Tag {
  private readonly value: TagOptions

  constructor (value: string) {
    if (!Object.keys(TagOptions).includes(value)) {
      throw new ApiError({
        message: 'Cannot set this value to Tag',
        httpStatusCodeError: 400
      })
    }

    this.value = (TagOptions as any)[value]
  }

  get (): string {
    return TagOptions[this.value]
  }
}
