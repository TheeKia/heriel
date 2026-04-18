'use client'

import Image from 'next/image'
import { Textimation } from 'textimation'

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center gap-4 overflow-hidden">
      <Image
        src="/heriel.svg"
        alt="Heriel"
        width={128}
        height={128}
        priority
        className="fade-in-0 zoom-in-95 animate-in duration-1000 ease-in-out"
      />

      <div className="space-y-2">
        <Textimation
          text="Heriel"
          className="font-light font-mono text-foreground text-lg uppercase tracking-widest"
          type="random"
          Comp="h1"
        />
        <Textimation
          text="Coming soon"
          className="font-mono text-[0.7rem] text-foreground/50 uppercase tracking-[0.42em]"
          type="random"
          Comp="p"
        />
      </div>
    </main>
  )
}
