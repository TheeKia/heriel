import { createBrowserRouter } from 'react-router'

import Chat from './routes/chat'
import SidebarRoot from './routes/sidebar-root'
import Welcome from './routes/welcome'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: SidebarRoot,
    children: [
      { path: '/', Component: Welcome },
      { path: '/chat', Component: Chat },
    ],
  },
])
