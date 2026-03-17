/**
 * @fileOverview Provides an AI-generated summary of classroom attendance for teachers.
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
  // Demo mode for static site
  return { summary: "AI souhrn je dostupný v plné verzi systému propojené s Hubem." };
}
