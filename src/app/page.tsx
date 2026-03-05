"use client"

import React from "react"
import { 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Lock,
  DoorOpen,
  Fingerprint,
  UserCheck
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-24 py-12 md:py-20 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 px-4">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-4 py-1.5 text-sm border-primary/20">
              Hardwarový plugin pro systém Bakaláři
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground font-headline leading-[1.1]">
              EduGate Hub: Chytrý hardware pro vaši školu
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Nepotřebujete nový software. EduGate propojí vaše stávající Bakaláře s moderními čtečkami. Vyřešíme docházku, bezpečnost i zámky – data uvidíte tam, kde jste zvyklí.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="h-14 px-8 text-lg shadow-xl" asChild>
              <Link href="#pricing">Vybrat balíček <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg shadow-md bg-white" asChild>
              <Link href="/how-it-works">Jak to funguje</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 relative w-full">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-black/5">
             <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
              alt="Hardware a technologie ve škole" 
              className="w-full h-auto object-cover aspect-video lg:aspect-square"
              data-ai-hint="smart hardware"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border hidden md:block">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
              <div className="text-sm">
                <p className="font-bold leading-none">Plná integrace</p>
                <p className="text-muted-foreground text-xs mt-1">S vašimi Bakaláři</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section id="pricing" className="px-4 space-y-16 scroll-mt-24">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Naše plány nasazení</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Vyberte si úroveň digitalizace, která vyhovuje vaší škole. Od rychlé evidence až po plně autonomní areál.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Package 1: STANDARD */}
          <Card className="flex flex-col border-2 hover:border-primary/50 transition-all bg-white shadow-sm hover:shadow-xl">
            <CardHeader className="pb-8">
              <Badge className="w-fit mb-4" variant="outline">Plán 1</Badge>
              <CardTitle className="text-3xl font-bold">STANDARD</CardTitle>
              <p className="text-primary font-bold text-sm tracking-tight">Rychlá třídnice</p>
              <p className="text-muted-foreground text-xs leading-relaxed mt-2">Cíl: Maximální úspora času učitele při zápisu docházky přímo v hodině.</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Hardware:</b> Samostatná NFC čtečka do každé třídy.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Instalace:</b> Do zásuvky nebo přímo do vypínače světel.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Notifikace:</b> Upozornění na žáky v budově, kteří nejsou v hodině.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Software:</b> Okamžitý přenos pípnutí do Bakalářů.</span></li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="w-full h-12" variant="outline">Poptat Standard</Button>
            </CardFooter>
          </Card>

          {/* Package 2: GATEKEEPER */}
          <Card className="flex flex-col border-2 border-primary shadow-2xl md:scale-105 relative bg-white z-10">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">Nejoblíbenější</div>
            <CardHeader className="pb-8">
              <Badge className="w-fit mb-4 bg-primary">Plán 2</Badge>
              <CardTitle className="text-3xl font-bold text-primary">GATEKEEPER</CardTitle>
              <p className="text-secondary font-bold text-sm tracking-tight">Bezpečný vchod</p>
              <p className="text-muted-foreground text-xs leading-relaxed mt-2">Cíl: Kontrola vstupu do budovy + pokročilá prevence podvodů s kartami.</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="bg-muted/50 p-3 rounded-xl border border-dashed text-xs font-bold text-muted-foreground text-center">Obsahuje vše z Plánu STANDARD</div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Hardware:</b> Turniket nebo el. bzučák u hlavního vchodu.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Anti-Fraud:</b> Porovnání pípnutí u vchodu vs. v učebně.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Notifikace:</b> Okamžité varování při detekci "fiktivní" přítomnosti.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Variabilita:</b> Turnikety pro plynulý průchod stovek lidí.</span></li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="w-full h-12 shadow-lg">Objednat prohlídku školy</Button>
            </CardFooter>
          </Card>

          {/* Package 3: SMART CAMPUS */}
          <Card className="flex flex-col border-2 hover:border-primary/50 transition-all bg-white shadow-sm hover:shadow-xl">
            <CardHeader className="pb-8">
              <Badge className="w-fit mb-4" variant="secondary">Plán 3</Badge>
              <CardTitle className="text-3xl font-bold">SMART CAMPUS</CardTitle>
              <p className="text-orange-600 font-bold text-sm tracking-tight">Plná kontrola</p>
              <p className="text-muted-foreground text-xs leading-relaxed mt-2">Cíl: Karta jako univerzální klíč k celému areálu a službám.</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="bg-muted/50 p-3 rounded-xl border border-dashed text-xs font-bold text-muted-foreground text-center">Obsahuje STANDARD + GATEKEEPER</div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Smart Zámky:</b> Přístup do kabinetů a skladů dle rozvrhu.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Jídelna & Knihovna:</b> Jednotná evidence výdejů na ISIC kartu.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Audit:</b> Kompletní historie pohybu pro maximální bezpečnost majetku.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Časové sloty:</b> Dynamické otevírání dveří podle rozvrhu v Bakalářích.</span></li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="w-full h-12" variant="outline">Kontaktovat specialistu</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Stop Podvodům Section */}
      <section className="px-4 py-16 bg-secondary text-secondary-foreground rounded-[3rem] shadow-2xl mx-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <ShieldCheck className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-headline">Stop podvodům: Inteligentní kontrola</h2>
            </div>
            <Badge variant="outline" className="text-white border-white/30 text-lg py-1 px-4">Součást všech plánů</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed opacity-90">
                Naše čtečky nejsou jen pasivní sběrače dat. Systém EduGate Hub aktivně hlídá disciplínu studentů pomocí náhodných verifikací.
              </p>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md space-y-4">
                <div className="flex items-center gap-3 text-white font-bold text-xl">
                  <UserCheck className="h-6 w-6 text-green-300" />
                  <span>Náhodná výzva učiteli</span>
                </div>
                <p className="text-sm opacity-80 leading-relaxed">
                  V náhodně vybraný čas (např. v polovině hodiny) vyzve systém učitele k ručnímu zápisu aktuálního počtu žáků přímo v rozhraní Bakalářů.
                </p>
                <div className="pt-2">
                  <p className="text-sm font-bold bg-white/20 p-3 rounded-lg">
                    Pokud počet „pípnutí“ nesouhlasí se zadaným počtem, bot okamžitě odhalí zneužitou kartu a nahlásí ji vedení.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 bg-white/10 rounded-[2rem] blur-2xl"></div>
              <div className="relative bg-white text-foreground border rounded-[2rem] p-8 shadow-2xl transform transition-all duration-500 hover:rotate-1">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">Bezpečnostní audit</span>
                  <Badge variant="destructive" className="animate-pulse shadow-md">VAROVÁNÍ: NESOULAD</Badge>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> NFC Logy</span>
                      <span>24 žáků</span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-full transition-all duration-1000"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="flex items-center gap-2"><UserCheck className="h-4 w-4 text-secondary" /> Fyzicky přítomno</span>
                      <span className="text-destructive font-black">22 žáků</span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-destructive w-3/4 transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 rounded-xl bg-destructive/5 border border-destructive/20 italic text-sm text-destructive-foreground">
                  "Detekovány 2 zneužité karty. Studenti ID: S042 a S015 nebyli učitelem potvrzeni, přestože jsou v systému označeni jako přítomní."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Highlight */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight">Software už máte. My dodáme "smysly".</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              EduGate Hub nevyžaduje instalaci nového portálu pro učitele. Všechna data o docházce a bezpečnosti proudí přímo do <b>Bakalářů</b>. Naše zařízení se postarají o to, aby informace byly 100% přesné.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            <div className="p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow flex flex-col items-center gap-3">
              <div className="h-12 w-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                <Fingerprint className="h-6 w-6" />
              </div>
              <span className="text-sm font-bold">ISIC / Čipy</span>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow flex flex-col items-center gap-3">
              <div className="h-12 w-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6" />
              </div>
              <span className="text-sm font-bold">Real-time přenos</span>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow flex flex-col items-center gap-3">
              <div className="h-12 w-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                <Lock className="h-6 w-6" />
              </div>
              <span className="text-sm font-bold">Bezpečné zámky</span>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow flex flex-col items-center gap-3">
              <div className="h-12 w-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                <DoorOpen className="h-6 w-6" />
              </div>
              <span className="text-sm font-bold">Turnikety</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
