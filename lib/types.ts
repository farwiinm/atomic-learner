export type Curriculum = "cambridge" | "edexcel";
export type AcademicLevel = "ol" | "al";
export type Difficulty = "foundation" | "intermediate" | "advanced";
export type AttemptStatus = "in_progress" | "submitted" | "reviewed";

export interface Subject {
  id: string;
  slug: string;
  name: string;
}

export interface Topic {
  id: string;
  subject_id: string;
  name: string;
}

export interface QuestionOption {
  id: string;
  question_id: string;
  label: string;
  is_correct: boolean;
  order_index: number;
}

export interface Question {
  id: string;
  assessment_id: string;
  topic_id: string;
  difficulty: Difficulty;
  prompt: string;
  order_index: number;
  question_options: QuestionOption[];
  topics?: Topic;
}

export interface Assessment {
  id: string;
  curriculum: Curriculum;
  level: AcademicLevel;
  subject_id: string;
  title: string;
  is_published: boolean;
  questions: Question[];
  subjects?: Subject;
}

export interface AssessmentAttempt {
  id: string;
  assessment_id: string;
  student_id: string | null;
  contact_email: string | null;
  status: AttemptStatus;
  submitted_at: string | null;
  created_at: string;
}

export interface TopicScore {
  topic_id: string;
  topic_name: string;
  correct_count: number;
  total_count: number;
}
