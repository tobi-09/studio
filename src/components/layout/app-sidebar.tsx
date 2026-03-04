"use client"

import * as React from "react"
import {
  LayoutDashboard,
  ShieldAlert,
  Fingerprint,
  BarChart3,
  Settings,
  UserCheck,
  Zap,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Attendance Check", href: "/fraud-check", icon: UserCheck },
  { name: "Security Monitoring", href: "/security", icon: ShieldAlert },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="h-6 w-6" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-bold text-lg leading-none">EduGate</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Hub</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.name}
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator />
      </SidebarContent>
      <SidebarFooter className="p-4 group-data-[collapsible=icon]:hidden">
        <div className="flex items-center gap-3 rounded-lg border bg-card p-3 shadow-sm">
          <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
            <Fingerprint className="h-4 w-4" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium">Bakaláři Sync</span>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="text-[10px] text-muted-foreground">Connected</span>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}