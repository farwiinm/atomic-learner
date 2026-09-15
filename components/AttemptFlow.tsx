"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/Button";
import { submitAnswerAction, completeAttemptAction } from "@/app/diagnostic/actions";
import type { Assessment } from "@/lib/types";

export default function AttemptFlow({
  attemptId,
  assessment,
  curriculum,
  level,
  subjectSlug,
}: {
  attemptId: string;
  assessment: Assessment;
  curriculum: string;
  level: string;
  subjectSlug: string;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();

  const questions = assessment.questions;
  const question = questions[index];
  const total = questions.length;
  const isLast = index === total - 1;
  const currentSelection = selected[question.id];

  function choose(optionId: string, isCorrect: boolean) {
    setSelected((prev) => ({ ...prev, [question.id]: optionId }));
    startTransition(() => {
      submitAnswerAction(attemptId, question.id, optionId, isCorrect);
    });
  }

  function next() {
    if (isLast) {
      startTransition(() => {
        completeAttemptAction(attemptId, curriculum, level, subjectSlug);
      });
    } else {
      setIndex((i) => i + 1);
    }
  }

  return (
    <div className="bg-white border border-line rounded-[24px] p-8 md:p-10">
      <span className="inline-block bg-blue-soft text-blue px-3 py-1.5 rounded-full text-[12px] font-semibold mb-4">
        {assessment.title}
      </span>
      <div className="flex gap-4 text-[13px] text-muted mb-5 flex-wrap">
        <span>
          Question {index + 1} / {total}
        </span>
        <span>Topic: {question.topics?.name ?? "General"}</span>
        <span className="capitalize">Difficulty: {question.difficulty}</span>
      </div>
      <div className="h-[5px] bg-line rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-teal transition-all duration-500"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      <div className="text-[19px] font-bold text-navy mb-6">{question.prompt}</div>

      <div className="space-y-2.5 mb-7">
        {question.question_options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => choose(opt.id, opt.is_correct)}
            disabled={isPending}
            className={`block w-full text-left px-4.5 py-3.5 rounded-xl border-[1.5px] text-[15px] font-medium transition-all disabled:opacity-60 ${
              currentSelection === opt.id
                ? "bg-blue-soft border-blue text-navy"
                : "bg-white border-line hover:border-blue hover:bg-blue-soft"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-[13.5px] text-muted">
          Answers are reviewed by the teacher. This isn&apos;t an instant score.
        </p>
        <Button
          onClick={next}
          variant={isLast ? "teal" : "primary"}
          className={!currentSelection ? "opacity-50 pointer-events-none" : ""}
        >
          {isLast ? "Submit Assessment" : "Next Question"}
        </Button>
      </div>
    </div>
  );
}
