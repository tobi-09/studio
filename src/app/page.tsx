
"use client"

import React from "react"
import { 
  Zap, 
  ShieldCheck, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  HardDrive,
  LayoutGrid,
  BellRing
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-20 py-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 px-4">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-4 py-1 text-sm border-primary/20">
            Oficiální hardwarový partner pro Bakaláře
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-headline leading-tight">
            EduGate Hub: Srdce vaší chytré školy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Nepotřebujete nový systém. EduGate propojí vaše stávající Bakaláře s moderními čtečkami. Řešíme hardware, notifikace a bezpečnost – zbytek už znáte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="h-12 px-8 text-lg shadow-lg" asChild>
              <Link href="#pricing">Vybrat balíček <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg shadow-md">
              Technická specifikace
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
             <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
              alt="Hardware a technologie ve škole" 
              className="w-full h-auto object-cover"
              data-ai-hint="smart hardware"
            />
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="px-4 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold font-headline">Jak to funguje?</h2>
          <p className="text-muted-foreground">
            EduGate Hub funguje jako inteligentní plugin. Naše čtečky nainstalujete u vchodů nebo do tříd, propojíte je s naším hubem a data okamžitě proudí do vašeho rozhraní v Bakalářích.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
              <HardDrive className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl">1. Instalace HW</h3>
            <p className="text-sm text-muted-foreground">Čtečky do zásuvek nebo turnikety. Jednoduché zapojení bez nutnosti složité kabeláže.</p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto">
              <Settings className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl">2. Propojení s Bakaláři</h3>
            <p className="text-sm text-muted-foreground">Náš plugin se integruje přímo do vašeho školního systému. Žádné nové hesla, žádné nové weby.</p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto">
              <BellRing className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl">3. Chytré notifikace</h3>
            <p className="text-sm text-muted-foreground">EduGate hlídá neobvyklé vzorce a posílá varování přímo do mobilní aplikace učitelům a rodičům.</p>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section id="pricing" className="px-4 space-y-12 pb-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold font-headline">Vyberte si svůj EduGate balíček</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Řešení na míru pro malé venkovské školy i velké městské areály.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Package 1 */}
          <Card className="flex flex-col border-2 hover:border-primary transition-all">
            <CardHeader>
              <Badge className="w-fit mb-2">Basic</Badge>
              <CardTitle className="text-2xl font-bold">Zásuvkový Modul</CardTitle>
              <p className="text-muted-foreground text-sm">Ideální pro třídy a kabinety.</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="text-3xl font-bold">9 900 Kč <span className="text-sm font-normal text-muted-foreground">/ set</span></div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> 2x NFC čtečka do zásuvky</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Cloudový bridge</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Plugin pro Bakaláře v ceně</li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="h-4 w-4" /> Bez mechanické bariéry</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Poptat řešení</Button>
            </CardFooter>
          </Card>

          {/* Package 2 */}
          <Card className="flex flex-col border-2 border-primary shadow-xl scale-105 relative bg-white">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-tighter">Nejoblíbenější</div>
            <CardHeader>
              <Badge className="w-fit mb-2 bg-primary">Standard</Badge>
              <CardTitle className="text-2xl font-bold text-primary">Turniketový Systém</CardTitle>
              <p className="text-muted-foreground text-sm">Kompletní kontrola vstupu do budovy.</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="text-3xl font-bold">45 000 Kč <span className="text-sm font-normal text-muted-foreground">/ vchod</span></div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Tříramenný turniket</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Integrovaná biometrie / NFC</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Antipanik funkce</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Notifikace o bypassu (přelezení)</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full shadow-lg">Objednat prohlídku</Button>
            </CardFooter>
          </Card>

          {/* Package 3 */}
          <Card className="flex flex-col border-2 hover:border-primary transition-all">
            <CardHeader>
              <Badge className="w-fit mb-2" variant="secondary">Enterprise</Badge>
              <CardTitle className="text-2xl font-bold">Custom Areál</CardTitle>
              <p className="text-muted-foreground text-sm">Pro velké školy a univerzitní areály.</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="text-3xl font-bold">Individuální</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Propojení s jídelnou a knihovnou</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> API pro vlastní vývoj</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Prioritní 24/7 podpora</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Instalace na klíč</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Kontaktovat obchodníka</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
