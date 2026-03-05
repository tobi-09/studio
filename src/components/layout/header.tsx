"use client"

import React from "react"
import Link from "next/link"
import { Zap, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md group-hover:scale-110 transition-transform">
            <Zap className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none">EduGate</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Hub</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#pricing" className="text-sm font-medium hover:text-primary transition-colors">Plány nasazení</Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">Jak to funguje</Link>
          <Link href="/fraud-check" className="text-sm font-medium hover:text-primary transition-colors">Demo Anti-Fraud</Link>
          <Link href="/analytics" className="text-sm font-medium hover:text-primary transition-colors">Analytika</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <PhoneCall className="h-4 w-4 text-primary" />
            <span>800 123 456</span>
          </div>
          <Button size="sm" asChild>
            <Link href="mailto:obchod@edugate.cz">Poptat řešení</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
