import Body from '.'

it('should body set correctly if be single message', () => {
  const body = new Body('Single message')

  const stringExpected = JSON.stringify({
    message: 'Single message'
  })

  expect(body.getStringified()).toBe(stringExpected)
})

it('should body set correctly if be object', () => {
  const body = new Body({
    id: 3,
    mark: true,
    description: 'message'
  })

  const stringExpected = JSON.stringify({
    id: 3,
    mark: true,
    description: 'message'
  })

  expect(body.getStringified()).toBe(stringExpected)
})
