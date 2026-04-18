import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

import { fontMono, fontSans } from '../fonts'

export const metadata: Metadata = {
  title: 'Heriel',
  description: 'Heriel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full',
        'antialiased',
        fontSans.variable,
        fontMono.variable,
        'font-sans',
      )}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
