/**
 * @fileOverview This file implements a Genkit flow for detecting security anomalies.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const EntryEventSchema = z.object({
  individualId: z.string().describe('The unique identifier of the individual.'),
  timestamp: z.string().datetime().describe('The ISO 8601 timestamp of the entry event.'),
  location: z.string().describe('The location where the entry occurred (e.g., "Main Entrance", "Classroom 101").'),
  tappedIn: z.boolean().describe('True if the individual tapped their card/device, false otherwise.'),
});

const SecurityAnomalyDetectionInputSchema = z.object({
  entryEvents: z.array(EntryEventSchema).describe('A list of recent entry events in the school.'),
  expectedPresentIndividuals: z.array(z.string()).describe('A list of unique identifiers for individuals expected to be present in the building based on schedules or other data.'),
});
export type SecurityAnomalyDetectionInput = z.infer<typeof SecurityAnomalyDetectionInputSchema>;

const SecurityAnomalyDetectionOutputSchema = z.object({
  isSuspicious: z.boolean().describe('True if a security anomaly or suspicious pattern was detected, false otherwise.'),
  alertMessage: z.string().describe('A clear and concise message describing the detected anomaly and its potential implications.'),
  priority: z.enum(['HIGH', 'MEDIUM', 'LOW']).describe('The priority level of the alert.'),
  suspectedIndividuals: z.array(z.string()).describe('A list of unique identifiers for individuals potentially involved in the anomaly.'),
});
export type SecurityAnomalyDetectionOutput = z.infer<typeof SecurityAnomalyDetectionOutputSchema>;

export async function detectSecurityAnomaly(input: SecurityAnomalyDetectionInput): Promise<SecurityAnomalyDetectionOutput> {
  // Demo mode for static site
  return {
    isSuspicious: false,
    alertMessage: "Sledování aktivní. Pro reálnou detekci je vyžadováno připojení k EduGate Hubu.",
    priority: "LOW",
    suspectedIndividuals: []
  };
}
