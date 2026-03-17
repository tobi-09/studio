
"use client"

import React, { useState } from "react"
import { 
  Check, 
  X, 
  Search, 
  Filter, 
  MoreVertical, 
  ChevronDown, 
  User,
  Calendar,
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Clock,
  Settings,
  ShieldAlert
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Checkbox } from "@/components/ui/checkbox"

export default function BakalariStylePage() {
  const { toast } = useToast()
  const [students, setStudents] = useState([
    { id: "S001", name: "Adam Adamec", nfcPresent: true, teacherPresent: null as boolean | null },
    { id: "S002", name: "Bílá Barbora", nfcPresent: true, teacherPresent: null as boolean | null },
    { id: "S003", name: "Černý Čestmír", nfcPresent: true, teacherPresent: null as boolean | null },
    { id: "S004", name: "Doležal David", nfcPresent: false, teacherPresent: null as boolean | null },
    { id: "S005", name: "Eliášová Eva", nfcPresent: true, teacherPresent: null as boolean | null },
  ])

  const handleVerify = (id: string, isPresent: boolean) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, teacherPresent: isPresent } : s))
  }

  const checkResults = () => {
    const fraudCases = students.filter(s => s.nfcPresent && s.teacherPresent === false)
    if (fraudCases.length > 0) {
      toast({
        variant: "destructive",
        title: "Nesrovnalost zjištěna!",
        description: `Detekován ${fraudCases.length} případ(y) zneužití karty. Událost byla zapsána do logu EduGate.`
      })
    } else {
      toast({
        title: "Hotovo",
        description: "Docházka byla úspěšně zapsána do Bakalářů."
      })
    }
  }

  return (
    <div className="bg-[#f0f2f5] min-h-screen -m-4 md:-m-8 p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Fake Bakalari Header */}
        <div className="bg-white rounded-xl shadow-sm border p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-[#444]">Nevyřízená absence</h1>
              <div className="flex gap-2 text-xs text-muted-foreground mt-1">
                <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100 font-bold">Rychlá volba</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right hidden sm:block">
               <p className="text-sm font-bold text-[#444]">Mgr. Ondřej Třídní</p>
               <p className="text-[10px] text-muted-foreground uppercase">učitel</p>
             </div>
             <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center border">
               <User className="h-6 w-6 text-slate-400" />
             </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[250px_1fr]">
          {/* Fake Sidebar Nav */}
          <div className="space-y-1 hidden md:block">
            {[
              { icon: LayoutDashboard, label: "Můj přehled" },
              { icon: User, label: "Karta žáka" },
              { icon: GraduationCap, label: "Klasifikace" },
              { icon: BookOpen, label: "Výuka", active: true },
              { icon: Clock, label: "Rozvrh" },
              { icon: ShieldAlert, label: "Absence", sub: true, active: true },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${item.active ? 'bg-[#0096db] text-white' : 'hover:bg-white text-slate-600'}`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="space-y-6">
            <Card className="border-none shadow-sm overflow-hidden">
              <div className="bg-white border-b px-6 py-2 flex items-center gap-6 overflow-x-auto no-scrollbar">
                <button className="px-4 py-3 border-b-2 border-[#0096db] text-[#0096db] text-sm font-bold whitespace-nowrap">Nevyřízená absence</button>
                <button className="px-4 py-3 border-b-2 border-transparent hover:border-slate-200 text-slate-500 text-sm font-medium whitespace-nowrap">3.B</button>
              </div>
              <CardContent className="p-6 space-y-6">
                {/* Bulk Actions Bar */}
                <div className="bg-slate-50 rounded-lg p-4 flex flex-wrap items-center gap-4 border border-slate-100">
                  <span className="text-sm font-bold text-slate-600">Přepsat vybrané</span>
                  <div className="flex items-center gap-2 bg-white border rounded px-3 py-1.5 text-sm">
                    <div className="h-4 w-4 bg-blue-500 rounded-sm flex items-center justify-center"><Check className="h-3 w-3 text-white" /></div>
                    <span>Přítomen</span>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-400">na</span>
                  <div className="flex items-center gap-2 bg-white border rounded px-3 py-1.5 text-sm opacity-50">
                    <div className="h-4 w-4 bg-slate-300 rounded-sm"></div>
                    <span>Nepřítomen</span>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </div>
                  <Button onClick={checkResults} size="sm" className="bg-[#0096db] hover:bg-[#0085c3] text-white font-bold ml-auto px-8">
                    Zapsat
                  </Button>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-[#0096db]">Třída 3.B</h3>
                  <Button variant="outline" size="sm" className="h-8 text-blue-600 border-blue-200 bg-blue-50">
                    <Filter className="h-3 w-3 mr-2" />
                    Filtr
                  </Button>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader className="bg-slate-50">
                      <TableRow>
                        <TableHead className="w-12"><Checkbox /></TableHead>
                        <TableHead className="font-bold text-slate-700">Jméno studenta</TableHead>
                        <TableHead className="font-bold text-slate-700">NFC log (EduGate)</TableHead>
                        <TableHead className="text-right font-bold text-slate-700">Status ve třídě</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.id} className="hover:bg-blue-50/30 transition-colors">
                          <TableCell><Checkbox /></TableCell>
                          <TableCell className="font-medium">{student.name}</TableCell>
                          <TableCell>
                            {student.nfcPresent ? (
                              <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-wider">
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                Pípnuto
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 text-slate-400 font-medium text-xs uppercase tracking-wider">
                                <div className="h-2 w-2 rounded-full bg-slate-300" />
                                Nepípnuto
                              </div>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <button 
                                onClick={() => handleVerify(student.id, true)}
                                className={`h-8 w-8 rounded border flex items-center justify-center transition-all ${student.teacherPresent === true ? 'bg-blue-500 border-blue-600 text-white shadow-inner' : 'bg-white border-slate-200 text-slate-300 hover:border-blue-300'}`}
                              >
                                <Check className="h-4 w-4" />
                              </button>
                              <button 
                                onClick={() => handleVerify(student.id, false)}
                                className={`h-8 w-8 rounded border flex items-center justify-center transition-all ${student.teacherPresent === false ? 'bg-red-500 border-red-600 text-white shadow-inner' : 'bg-white border-slate-200 text-slate-300 hover:border-red-300'}`}
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg flex gap-3">
                  <ShieldAlert className="h-5 w-5 text-orange-500 shrink-0" />
                  <p className="text-xs text-orange-700 leading-relaxed">
                    <b>Jak to funguje:</b> Pokud studenta vidíte ve třídě, klikněte na fajfku. Pokud ho nevidíte, klikněte na křížek. Pokud má student "Pípnuto", ale vy dáte křížek, EduGate Hub okamžitě pozná, že za něj kartu přiložil někdo jiný a událost nahlásí.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
