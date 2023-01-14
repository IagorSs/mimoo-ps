import { Tool, Tag, URL, ToolObj } from '@core/Tool'

export default (toolObj: ToolObj): Tool => {
  return new Tool({
    description: toolObj.description,
    link: new URL(toolObj.link),
    tags: toolObj.tags.map(tag => new Tag(tag)),
    title: toolObj.title
  }, toolObj.id)
}
