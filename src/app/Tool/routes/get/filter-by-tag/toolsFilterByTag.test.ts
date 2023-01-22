import { Tool, URL, Tag } from '@app/Tool'
import filterbyTag from '.'

it('should filter tag correctly', () => {
  const firstTool = new Tool({
    description: 'description test',
    link: new URL('https://google.com'),
    tags: [
      new Tag('COLLABORATION'),
      new Tag('PLANNING')
    ],
    title: 'Google'
  }, 1)

  const secondTool = new Tool({
    description: 'description test',
    link: new URL('https://www.fastify.io/'),
    tags: [
      new Tag('COLLABORATION'),
      new Tag('NODE')
    ],
    title: 'Fastify'
  }, 2)

  const thirdTool = new Tool({
    description: 'description test 3',
    link: new URL('https://google.com'),
    tags: [
      new Tag('NODE')
    ],
    title: 'json-server'
  }, 3)

  const tools = [
    firstTool,
    secondTool,
    thirdTool
  ]

  const tagToFilter = new Tag('NODE')

  const toolsFiltered = filterbyTag(tagToFilter, tools)

  expect(toolsFiltered).not.toContainEqual(firstTool)
  expect(toolsFiltered).toContainEqual(secondTool)
  expect(toolsFiltered).toContainEqual(thirdTool)
})
