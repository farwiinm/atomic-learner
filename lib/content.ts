export const subjects = [
  { slug: "mathematics", name: "Mathematics", blurb: "Algebra, functions, coordinate geometry and exam-focused problem solving." },
  { slug: "ict", name: "ICT", blurb: "Systems, logic and data concepts built up from first principles." },
  { slug: "physics", name: "Physics", blurb: "Mechanics, forces and applied problem sets aligned to the syllabus." },
  { slug: "chemistry", name: "Chemistry", blurb: "Structured, methodical coverage of core chemistry topics." },
  { slug: "biology", name: "Biology", blurb: "Clear, well-organized coverage of biological systems and processes." },
] as const;

export const pricing = {
  ol: [
    { subject: "Mathematics", amount: 4500 },
    { subject: "ICT", amount: 4500 },
    { subject: "Physics", amount: 4800 },
    { subject: "Chemistry", amount: 4800 },
    { subject: "Biology", amount: 4800 },
  ],
  al: [
    { subject: "Mathematics", amount: 5500 },
    { subject: "ICT", amount: 5500 },
    { subject: "Physics", amount: 5800 },
    { subject: "Chemistry", amount: 5800 },
    { subject: "Biology", amount: 5800 },
  ],
} as const;

export const processStages = [
  {
    n: "01",
    title: "Talk",
    description: "Discuss academic concerns and logistics directly with the teacher.",
  },
  {
    n: "02",
    title: "Diagnose",
    description: "Complete a targeted assessment to establish the student's starting point.",
  },
  {
    n: "03",
    title: "Plan",
    description: "Receive a personalized learning plan showing strengths, gaps and priorities.",
  },
  {
    n: "04",
    title: "Learn",
    description: "Begin structured weekly lessons aligned to the plan.",
  },
  {
    n: "05",
    title: "Review",
    description: "Parents receive regular visibility into progress and next steps.",
  },
] as const;

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/your-atomic-learner-handle/parent-call";
