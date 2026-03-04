'use server';
/**
 * @fileOverview This file implements a Genkit flow for detecting security anomalies.
 *
 * - detectSecurityAnomaly - A function that handles the detection of security anomalies based on entry events.
 * - SecurityAnomalyDetectionInput - The input type for the detectSecurityAnomaly function.
 * - SecurityAnomalyDetectionOutput - The return type for the detectSecurityAnomaly function.
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
  return securityAnomalyDetectionFlow(input);
}

const securityAnomalyDetectionPrompt = ai.definePrompt({
  name: 'securityAnomalyDetectionPrompt',
  input: { schema: SecurityAnomalyDetectionInputSchema },
  output: { schema: SecurityAnomalyDetectionOutputSchema },
  prompt: `You are the 'Security Bot' for a school, tasked with intelligently monitoring school entry points.
Your goal is to detect unlogged entries or suspicious access patterns based on provided event data and generate clear, prioritized alerts.

Analyze the following entry events and compare them against the list of expected individuals. Identify any anomalies that suggest a security threat or unauthorized access.

Consider the following as suspicious:
- Individuals entering a location without tapping in.
- Individuals present in the building (from entry events) who are not in the 'expectedPresentIndividuals' list.
- Any other patterns that indicate unusual or unauthorized activity.

Entry Events:
{{#each entryEvents}}
  - Individual ID: {{{individualId}}}, Timestamp: {{{timestamp}}}, Location: {{{location}}}, Tapped In: {{{tappedIn}}}
{{/each}}

Expected Present Individuals:
{{#each expectedPresentIndividuals}}
  - {{{this}}}
{{else}}
  No specific individuals are expected to be present at this time.
{{/each}}

Based on the above, determine if there is a security anomaly. If so, provide a detailed alert message, assign a priority (HIGH, MEDIUM, LOW), and list any suspected individuals.`,
});

const securityAnomalyDetectionFlow = ai.defineFlow(
  {
    name: 'securityAnomalyDetectionFlow',
    inputSchema: SecurityAnomalyDetectionInputSchema,
    outputSchema: SecurityAnomalyDetectionOutputSchema,
  },
  async (input) => {
    const { output } = await securityAnomalyDetectionPrompt(input);
    return output!;
  }
);
