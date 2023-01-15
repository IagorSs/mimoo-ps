import ToolObj from './ToolObj'

export default interface ToolDbObj extends Omit<ToolObj, 'tags'> {
  id: number
  tags: {
    values: string[]
  }
}
