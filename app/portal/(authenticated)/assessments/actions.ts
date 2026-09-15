"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAttempt } from "@/lib/diagnostics";

export async function createAssessmentAction(formData: FormData) {
  const curriculum = String(formData.get("curriculum"));
  const level = String(formData.get("level"));
  const subjectSlug = String(formData.get("subject"));
  const title = String(formData.get("title"));

  const supabase = await createClient();

  const { data: subject } = await supabase
    .from("subjects")
    .select("id")
    .eq("slug", subjectSlug)
    .single();

  if (!subject) {
    redirect("/portal/assessments/new?error=invalid-subject");
  }

  const { data, error } = await supabase
    .from("assessments")
    .insert({
      curriculum,
      level,
      subject_id: subject.id,
      title,
      is_published: false,
    })
    .select("id")
    .single();

  if (error || !data) {
    redirect("/portal/assessments/new?error=create-failed");
  }

  redirect(`/portal/assessments/${data.id}`);
}

export async function togglePublishAction(
  assessmentId: string,
  currentlyPublished: boolean,
) {
  const supabase = await createClient();
  await supabase
    .from("assessments")
    .update({ is_published: !currentlyPublished })
    .eq("id", assessmentId);

  revalidatePath(`/portal/assessments/${assessmentId}`);
  revalidatePath("/portal");
}

export async function createTopicAction(
  assessmentId: string,
  subjectId: string,
  name: string,
) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("topics")
    .insert({ subject_id: subjectId, name })
    .select("id")
    .single();

  revalidatePath(`/portal/assessments/${assessmentId}`);
  return data?.id ?? null;
}

export async function addQuestionAction(formData: FormData) {
  const assessmentId = String(formData.get("assessmentId"));
  const topicId = String(formData.get("topicId"));
  const difficulty = String(formData.get("difficulty"));
  const prompt = String(formData.get("prompt"));
  const orderIndex = Number(formData.get("orderIndex") ?? 0);

  const optionLabels = formData.getAll("optionLabel").map(String);
  const correctIndex = Number(formData.get("correctIndex"));

  const supabase = await createClient();

  const { data: question, error } = await supabase
    .from("questions")
    .insert({
      assessment_id: assessmentId,
      topic_id: topicId,
      difficulty,
      prompt,
      order_index: orderIndex,
    })
    .select("id")
    .single();

  if (error || !question) {
    redirect(`/portal/assessments/${assessmentId}?error=add-question-failed`);
  }

  const optionRows = optionLabels
    .filter((label) => label.trim().length > 0)
    .map((label, i) => ({
      question_id: question.id,
      label,
      is_correct: i === correctIndex,
      order_index: i + 1,
    }));

  if (optionRows.length > 0) {
    await supabase.from("question_options").insert(optionRows);
  }

  revalidatePath(`/portal/assessments/${assessmentId}`);
  redirect(`/portal/assessments/${assessmentId}`);
}

export async function deleteQuestionAction(
  questionId: string,
  assessmentId: string,
) {
  const supabase = await createClient();
  await supabase
    .from("question_options")
    .delete()
    .eq("question_id", questionId);
  await supabase.from("questions").delete().eq("id", questionId);
  revalidatePath(`/portal/assessments/${assessmentId}`);
}

export async function generateStudentLinkAction(formData: FormData) {
  const assessmentId = String(formData.get("assessmentId"));
  const email = String(formData.get("email") ?? "");

  const attemptId = await createAttempt(assessmentId, email || undefined);

  if (!attemptId) {
    redirect(`/portal/assessments/${assessmentId}?error=link-failed`);
  }

  redirect(`/portal/assessments/${assessmentId}?newLink=${attemptId}`);
}
