import { Tool, ToolObj } from '@core/Tool'

export default (tool: Tool): ToolObj => {
  return {
    id: tool.id,
    title: tool.title,
    link: tool.link.get(),
    description: tool.description,
    tags: tool.tags.map(tag => tag.get())
  }
}
