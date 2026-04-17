import type { ZodObject, z } from 'zod'

function printEnvError(error: z.ZodError) {
  const red = '\x1b[31m'
  const dim = '\x1b[2m'
  const bold = '\x1b[1m'
  const yellow = '\x1b[33m'
  const cyan = '\x1b[36m'
  const reset = '\x1b[0m'

  const issues = error.issues
    .map(
      (i) =>
        `\t${red}✗${reset} ${bold}${i.path.join('.') || '(root)'}${reset} ${dim}→${reset} ${yellow}${i.message}${reset}`,
    )
    .join('\n')

  console.error(`
${red}${bold}ENV VALIDATION FAILED ${reset}
${issues}

${dim}Check your ${cyan}.env${dim} files and CI/deployment config${reset}
`)
}

export function assertEnv<T extends ZodObject>(schema: T, env: object) {
  const { error } = schema.safeParse(env)
  if (error) {
    printEnvError(error)
    throw new Error('Missing or invalid environment variables')
  }
}
