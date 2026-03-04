"use client"

import React, { useEffect, useState } from "react"
import { 
  Users, 
  UserMinus, 
  MapPin, 
  Clock, 
  ArrowRight,
  Sparkles,
  AlertCircle
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { teacherAttendanceSummary, type TeacherAttendanceSummaryOutput } from "@/ai/flows/teacher-attendance-summary"

export default function DashboardPage() {
  const [summary, setSummary] = useState<TeacherAttendanceSummaryOutput | null>(null)
  const [loading, setLoading] = useState(true)

  // Mock data for current class
  const classData = {
    teacherName: "Prof. Novak",
    className: "Informatika - 4.B",
    presentStudents: ["Alice", "Bob", "Charlie", "David", "Eva", "Filip", "Gita", "Honza", "Ivan", "Jana", "Karel", "Lenka", "Marek", "Nina", "Ondra", "Petr", "Quido", "Radek", "Sarka", "Tomas", "Ursula", "Vera", "Wanda", "Xenie"],
    absentStudents: ["Yveta", "Zdenek", "Adam", "Beata"],
    inBuildingStudents: ["Marek (Locker Room)"],
  }

  useEffect(() => {
    async function fetchSummary() {
      try {
        const result = await teacherAttendanceSummary(classData)
        setSummary(result)
      } catch (error) {
        console.error("Failed to fetch summary", error)
      } finally {
        setLoading(false)
      }
    }
    fetchSummary()
  }, [])

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary font-headline">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Current Session: {classData.className}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white px-3 py-1.5 rounded-full border shadow-sm">
          <Clock className="h-4 w-4" />
          <span>Lesson Ends in 25:40</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present Students</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classData.presentStudents.length}</div>
            <p className="text-xs text-muted-foreground">+2 since last 5m</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absent</CardTitle>
            <UserMinus className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classData.absentStudents.length}</div>
            <p className="text-xs text-muted-foreground">Expected: {classData.presentStudents.length + classData.absentStudents.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Building (Not in Class)</CardTitle>
            <MapPin className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classData.inBuildingStudents.length}</div>
            <p className="text-xs text-muted-foreground text-orange-600 font-medium">Action recommended</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <Progress value={85} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-primary/20 shadow-lg overflow-hidden">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <CardTitle className="font-headline">AI Paragon Summary</CardTitle>
              </div>
              <CardDescription>Intelligent real-time insights for the current lesson</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {loading ? (
                <div className="space-y-3 animate-pulse">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-full" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                </div>
              ) : (
                <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap leading-relaxed">
                  {summary?.summary}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Live NFC tap-ins at the classroom door</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Petr Svoboda", time: "10:02 AM", method: "ISIC Card" },
                  { name: "Jana Mala", time: "10:01 AM", method: "Mobile NFC" },
                  { name: "Tomas Dvorak", time: "09:59 AM", method: "ISIC Card" },
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-transparent hover:border-border transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        {log.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{log.name}</p>
                        <p className="text-xs text-muted-foreground">{log.method}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{log.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-secondary text-secondary-foreground shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-sm font-semibold mb-1">Potential Fraud Detected</p>
                <p className="text-xs opacity-90 mb-3">Cross-verification suggests 2 cards may have been used by the same person.</p>
                <Button size="sm" variant="secondary" className="w-full bg-white text-secondary hover:bg-white/90" asChild>
                  <a href="/fraud-check">Start Anti-Fraud Check</a>
                </Button>
              </div>
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-sm font-semibold mb-1">Bakaláři Out of Sync</p>
                <p className="text-xs opacity-90 mb-3">Sync scheduled for 10:30 AM.</p>
                <Button size="sm" variant="outline" className="w-full border-white/50 text-white hover:bg-white/10">
                  Force Sync Now
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Class Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Enrolled</span>
                  <span className="font-bold">28</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Late Arrivals</span>
                  <Badge variant="secondary">2</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Authorised Absence</span>
                  <span className="font-medium text-green-600">1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}