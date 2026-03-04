"use client"

import React, { useState } from "react"
import { Check, X, ShieldAlert, Fingerprint, UserCheck, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export default function AntiFraudPage() {
  const { toast } = useToast()
  const [students, setStudents] = useState([
    { id: "S001", name: "Alice Blue", nfcPresent: true, teacherPresent: null as boolean | null },
    { id: "S002", name: "Bob Green", nfcPresent: true, teacherPresent: null as boolean | null },
    { id: "S003", name: "Charlie Brown", nfcPresent: true, teacherPresent: null as boolean | null },
    { id: "S004", name: "David Black", nfcPresent: false, teacherPresent: null as boolean | null },
    { id: "S005", name: "Eva White", nfcPresent: true, teacherPresent: null as boolean | null },
  ])

  const handleVerify = (id: string, isPresent: boolean) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, teacherPresent: isPresent } : s))
  }

  const checkResults = () => {
    const fraudCases = students.filter(s => s.nfcPresent && s.teacherPresent === false)
    if (fraudCases.length > 0) {
      toast({
        variant: "destructive",
        title: "Fraud Detected!",
        description: `${fraudCases.length} potential card misuse case(s) found. Logging event for discipline.`
      })
    } else {
      toast({
        title: "Check Complete",
        description: "Attendance records verified and synchronized with NFC data."
      })
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">Anti-Fraud Verification</h1>
          <p className="text-muted-foreground">Cross-reference NFC taps with physical classroom presence.</p>
        </div>
        <Button onClick={checkResults} className="bg-secondary hover:bg-secondary/90 shadow-md">
          <Fingerprint className="mr-2 h-4 w-4" />
          Complete Check
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Manual Enrollment Check</CardTitle>
            <CardDescription>Confirm the students physically sitting in the room.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>NFC Status</TableHead>
                  <TableHead className="text-right">Teacher Confirmation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>
                      {student.nfcPresent ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                          <Check className="mr-1 h-3 w-3" /> Tapped
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-muted-foreground">
                          <X className="mr-1 h-3 w-3" /> No Entry
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          size="sm" 
                          variant={student.teacherPresent === true ? "default" : "outline"}
                          className={student.teacherPresent === true ? "bg-primary" : ""}
                          onClick={() => handleVerify(student.id, true)}
                        >
                          <UserCheck className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant={student.teacherPresent === false ? "destructive" : "outline"}
                          onClick={() => handleVerify(student.id, false)}
                        >
                          <ShieldAlert className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-secondary/30 bg-secondary/5 shadow-inner">
            <CardHeader>
              <CardTitle className="text-lg">Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex gap-3">
                <div className="mt-1 h-4 w-4 text-secondary"><Check className="h-full w-full" /></div>
                <p>Visually identify each student in the class.</p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 h-4 w-4 text-secondary"><Fingerprint className="h-full w-full" /></div>
                <p>If a student is present physically but NFC says "No Entry", they likely forgot their card.</p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 h-4 w-4 text-destructive"><ShieldAlert className="h-4 w-4" /></div>
                <p><b>Fraud Case:</b> If NFC says "Tapped" but student is <b>not</b> here, a peer likely tapped for them.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Wait...
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-orange-700">
                Found a discrepancy? EduGate Hub automatically generates a report for school administration and invalidates the session record for that student.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}