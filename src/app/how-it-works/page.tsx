"use client"

import React from "react"
import { HardDrive, Server, ShieldCheck, Zap, Laptop, ShieldAlert, Fingerprint } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function HowItWorks() {
  return (
    <div className="max-w-6xl mx-auto space-y-16 py-16 px-4">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-headline leading-tight">Jak EduGate doplňuje Bakaláře</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Naše technologie není konkurence, ale hardwarové rozšíření vašich možností.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border-primary/20 bg-primary/5 shadow-lg border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Server className="h-6 w-6 text-primary" />
              Hardwarová vrstva
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-muted-foreground">
              Zatímco Bakaláři jsou software, my dodáváme hardware. Naše čtečky jsou vyvinuty přímo pro český školní trh. Podporují ISIC karty, čipy i mobilní NFC. Jsou odolné proti vandalismu a fungují i při výpadku internetu díky lokální paměti a záložnímu zdroji.
            </p>
          </CardContent>
        </Card>

        <Card className="border-secondary/20 bg-secondary/5 shadow-lg border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <ShieldCheck className="h-6 w-6 text-secondary" />
              Anti-Fraud Systém
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-muted-foreground">
              EduGate Hub provádí křížovou kontrolu dat v reálném čase. Pokud student "pípne" u turniketu, ale následně nedorazí do třídy (nepípne u dveří učebny), systém okamžitě upozorní dozor. Tím eliminujeme případy, kdy žák "jen" vejde do budovy a zmizí.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary text-primary-foreground p-12 rounded-[3rem] shadow-2xl space-y-10">
        <div className="flex items-center gap-6">
          <Fingerprint className="h-12 w-12 text-white/50" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Technický proces integrace</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="space-y-4 bg-white/10 p-6 rounded-2xl">
            <div className="h-10 w-10 bg-white text-primary rounded-full flex items-center justify-center font-bold text-xl">1</div>
            <h3 className="text-xl font-bold flex items-center gap-2">Sběr dat čtečkou</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Student přiloží ISIC nebo mobil k EduGate čtečce u vchodu nebo ve třídě. Čtečka data zašifruje a odešle do Hubu.
            </p>
          </div>
          <div className="space-y-4 bg-white/10 p-6 rounded-2xl">
            <div className="h-10 w-10 bg-white text-primary rounded-full flex items-center justify-center font-bold text-xl">2</div>
            <h3 className="text-xl font-bold flex items-center gap-2">Zpracování Hubem</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Centrální Hub vyhodnotí identitu žáka, zkontroluje jeho rozvrh a provede křížovou kontrolu přítomnosti v budově.
            </p>
          </div>
          <div className="space-y-4 bg-white/10 p-6 rounded-2xl">
            <div className="h-10 w-10 bg-white text-primary rounded-full flex items-center justify-center font-bold text-xl">3</div>
            <h3 className="text-xl font-bold flex items-center gap-2">Zápis do Bakalářů</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Data jsou přes naše API okamžitě zapsána do třídní knihy v Bakalářích. Učitel jen vidí hotovou docházku.
            </p>
          </div>
        </div>
      </div>

      <Alert className="bg-orange-50 border-orange-200 p-6">
        <ShieldAlert className="h-6 w-6 text-orange-600" />
        <AlertTitle className="text-xl font-bold text-orange-800 ml-2">Chytrá prevence "černých pasažérů"</AlertTitle>
        <AlertDescription className="text-orange-700 mt-2 text-base leading-relaxed">
          Díky kombinaci turniketů a pípání přímo ve třídách systém pozná, pokud někdo "pípne" kartu za kamaráda, který ve škole fyzicky není. Při náhodné kontrole učitelem systém automaticky zneplatní podvodné záznamy.
        </AlertDescription>
      </Alert>

      <div className="p-12 rounded-[3rem] bg-muted border-2 space-y-10 text-center">
        <h2 className="text-3xl font-bold">Proces nasazení na vaší škole</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex flex-col items-center text-center max-w-[200px] space-y-3">
            <div className="h-16 w-16 rounded-2xl bg-white shadow-md flex items-center justify-center border-t-4 border-primary"><HardDrive className="text-primary h-8 w-8" /></div>
            <span className="text-sm font-bold">Fyzické osazení čteček & Turniketů</span>
          </div>
          <div className="h-px bg-border flex-1 hidden md:block" />
          <div className="flex flex-col items-center text-center max-w-[200px] space-y-3">
            <div className="h-16 w-16 rounded-2xl bg-white shadow-md flex items-center justify-center border-t-4 border-primary"><Zap className="text-primary h-8 w-8" /></div>
            <span className="text-sm font-bold">Aktivace Centrálního Hubu</span>
          </div>
          <div className="h-px bg-border flex-1 hidden md:block" />
          <div className="flex flex-col items-center text-center max-w-[200px] space-y-3">
            <div className="h-16 w-16 rounded-2xl bg-white shadow-md flex items-center justify-center border-t-4 border-primary"><Laptop className="text-primary h-8 w-8" /></div>
            <span className="text-sm font-bold">Automatický přenos do Bakalářů</span>
          </div>
        </div>
      </div>
    </div>
  )
}
