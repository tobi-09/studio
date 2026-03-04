"use client"

import React from "react"
import { 
  Zap, 
  ShieldCheck, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  HardDrive,
  Lock,
  DoorOpen,
  Fingerprint,
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
            Hardwarový plugin pro systém Bakaláři
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-headline leading-tight">
            EduGate Hub: Chytrý hardware pro vaši školu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Nepotřebujete nový software. EduGate propojí vaše stávající Bakaláře s moderními čtečkami. Vyřešíme docházku, bezpečnost i zámky – data uvidíte tam, kde jste zvyklí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="h-12 px-8 text-lg shadow-lg" asChild>
              <Link href="#pricing">Vybrat balíček <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg shadow-md" asChild>
              <Link href="/how-it-works">Jak to funguje</Link>
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

      {/* Pricing / Packages */}
      <section id="pricing" className="px-4 space-y-12 pb-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold font-headline">Naše plány nasazení</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Od rychlé evidence v hodinách až po plně autonomní školní areál.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Package 1: STANDARD */}
          <Card className="flex flex-col border-2 hover:border-primary transition-all bg-card">
            <CardHeader>
              <Badge className="w-fit mb-2" variant="outline">Plán 1</Badge>
              <CardTitle className="text-2xl font-bold">STANDARD</CardTitle>
              <p className="text-muted-foreground text-sm font-semibold text-primary">Rychlá třídnice</p>
              <p className="text-muted-foreground text-xs">Cíl: Maximální úspora času učitele bez zásahu do budovy.</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Hardware:</b> Samostatná NFC čtečka do každé třídy.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Instalace:</b> Do běžné zásuvky nebo přímo do vypínače světel.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Software:</b> Okamžitý přenos pípnutí do Bakalářů.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Výhoda:</b> Učitel nemusí ručně odklikávat 30 žáků.</span></li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Poptat Standard</Button>
            </CardFooter>
          </Card>

          {/* Package 2: GATEKEEPER */}
          <Card className="flex flex-col border-2 border-primary shadow-xl scale-105 relative bg-white">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-tighter">Nejoblíbenější</div>
            <CardHeader>
              <Badge className="w-fit mb-2 bg-primary">Plán 2</Badge>
              <CardTitle className="text-2xl font-bold text-primary">GATEKEEPER</CardTitle>
              <p className="text-muted-foreground text-sm font-semibold text-secondary">Bezpečný vchod</p>
              <p className="text-muted-foreground text-xs">Cíl: Kontrola vstupu do budovy + prevence podvodů.</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <p className="text-xs font-bold text-muted-foreground bg-muted p-2 rounded">Obsahuje vše z Plánu STANDARD</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Hardware:</b> Turniket nebo el. bzučák u hlavního vchodu.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Anti-Fraud:</b> Porovnání pípnutí u vchodu vs. v učebně.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Notifikace:</b> Upozornění na žáky v budově, kteří nejsou v hodině.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Variabilita:</b> Turnikety pro vysoký průtok lidí.</span></li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full shadow-lg">Objednat prohlídku</Button>
            </CardFooter>
          </Card>

          {/* Package 3: SMART CAMPUS */}
          <Card className="flex flex-col border-2 hover:border-primary transition-all bg-card">
            <CardHeader>
              <Badge className="w-fit mb-2" variant="secondary">Plán 3</Badge>
              <CardTitle className="text-2xl font-bold">SMART CAMPUS</CardTitle>
              <p className="text-muted-foreground text-sm font-semibold text-orange-600">Plná kontrola</p>
              <p className="text-muted-foreground text-xs">Cíl: Karta jako univerzální klíč k areálu.</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <p className="text-xs font-bold text-muted-foreground bg-muted p-2 rounded">Obsahuje STANDARD + GATEKEEPER</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Smart Zámky:</b> Přístup do kabinetů povolen jen v určené časy.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Jídelna & Knihovna:</b> Automatizovaný výdej a evidence.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Audit:</b> Historie pohybu pro případy krádeží nebo poškození majetku.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" /> <span><b>Časové sloty:</b> Vstup jen konkrétním třídám dle rozvrhu.</span></li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Kontaktovat specialistu</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Integration Highlight */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold font-headline">Software už máte. My dodáme "smysly".</h2>
          <p className="text-lg text-muted-foreground">
            EduGate Hub nevyžaduje instalaci nového portálu pro učitele. Všechna data proudí přímo do <b>Bakalářů</b>. Naše zařízení se postarají o to, aby informace o docházce a bezpečnosti byly 100% přesné.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-4 bg-white rounded-xl shadow-sm border flex flex-col items-center gap-2">
              <Fingerprint className="text-primary h-6 w-6" />
              <span className="text-xs font-bold">ISIC / Čipy</span>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border flex flex-col items-center gap-2">
              <Zap className="text-primary h-6 w-6" />
              <span className="text-xs font-bold">Real-time přenos</span>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border flex flex-col items-center gap-2">
              <Lock className="text-primary h-6 w-6" />
              <span className="text-xs font-bold">Bezpečné zámky</span>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border flex flex-col items-center gap-2">
              <DoorOpen className="text-primary h-6 w-6" />
              <span className="text-xs font-bold">Turnikety</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
