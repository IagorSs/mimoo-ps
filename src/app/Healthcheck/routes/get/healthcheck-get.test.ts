import axios from 'axios'

it('should healthcheck returns 200', async () => {
  if (process.env.API_URL === undefined) return fail()

  const { status } = await axios.get(`${process.env.API_URL}/healthcheck`)

  expect(status).toBe(200)
})
