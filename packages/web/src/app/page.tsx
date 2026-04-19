'use client'

import { type AnimateItem, Dotimation } from 'dotimation'
import { useEffect, useState } from 'react'
import { Textimation } from 'textimation'

const ITEM: AnimateItem = { type: 'image', data: '/heriel.svg' }
const CYCLE_MESSAGE = ['H e r i e l', 'Coming Soon']

export default function Home() {
  const [messageIdx, setMessageIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIdx((prev) => (prev + 1) % CYCLE_MESSAGE.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center gap-4 overflow-hidden">
      <Dotimation item={ITEM} width={128} height={128} pointSpacingCss={1} />

      <Textimation
        text={CYCLE_MESSAGE[messageIdx]}
        className="font-mono text-[0.7rem] text-foreground/50 uppercase tracking-[0.4em]"
        type="random"
        Comp="h1"
        animationSpeed={50}
        keepCorrectChars
      />
    </main>
  )
}
