import {
  Folder02Icon,
  MessageSquareCodeIcon,
  Person,
} from '@hugeicons/core-free-icons'
import type { HugeiconsIconProps } from '@hugeicons/react'

type SidebarItem = {
  label: string
  href: string
  icon: HugeiconsIconProps['icon']
  groupLabel?: string
  subItems?: Omit<SidebarItem, 'subItems' | 'groupLabel'>[]
}

export const SIDEBAR: SidebarItem[] = [
  {
    label: 'Chat',
    href: '/chat',
    icon: MessageSquareCodeIcon,
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: Folder02Icon,
  },
  {
    label: 'Assistants',
    href: '/assistants',
    icon: Person,
  },
]
