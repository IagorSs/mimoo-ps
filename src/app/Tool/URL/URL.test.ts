import URL from '.'

it('shouldn\'t set random string as URL', () => {
  expect(() => {
    const url = new URL('aaa')

    url.get()
  }).toThrow('Invalid URL')
})

it('should set and get URL', () => {
  const url = new URL('https://www.google.com')

  expect(url.get()).toBe('https://www.google.com/')
})
