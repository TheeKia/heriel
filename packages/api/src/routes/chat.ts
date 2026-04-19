import { Hono } from "hono";
import { createUIMessageStream, streamText } from "ai";

const app = new Hono()

app.post('/', async (c) => {
  const { messages } = await c.req.json()

  

  return c.json({ message: 'WIP' })
})

export default app