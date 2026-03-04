"use client"

import * as React from "react"
import {
  ShieldAlert,
  Info,
  PhoneCall,
  Mail,
  HardDrive,
  CreditCard,
  Layers,
  Zap,
  Lock,
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
  { name: "O produktu", href: "/", icon: Info },
  { name: "Plány nasazení", href: "/#pricing", icon: CreditCard },
  { name: "Jak to funguje", href: "/how-it-works", icon: HardDrive },
  { name: "Integrace Bakaláři", icon: Layers, href: "/#integration" },
  { name: "Smart Campus HW", href: "/smart-campus", icon: Lock },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
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
        <div className="flex flex-col gap-3">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Kontakt</p>
          <div className="space-y-1">
             <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer px-1">
              <PhoneCall className="h-4 w-4" />
              <span>+420 800 123 456</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer px-1">
              <Mail className="h-4 w-4" />
              <span>obchod@edugate.cz</span>
            </div>
          </div>
          <div className="mt-2 p-3 rounded-lg border bg-card shadow-sm">
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs font-semibold">Prodejní verze 2024</span>
              <span className="text-[10px] text-muted-foreground">Hardwarová divize</span>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
