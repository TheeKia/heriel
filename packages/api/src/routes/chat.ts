import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const { messages } = await c.req.json()

  return c.json({ message: 'WIP' })
})

export default app
