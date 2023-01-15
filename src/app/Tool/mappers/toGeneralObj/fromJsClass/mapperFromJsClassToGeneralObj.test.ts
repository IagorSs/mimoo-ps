import mapper from '.'
import { ToolObj, Tool, URL, Tag } from '@app/Tool'

it('should mapper convert as expected', () => {
  const jsObj: Tool = new Tool({
    description: 'description test',
    link: new URL('https://google.com'),
    tags: [
      new Tag('COLLABORATION'),
      new Tag('PLANNING')
    ],
    title: 'Google'
  }, 34)

  const objExpected: ToolObj = {
    description: 'description test',
    id: 34,
    link: 'https://google.com/',
    tags: [
      'COLLABORATION',
      'PLANNING'
    ],
    title: 'Google'
  }

  expect(mapper(jsObj)).toEqual(objExpected)
})
