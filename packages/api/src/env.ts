import { assertEnv } from '@heriel/shared/env'
import { z } from 'zod'

const envSchema = z.object({
  PORT: z.string().optional(),
})

assertEnv(envSchema, process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
