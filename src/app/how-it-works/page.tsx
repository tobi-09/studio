
"use client"

import React from "react"
import { HardDrive, Server, ShieldCheck, Zap, Laptop, Bell } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HowItWorks() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight font-headline">Jak EduGate doplňuje Bakaláře</h1>
        <p className="text-xl text-muted-foreground">Naše technologie není konkurence, ale rozšíření vašich možností.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Hardwarová vrstva
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              Zatímco Bakaláři jsou software, my dodáváme hardware. Naše čtečky jsou vyvinuty přímo pro český školní trh. Podporují ISIC karty, čipy i mobilní NFC. Jsou odolné proti vandalismu a fungují i při výpadku internetu.
            </p>
          </CardContent>
        </Card>

        <Card className="border-secondary/20 bg-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifikační engine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              EduGate Hub analyzuje průchody v reálném čase. Pokud student projde turniketem bez karty (bypass), plugin v Bakalářích okamžitě vytvoří událost a pošle notifikaci dozoru nebo vedení školy.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="p-8 rounded-3xl bg-muted border space-y-6">
        <h2 className="text-2xl font-bold text-center">Proces integrace</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col items-center text-center max-w-[150px]">
            <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2"><HardDrive /></div>
            <span className="text-xs font-bold">Osazení čteček</span>
          </div>
          <div className="h-px bg-border flex-1 hidden md:block" />
          <div className="flex flex-col items-center text-center max-w-[150px]">
            <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2"><Zap /></div>
            <span className="text-xs font-bold">Aktivace Pluginu</span>
          </div>
          <div className="h-px bg-border flex-1 hidden md:block" />
          <div className="flex flex-col items-center text-center max-w-[150px]">
            <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2"><Laptop /></div>
            <span className="text-xs font-bold">Bakaláři Synchronizace</span>
          </div>
        </div>
      </div>
    </div>
  )
}
