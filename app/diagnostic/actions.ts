"use server";

import { redirect } from "next/navigation";
import { recordAnswer, submitAttempt, getAssessmentBySlug, createAttempt } from "@/lib/diagnostics";
import type { Assessment } from "@/lib/types";

export async function submitAnswerAction(
  attemptId: string,
  questionId: string,
  selectedOptionId: string,
  isCorrect: boolean
) {
  await recordAnswer(attemptId, questionId, selectedOptionId, isCorrect);
}

export async function completeAttemptAction(
  attemptId: string,
  curriculum: string,
  level: string,
  subjectSlug: string
) {
  const assessment = await getAssessmentBySlug(curriculum, level, subjectSlug);
  if (assessment) {
    await submitAttempt(attemptId, assessment as Assessment);
  }
  redirect("/diagnostic/submitted");
}

export async function startAttemptAction(formData: FormData) {
  const curriculum = String(formData.get("curriculum"));
  const level = String(formData.get("level"));
  const subjectSlug = String(formData.get("subject"));
  const email = formData.get("email");

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    redirect(`/diagnostic/start?error=not-configured`);
  }

  const assessment = await getAssessmentBySlug(curriculum, level, subjectSlug);

  if (!assessment) {
    redirect(`/diagnostic/start?error=not-available`);
  }

  const attemptId = await createAttempt(
    assessment.id,
    email ? String(email) : undefined
  );

  if (!attemptId) {
    redirect(`/diagnostic/start?error=could-not-start`);
  }

  redirect(`/diagnostic/${attemptId}`);
}
