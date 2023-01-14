import ApiError from '.'

it('should error http statusCode cannot be less than 400', () => {
  expect(() => {
    throw new ApiError({
      httpStatusCodeError: 100,
      message: 'api Error'
    })
  }).toThrow('Error status code cannot be less than 400')
})

it('should be throw correctly', () => {
  expect(() => {
    throw new ApiError({
      httpStatusCodeError: 400,
      message: 'Request error'
    })
  }).toThrow('Request error')
})
