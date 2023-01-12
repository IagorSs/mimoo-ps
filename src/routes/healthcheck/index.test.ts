import axios from 'axios'

test('healthcheck returns 204', async () => {
  if (process.env.API_URL === undefined) return fail()

  const { status } = await axios.get(`${process.env.API_URL}/healthcheck`)

  expect(status).toBe(204)
})
