import Tag from '.'

it('should tag cannot be set if value not in possible values', () => {
  expect(() => {
    const tag = new Tag('aaa')

    tag.get()
  }).toThrow('Cannot set this value to Tag')
})

it('should tag can be set if value in possible values', () => {
  const tag = new Tag('NODE')

  expect(tag.get()).toBe('NODE')
})
