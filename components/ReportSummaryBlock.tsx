"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import type { TopicScore } from "@/lib/types";

function buildSummaryText({
  title,
  curriculum,
  level,
  subject,
  contactEmail,
  submittedAt,
  topicScores,
}: {
  title: string;
  curriculum: string;
  level: string;
  subject: string;
  contactEmail: string | null;
  submittedAt: string | null;
  topicScores: TopicScore[];
}) {
  const strong = topicScores.filter(
    (t) => t.total_count > 0 && t.correct_count / t.total_count >= 0.7,
  );
  const developing = topicScores.filter(
    (t) =>
      t.total_count > 0 &&
      t.correct_count / t.total_count >= 0.4 &&
      t.correct_count / t.total_count < 0.7,
  );
  const weak = topicScores.filter(
    (t) => t.total_count > 0 && t.correct_count / t.total_count < 0.4,
  );

  const lines = [
    `Assessment: ${title}`,
    `Curriculum and level: ${curriculum.toUpperCase()} ${level.toUpperCase()}`,
    `Subject: ${subject}`,
    `Contact: ${contactEmail ?? "Not provided"}`,
    `Submitted: ${submittedAt ? new Date(submittedAt).toLocaleString() : "Not yet"}`,
    "",
    "Topic results:",
    ...topicScores.map(
      (t) =>
        `- ${t.topic_name}: ${t.correct_count} of ${t.total_count} correct`,
    ),
    "",
    `Stronger topics: ${strong.length > 0 ? strong.map((t) => t.topic_name).join(", ") : "None yet"}`,
    `Developing topics: ${developing.length > 0 ? developing.map((t) => t.topic_name).join(", ") : "None"}`,
    `Priority topics: ${weak.length > 0 ? weak.map((t) => t.topic_name).join(", ") : "None"}`,
  ];

  return lines.join("\n");
}

export default function ReportSummaryBlock(props: {
  title: string;
  curriculum: string;
  level: string;
  subject: string;
  contactEmail: string | null;
  submittedAt: string | null;
  topicScores: TopicScore[];
}) {
  const [copied, setCopied] = useState(false);
  const summary = buildSummaryText(props);

  async function handleCopy() {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="bg-white border border-line rounded-2xl p-7">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[13px] uppercase tracking-wide text-muted font-bold">
          Report Summary (copy this)
        </h2>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[13px] font-semibold text-blue"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="text-[13px] text-muted mb-4">
        Paste this into a document, or into an AI writing tool with a prompt
        like the one below, to turn it into a full written report for the
        parent.
      </p>
      <pre className="bg-bg rounded-xl p-4 text-[13px] whitespace-pre-wrap font-mono leading-relaxed">
        {summary}
      </pre>
    </div>
  );
}
