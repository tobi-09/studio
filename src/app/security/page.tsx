"use client"

import React, { useEffect, useState } from "react"
import { ShieldAlert, MapPin, Activity, Bell, Info, ShieldCheck, Siren } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { detectSecurityAnomaly, type SecurityAnomalyDetectionOutput } from "@/ai/flows/security-anomaly-detection"

export default function SecurityPage() {
  const [anomaly, setAnomaly] = useState<SecurityAnomalyDetectionOutput | null>(null)
  const [loading, setLoading] = useState(true)

  const mockEvents = [
    { individualId: "U991", timestamp: new Date().toISOString(), location: "Main Gate", tappedIn: true },
    { individualId: "U992", timestamp: new Date().toISOString(), location: "West Side Window", tappedIn: false },
    { individualId: "U993", timestamp: new Date().toISOString(), location: "Library Exit", tappedIn: true },
  ]

  const expectedIds = ["U991", "U993", "U994", "U995"]

  useEffect(() => {
    async function checkSecurity() {
      try {
        const result = await detectSecurityAnomaly({
          entryEvents: mockEvents,
          expectedPresentIndividuals: expectedIds
        })
        setAnomaly(result)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    checkSecurity()
  }, [])

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">Security Bot Monitoring</h1>
          <p className="text-muted-foreground">Real-time unlogged entry and access pattern detection.</p>
        </div>
        <Badge className={anomaly?.isSuspicious ? "bg-destructive animate-pulse" : "bg-green-500"}>
          {anomaly?.isSuspicious ? "ALERT ACTIVE" : "SYSTEM SECURE"}
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-primary text-primary-foreground md:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Bot Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Activity className="h-10 w-10" />
              </div>
              <p className="text-sm font-medium">Monitoring 48 nodes</p>
              <p className="text-xs opacity-80">Scanning for NFC bypasses...</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Network Latency</span>
                <span>12ms</span>
              </div>
              <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-3/4" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1">
              <CardTitle>AI Anomaly Assessment</CardTitle>
              <CardDescription>Security Bot&apos;s analysis of current traffic.</CardDescription>
            </div>
            {anomaly?.isSuspicious && (
              <Badge variant="destructive" className="px-4 py-1">
                <Siren className="mr-2 h-4 w-4" /> {anomaly.priority} PRIORITY
              </Badge>
            )}
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="p-12 flex items-center justify-center text-muted-foreground gap-3">
                <Activity className="animate-spin h-5 w-5" />
                Thinking...
              </div>
            ) : anomaly?.isSuspicious ? (
              <div className="p-6 rounded-xl border border-destructive/30 bg-destructive/5 space-y-4">
                <div className="flex gap-4">
                  <ShieldAlert className="h-10 w-10 text-destructive shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-destructive mb-1">Suspicious Activity Found</h3>
                    <p className="text-sm text-foreground leading-relaxed">{anomaly.alertMessage}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {anomaly.suspectedIndividuals.map(id => (
                    <Badge key={id} variant="outline" className="border-destructive/50 text-destructive">
                      Suspect: {id}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-12 flex flex-col items-center text-center text-muted-foreground gap-2">
                <ShieldCheck className="h-12 w-12 text-green-500" />
                <p className="font-medium text-foreground">No threats detected</p>
                <p className="text-sm max-w-sm">Access patterns match expected schedules and all entrants logged through verified NFC nodes.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Recent Entry Logs
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
                        <span className="text-sm font-semibold">{event.individualId}</span>
                        <span className="text-[10px] text-muted-foreground">{new Date(event.timestamp).toLocaleTimeString()}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{event.location}</p>
                      <Badge variant={event.tappedIn ? "secondary" : "destructive"} className="text-[10px] h-4">
                        {event.tappedIn ? "Verified NFC" : "BYPASS DETECTED"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-secondary" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
              <Info className="h-5 w-5 text-secondary shrink-0" />
              <div>
                <p className="text-sm font-medium">Node Main Hall Offline</p>
                <p className="text-xs text-muted-foreground">Electricity maintenance scheduled. Bot will use neighboring nodes for triangulation.</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-orange-50 border border-orange-100">
              <ShieldAlert className="h-5 w-5 text-orange-500 shrink-0" />
              <div>
                <p className="text-sm font-medium">High Traffic Volume</p>
                <p className="text-xs text-muted-foreground">80+ entries per minute at North Wing. Monitoring capacity at 92%.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}