import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { Textimation } from 'textimation'

export default function Chat() {
  const { messages, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  })

  return (
    <main className="relative flex flex-1 flex-col justify-center overflow-hidden px-6 py-16 md:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-muted/50 via-transparent to-transparent dark:from-muted/25"
      />
      <div className="mx-auto w-full max-w-xl">
        <Textimation
          text="Heriel"
          className="font-medium font-mono text-muted-foreground text-xs uppercase tracking-[0.2em]"
          type="random"
          Comp="h1"
        />
        <Textimation
          text={`A calm place\nto work with your tools`}
          className="mt-3 text-balance font-mono font-semibold text-2xl uppercase tracking-tight md:text-3xl"
          type="incremental"
          Comp="p"
        />
      </div>
    </main>
  )
}
