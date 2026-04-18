import { HugeiconsIcon } from '@hugeicons/react'
import { Link, useLocation } from 'react-router'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { SIDEBAR } from '@/config'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation()

  return (
    <Sidebar {...props} collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link
              to="/"
              className="flex w-full items-center gap-x-2 overflow-clip text-muted-foreground text-xs uppercase tracking-widest transition-all"
            >
              <img src="/heriel.svg" alt="Heriel" className="size-8 min-w-8" />
              <span>HERIEL</span>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SIDEBAR.map((item) => {
              const isActive = pathname.startsWith(item.href)

              return (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    render={<Link to={item.href} />}
                    isActive={isActive}
                  >
                    <HugeiconsIcon icon={item.icon} className="size-5" />
                    {item.label}
                  </SidebarMenuButton>

                  {item.subItems?.length ? (
                    <SidebarMenuSub>
                      {item.subItems.map((item) => {
                        const isSubActive = pathname.startsWith(item.href)

                        return (
                          <SidebarMenuSubItem key={item.label}>
                            <SidebarMenuSubButton
                              render={<Link to={item.href} />}
                              isActive={isSubActive}
                            >
                              <HugeiconsIcon
                                icon={item.icon}
                                className="size-5"
                              />
                              {item.label}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                      })}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
