
"use client"

import React from "react"
import { 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  Clock, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Globe
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-16 py-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 px-4">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-4 py-1 text-sm border-primary/20">
            Nová generace školní docházky
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-headline leading-tight">
            EduGate Hub: Inteligentní brána do vaší školy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Komplexní ekosystém pro automatizaci docházky, zvýšení bezpečnosti a detailní analýzu pohybu studentů pomocí NFC technologie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="h-12 px-8 text-lg shadow-lg" asChild>
              <Link href="/analytics">Prohlédnout demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg shadow-md">
              Kontaktovat prodej
            </Button>
          </div>
          <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Rychlá instalace</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> GDPR kompatibilní</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Podpora 24/7</div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
             <img 
              src="https://images.unsplash.com/photo-1523240715632-d984bc4b99d1?auto=format&fit=crop&q=80&w=1000" 
              alt="Studenti v moderní škole" 
              className="w-full h-auto object-cover"
              data-ai-hint="modern school"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border md:flex items-center gap-4 hidden">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">15,000+</p>
              <p className="text-xs text-muted-foreground">Denně odbavených studentů</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline">Klíčové pilíře systému</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            EduGate Hub není jen čtečka karet. Je to ucelený systém, který šetří čas učitelům a dává klid rodičům.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle>Blesková Docházka</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Studenti se hlásí pomocí ISIC karet, mobilních telefonů nebo NFC čipů. Synchronizace s Bakaláři probíhá v reálném čase.
            </CardContent>
          </Card>
          <Card className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <CardTitle>Pokročilá Bezpečnost</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Okamžitá detekce neautorizovaných vstupů a monitoring kritických zón školy. Systém hlídá každý kout za vás.
            </CardContent>
          </Card>
          <Card className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-orange-500 text-white flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6" />
              </div>
              <CardTitle>Datové Analýzy</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Přehledné reporty pro vedení školy. Sledujte trendy docházky a identifikujte problémové oblasti dříve, než nastanou komplikace.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-primary/5 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 mx-4">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold font-headline leading-tight">
            Plná integrace s vašimi stávajícími systémy
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Globe className="h-5 w-5 text-primary" /></div>
              <div>
                <p className="font-semibold">Bakaláři & EduPage</p>
                <p className="text-sm text-muted-foreground">Automatický import rozvrhů a export docházky bez nutnosti ručního zadávání.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Lock className="h-5 w-5 text-primary" /></div>
              <div>
                <p className="font-semibold">Zabezpečení cloudu</p>
                <p className="text-sm text-muted-foreground">Data jsou šifrována a uložena v zabezpečených evropských datacentrech.</p>
              </div>
            </div>
          </div>
          <Button variant="secondary" className="shadow-lg">Zjistit více o integraci</Button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="space-y-4 mt-8">
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-center h-24 font-bold text-primary">Bakaláři</div>
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-center h-24 font-bold text-secondary">EduPage</div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-center h-24 font-bold text-orange-500">Google Workspace</div>
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-center h-24 font-bold text-blue-800">Office 365</div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </div>
  )
}
