import mapper from '.'
import { ToolObj, Tool, URL, Tag } from '@core/Tool'

it('should mapper convert as expected', () => {
  const obj: ToolObj = {
    description: 'description test',
    id: 34,
    link: 'https://google.com',
    tags: [
      'COLLABORATION',
      'PLANNING'
    ],
    title: 'Google'
  }

  const jsObjExpected: Tool = new Tool({
    description: 'description test',
    link: new URL('https://google.com'),
    tags: [
      new Tag('COLLABORATION'),
      new Tag('PLANNING')
    ],
    title: 'Google'
  }, 34)

  expect(mapper(obj)).toEqual(jsObjExpected)
})
