
"use client"

import React from "react"
import { 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Lock,
  Fingerprint,
  Bell,
  HardDrive,
  ShieldAlert,
  Users,
  AlertTriangle,
  Clock,
  Shield
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-24 py-12 md:py-20 max-w-7xl mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 px-4 text-center lg:text-left">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-4 py-1.5 text-sm border-primary/20 font-bold">
              Hardwarový plugin pro Bakaláře
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground font-headline leading-[1.1]">
              EduGate Hub: Hardware, který mluví s Bakaláři
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Už žádné ruční zapisování docházky. EduGate propojí vaše třídy a vchody s třídní knihou. Rychle, bezpečně a bez nutnosti měnit váš stávající software.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="h-14 px-8 text-lg shadow-xl" asChild>
              <Link href="#pricing">Zobrazit plány <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg shadow-md bg-white" asChild>
              <Link href="/how-it-works">Technické řešení</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 relative w-full px-4">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-black/5 rotate-1">
             <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
              alt="Hardware ve škole" 
              className="w-full h-auto object-cover aspect-video lg:aspect-square"
              data-ai-hint="smart school technology"
            />
          </div>
        </div>
      </section>

      {/* SYSTÉMOVÁ VÝZVA - Nahrazeno obrázkem */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src="/studio/img/oznamení.png" 
              alt="Systémová výzva: Kontrola přítomnosti EduGate" 
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      {/* UNIKÁTNÍ FUNKCE PRO VŠECHNY PLÁNY */}
      <section className="px-4 py-16 bg-blue-50/50 rounded-[3rem] border border-blue-100">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <Badge variant="outline" className="border-primary/50 text-primary font-bold">UNIKÁTNÍ FUNKCE PRO VŠECHNY PLÁNY</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Stop podvodům: Inteligentní kontrola</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technologie EduGate aktivně hlídá disciplínu studentů pomocí systému náhodných verifikací.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-sm bg-white">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Náhodná výzva učiteli</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  V náhodný čas během vyučování systém automaticky vyzve učitele k ručnímu zápisu počtu žáků.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white">
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-xl">Okamžitá kontrola</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pokud počet „pípnutí“ nesouhlasí se zadaným počtem, systém ihned detekuje podvod.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white md:col-span-2 lg:col-span-1">
              <CardHeader>
                <ShieldAlert className="h-8 w-8 text-red-500 mb-2" />
                <CardTitle className="text-xl">Automatický Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Zneužitá karta je okamžitě nahlášena vedení školy k vyřešení.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section id="pricing" className="px-4 space-y-16 scroll-mt-24">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Vyberte si úroveň digitalizace</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Naše hardwarové sady jsou navrženy pro různé potřeby a velikosti škol.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="flex flex-col border-2 hover:border-primary/50 transition-all bg-white shadow-sm hover:shadow-xl rounded-[2rem]">
            <CardHeader className="pb-8">
              <Badge className="w-fit mb-4 font-bold" variant="outline">Základní</Badge>
              <CardTitle className="text-3xl font-bold">STANDARD</CardTitle>
              <p className="text-primary font-black text-sm uppercase tracking-wider">Rychlá třídnice</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Hardware:</b> NFC čtečka do každé třídy.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Notifikace:</b> Upozornění na žáky v budově, kteří nejsou v hodině.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Stop podvodům:</b> Systém náhodných verifikací v ceně.</span></li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="w-full h-12 rounded-xl" variant="outline">Poptat Standard</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-2 border-primary shadow-2xl md:scale-105 relative bg-white z-10 rounded-[2rem]">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">Doporučujeme</div>
            <CardHeader className="pb-8">
              <Badge className="w-fit mb-4 bg-primary font-bold">Nejoblíbenější</Badge>
              <CardTitle className="text-3xl font-bold text-primary">GATEKEEPER</CardTitle>
              <p className="text-secondary font-black text-sm uppercase tracking-wider">Bezpečný areál</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="bg-muted/50 p-3 rounded-xl border border-dashed text-[10px] font-black text-muted-foreground text-center uppercase tracking-tighter">Obsahuje vše z Plánu STANDARD</div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>HW:</b> Turniket nebo el. bzučák u hlavního vchodu.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Anti-Fraud:</b> Křížová kontrola: Vchod vs. Učebna.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Zabezpečení:</b> Automatické zamykání vchodu po zvonění.</span></li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="w-full h-12 shadow-lg rounded-xl">Konzultace zdarma</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-2 hover:border-primary/50 transition-all bg-white shadow-sm hover:shadow-xl rounded-[2rem]">
            <CardHeader className="pb-8">
              <Badge className="w-fit mb-4 font-bold" variant="secondary">Enterprise</Badge>
              <CardTitle className="text-3xl font-bold">SMART CAMPUS</CardTitle>
              <p className="text-orange-600 font-black text-sm uppercase tracking-wider">Plná digitalizace</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="bg-muted/50 p-3 rounded-xl border border-dashed text-[10px] font-black text-muted-foreground text-center uppercase tracking-tighter">Obsahuje Plán STANDARD + GATEKEEPER</div>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>HW:</b> Smart zámky na kabinetech a odborných učebnách.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Jídelna & Knihovna:</b> Integrace s ISIC kartou.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> <span><b>Časové sloty:</b> Dynamické otevírání dveří dle rozvrhu.</span></li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="w-full h-12 rounded-xl" variant="outline">Kontaktovat specialistu</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-muted/30 rounded-[3rem] text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight">Software už máte. My dodáme "smysly".</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              EduGate Hub je hardwarový most. Učitelé pracují tam, kde jsou zvyklí – v <b>Bakalářích</b>. My jen zajistíme, aby se tam data objevila sama, okamžitě a bez chyb.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            <div className="p-6 bg-white rounded-2xl shadow-sm border flex flex-col items-center gap-3">
              <Fingerprint className="h-8 w-8 text-primary" />
              <span className="text-sm font-bold">ISIC & NFC</span>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border flex flex-col items-center gap-3">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-sm font-bold">Real-time přenos</span>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border flex flex-col items-center gap-3">
              <Lock className="h-8 w-8 text-primary" />
              <span className="text-sm font-bold">Smart Zámky</span>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border flex flex-col items-center gap-3">
              <Bell className="h-8 w-8 text-primary" />
              <span className="text-sm font-bold">Notifikace</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
