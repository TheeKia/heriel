import './env'

import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()

const api = app.basePath('/api')

api.get('/health', (c) => c.json({ ok: true }))

if (process.env.NODE_ENV === 'production') {
  app.use('/*', serveStatic({ root: './dist' }))
  app.get('*', serveStatic({ path: './dist/index.html' }))
}

export default {
  port: Number(process.env.PORT ?? 3000),
  fetch: app.fetch,
}
