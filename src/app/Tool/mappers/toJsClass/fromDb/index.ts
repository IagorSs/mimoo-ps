import { Tool, Tag, URL, ToolDbObj } from '@app/Tool'

export default (toolDbObj: ToolDbObj): Tool => {
  return new Tool({
    description: toolDbObj.description,
    link: new URL(toolDbObj.link),
    tags: toolDbObj.tags.values.map(tag => new Tag(tag)),
    title: toolDbObj.title
  }, toolDbObj.id)
}
