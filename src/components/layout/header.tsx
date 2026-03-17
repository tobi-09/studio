"use client"

import React from "react"
import Link from "next/link"
import { Zap, PhoneCall, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md group-hover:scale-110 transition-transform">
            <Zap className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none tracking-tight">EduGate</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Hub</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#pricing" className="text-sm font-semibold hover:text-primary transition-colors">Plány nasazení</Link>
          <Link href="/how-it-works" className="text-sm font-semibold hover:text-primary transition-colors">Jak to funguje</Link>
          <Link href="/fraud-check" className="text-sm font-semibold hover:text-primary transition-colors">Demo: Anti-Fraud</Link>
          <Link href="/analytics" className="text-sm font-semibold hover:text-primary transition-colors">Analytika</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm font-bold text-muted-foreground">
            <PhoneCall className="h-4 w-4 text-primary" />
            <span>800 123 456</span>
          </div>
          
          <Button size="sm" asChild className="hidden sm:flex shadow-md">
            <Link href="mailto:obchod@edugate.cz">Poptat řešení</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild><Link href="/#pricing">Plány nasazení</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/how-it-works">Jak to funguje</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/fraud-check">Demo: Anti-Fraud</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/analytics">Analytika</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
