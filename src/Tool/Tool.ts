import { Tag, URL } from '.'

interface ToolProps {
  title: string
  link: URL
  description: string
  tags: Tag[]
}

export default class Tool {
  private readonly _id?: number
  private readonly props: ToolProps

  constructor (
    props: ToolProps,
    id?: number
  ) {
    this.props = props

    this._id = id
  }

  get id (): number | undefined {
    return this._id
  }

  get title (): string {
    return this.props.title
  }

  set title (title: string) {
    this.props.title = title
  }

  get link (): URL {
    return this.props.link
  }

  set link (link: URL) {
    this.props.link = link
  }

  get description (): string {
    return this.props.description
  }

  set description (description: string) {
    this.props.description = description
  }

  get tags (): Tag[] {
    return this.props.tags
  }

  set tags (tags: Tag[]) {
    this.props.tags = tags
  }
}
