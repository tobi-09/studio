'use server';
/**
 * @fileOverview Provides an AI-generated summary of classroom attendance for teachers.
 *
 * - teacherAttendanceSummary - A function that generates an attendance summary for a teacher.
 * - TeacherAttendanceSummaryInput - The input type for the teacherAttendanceSummary function.
 * - TeacherAttendanceSummaryOutput - The return type for the teacherAttendanceSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TeacherAttendanceSummaryInputSchema = z.object({
  teacherName: z.string().describe("The name of the teacher."),
  className: z.string().describe("The name of the class."),
  presentStudents: z.array(z.string()).describe("A list of students confirmed present in the class."),
  absentStudents: z.array(z.string()).describe("A list of students expected but not confirmed present in the class."),
  inBuildingStudents: z
    .array(z.string())
    .describe("A list of students confirmed to be in the school building but not yet in the teacher's current class."),
});
export type TeacherAttendanceSummaryInput = z.infer<typeof TeacherAttendanceSummaryInputSchema>;

const TeacherAttendanceSummaryOutputSchema = z.object({
  summary: z.string().describe("A concise, AI-generated summary of the classroom attendance."),
});
export type TeacherAttendanceSummaryOutput = z.infer<typeof TeacherAttendanceSummaryOutputSchema>;

export async function teacherAttendanceSummary(input: TeacherAttendanceSummaryInput): Promise<TeacherAttendanceSummaryOutput> {
  return teacherAttendanceSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'teacherAttendanceSummaryPrompt',
  input: {schema: TeacherAttendanceSummaryInputSchema},
  output: {schema: TeacherAttendanceSummaryOutputSchema},
  prompt: `Hello Teacher {{teacherName}}! Here's the attendance summary for your class: {{className}}.

Present Students ({{presentStudents.length}}):
{{#if presentStudents}}
  {{#each presentStudents}}- {{this}}
  {{/each}}
{{else}}
  No students currently marked as present.
{{/if}}

Absent Students ({{absentStudents.length}}):
{{#if absentStudents}}
  {{#each absentStudents}}- {{this}}
  {{/each}}
{{else}}
  All expected students are present or no absent students to report.
{{/if}}

Important Alert: Students in the building but not in your class:
{{#if inBuildingStudents}}
  The following students are in the school building but have not yet tapped into this class. Please investigate if they should be here:
  {{#each inBuildingStudents}}- {{this}}
  {{/each}}
{{else}}
  No students detected in the building but absent from this class.
{{/if}}

Please review and address any discrepancies.`,
});

const teacherAttendanceSummaryFlow = ai.defineFlow(
  {
    name: 'teacherAttendanceSummaryFlow',
    inputSchema: TeacherAttendanceSummaryInputSchema,
    outputSchema: TeacherAttendanceSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
