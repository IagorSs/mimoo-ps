import { Tag, Tool } from '@app/Tool'

export default (tag: Tag, tools: Tool[]): Tool[] => tools.filter(tool => {
  const tagsValues = tool.tags.map(tag => tag.get())

  return tagsValues.includes(tag.get())
})
