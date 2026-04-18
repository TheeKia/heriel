import './index.css'
import './addons.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

import { ThemeProvider } from '@/components/theme-provider'

import { Toaster } from './components/ui/sonner'
import { TooltipProvider } from './components/ui/tooltip'
import { queryClient } from './lib/query-client'
import { router } from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <RouterProvider router={router} />
        </TooltipProvider>
      </QueryClientProvider>
      <Toaster position="bottom-center" richColors theme="dark" />
    </ThemeProvider>
  </StrictMode>,
)
