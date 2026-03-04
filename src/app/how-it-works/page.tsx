"use client"

import React from "react"
import { HardDrive, Server, ShieldCheck, Zap, Laptop, Bell, ShieldAlert } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function HowItWorks() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 py-8 px-4">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight font-headline">Jak EduGate doplňuje Bakaláře</h1>
        <p className="text-xl text-muted-foreground">Naše technologie není konkurence, ale hardwarové rozšíření vašich možností.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-primary" />
              Hardwarová vrstva
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              Zatímco Bakaláři jsou software, my dodáváme hardware. Naše čtečky jsou vyvinuty přímo pro český školní trh. Podporují ISIC karty, čipy i mobilní NFC. Jsou odolné proti vandalismu a fungují i při výpadku internetu díky lokální paměti.
            </p>
          </CardContent>
        </Card>

        <Card className="border-secondary/20 bg-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-secondary" />
              Anti-Fraud Systém
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              EduGate Hub provádí křížovou kontrolu. Pokud student "pípne" u turniketu, ale následně se neobjeví ve třídě, systém automaticky upozorní učitele. Tím eliminujeme případy, kdy žák do budovy vejde, ale na výuku nedorazí.
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert className="bg-orange-50 border-orange-200">
        <ShieldAlert className="h-4 w-4 text-orange-600" />
        <AlertTitle className="text-orange-800">Chytrá prevence "černých pasažérů"</AlertTitle>
        <AlertDescription className="text-orange-700">
          Díky turniketům a pípání přímo ve třídách (Plán GATEKEEPER) systém pozná, pokud někdo "pípne" kartu za kamaráda, který ve škole fyzicky není.
        </AlertDescription>
      </Alert>

      <div className="p-8 rounded-3xl bg-muted border space-y-6">
        <h2 className="text-2xl font-bold text-center">Proces integrace</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col items-center text-center max-w-[150px]">
            <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2"><HardDrive className="text-primary" /></div>
            <span className="text-xs font-bold">Osazení čteček & Turniketů</span>
          </div>
          <div className="h-px bg-border flex-1 hidden md:block" />
          <div className="flex flex-col items-center text-center max-w-[150px]">
            <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2"><Zap className="text-primary" /></div>
            <span className="text-xs font-bold">Aktivace HW Hubu</span>
          </div>
          <div className="h-px bg-border flex-1 hidden md:block" />
          <div className="flex flex-col items-center text-center max-w-[150px]">
            <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2"><Laptop className="text-primary" /></div>
            <span className="text-xs font-bold">Automatický přenos do Bakalářů</span>
          </div>
        </div>
      </div>
    </div>
  )
}
