
"use client"

import React from "react"
import { ShieldAlert, MapPin, Activity, Bell, ShieldCheck, Siren, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function SecurityShowcasePage() {
  const mockEvents = [
    { individualId: "U991", timestamp: new Date().toISOString(), location: "Hlavní vchod", tappedIn: true },
    { individualId: "S024", timestamp: new Date().toISOString(), location: "Zadní branka (Bypass)", tappedIn: false },
    { individualId: "U993", timestamp: new Date().toISOString(), location: "Knihovna", tappedIn: true },
    { individualId: "U995", timestamp: new Date().toISOString(), location: "Tělocvična", tappedIn: true },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">Bezpečnostní Monitoring</h1>
          <p className="text-muted-foreground">Ukázka reálného dohledu nad pohybem v objektu školy.</p>
        </div>
        <Badge className="bg-green-500 px-4 py-1">
          SYSTÉM AKTIVNÍ
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-primary text-primary-foreground md:col-span-1 border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Stav Senzorů
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Activity className="h-10 w-10" />
              </div>
              <p className="text-sm font-medium">Sledováno: 48 nodů</p>
              <p className="text-xs opacity-80">Všechny brány pod dohledem</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Vytížení sítě</span>
                <span>24%</span>
              </div>
              <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-1/4" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1">
              <CardTitle>Log detekovaných událostí</CardTitle>
              <CardDescription>Systém automaticky vyhodnocuje soulad s rozvrhem a přístupovými právy.</CardDescription>
            </div>
            <Badge variant="outline" className="border-primary text-primary">REÁLNÝ ČAS</Badge>
          </CardHeader>
          <CardContent>
             <div className="p-6 rounded-xl border border-blue-200 bg-blue-50/50 space-y-4">
                <div className="flex gap-4">
                  <ShieldCheck className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">Standardní provoz</h3>
                    <p className="text-sm text-foreground leading-relaxed">
                      EduGate Hub monitoruje všechny vstupy. Pokud student projde branou bez přiložení karty (např. v závěsu za jinou osobou), systém okamžitě upozorní dozor na možný bypass.
                    </p>
                  </div>
                </div>
              </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Poslední záznamy ze čteček
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                {mockEvents.map((event, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-lg border bg-muted/20">
                    <MapPin className="h-5 w-5 mt-1 text-muted-foreground" />
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-semibold">ID: {event.individualId}</span>
                        <span className="text-[10px] text-muted-foreground">{new Date(event.timestamp).toLocaleTimeString()}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{event.location}</p>
                      <Badge variant={event.tappedIn ? "secondary" : "destructive"} className="text-[10px] h-4">
                        {event.tappedIn ? "Ověřeno NFC" : "DETEKCE BYPASSU"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-secondary" />
              Notifikace a varování
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
              <Info className="h-5 w-5 text-secondary shrink-0" />
              <div>
                <p className="text-sm font-medium">Plánovaná údržba</p>
                <p className="text-xs text-muted-foreground">V sobotu proběhne aktualizace firmwaru pro čtečky v pavilonu B.</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-orange-50 border border-orange-100">
              <ShieldAlert className="h-5 w-5 text-orange-500 shrink-0" />
              <div>
                <p className="text-sm font-medium">Neautorizovaný přístup</p>
                <p className="text-xs text-muted-foreground">Pokus o vstup do kabinetu biologie mimo provozní hodiny zamítnut.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Info({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  )
}
