export type Section = { h: string; p?: string[]; ul?: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string; // ISO date
  /** Slug of the landing page this article supports */
  landing: string;
  intro: string;
  sections: Section[];
};

export const articles: Article[] = [
  {
    slug: "why-students-get-e-in-olevel-maths",
    title: "Why Students Get an E in O/L Maths Even When They Study",
    description:
      "Studying harder does not fix a weak grade if the real gap is somewhere else. Here are the four most common reasons O/L Maths students stay stuck, and what to do about each.",
    category: "Mathematics",
    published: "2026-10-09",
    landing: "online-maths-classes-sri-lanka",
    intro:
      "Many parents tell us the same thing: my child studies for hours, goes to class, does the homework, and still gets a D or an E. It is frustrating for everyone. The answer is almost never laziness. It is usually that the effort is going to the wrong place.",
    sections: [
      {
        h: "Studying more is not the same as studying the right thing",
        p: [
          "Maths is built in layers. Fractions feed into algebra, algebra feeds into equations, and equations feed into graphs and word problems. If one layer is shaky, everything on top of it wobbles, and no amount of revision on the top layer will steady it.",
          "That is why a student can revise a chapter for a week and still lose the same marks. The chapter was never the problem.",
        ],
      },
      {
        h: "Reason 1: An old gap under a new topic",
        p: [
          "A student who never fully understood negative numbers or fractions in Grade 8 will struggle with algebraic manipulation in Grade 10, and struggle again with quadratics in Grade 11. Each time it looks like a new difficulty, but it is the same missing piece.",
          "The fix is to trace the error back. When a student gets a quadratic wrong, ask where the working first went off. Often it is a sign or a fraction step, not the quadratic method at all.",
        ],
      },
      {
        h: "Reason 2: Copying steps without understanding them",
        p: [
          "Some students can follow a worked example perfectly and still freeze when the question is changed slightly. They have memorised the steps, not the idea behind them.",
          "A simple test is to ask the student to explain why each step is done. If the answer is that is what the teacher did, the method is memorised, not understood. Rebuilding understanding is slower at first but it is the only thing that holds under exam pressure.",
        ],
      },
      {
        h: "Reason 3: Word problems",
        p: [
          "Plenty of students are good at calculation and weak at turning a sentence into an equation. These students look strong in practice drills and then lose marks in the paper, where every question is a short story.",
          "Practise one skill only: underline what is known, write down what is asked, and define a letter for the unknown before doing anything else. Do this on ten problems a week and the improvement is usually visible within a month.",
        ],
      },
      {
        h: "Reason 4: Exam habits",
        ul: [
          "Skipping working, so a small error costs the whole question instead of one mark",
          "Spending too long on one hard question and running out of time at the end",
          "Never checking answers against the question, such as units or a sensible size",
          "Leaving blanks instead of writing down the method for partial credit",
        ],
        p: [
          "These are habits, and habits can be trained. A few timed papers with a strict rule, such as moving on after the allotted minutes, make a bigger difference than most students expect.",
        ],
      },
      {
        h: "What to do instead",
        ul: [
          "Find the real gaps first, with a short diagnostic or by sorting lost marks by topic",
          "Rebuild the missing base before pushing on with the new chapter",
          "Practise by topic, then move to full timed papers near the exam",
          "Keep a mistake log and review it weekly",
        ],
        p: [
          "None of this needs extra hours. It needs the hours to be pointed at the right problems. A student who has been stuck on an E for a year can move meaningfully once the real gap is fixed, though no one can promise a particular grade.",
        ],
      },
    ],
  },
  {
    slug: "how-to-find-learning-gaps-in-maths",
    title: "How to Find Your Child's Learning Gaps in Maths: A Step by Step Guide for Parents",
    description:
      "You do not need to be good at Maths to find where your child is losing marks. This simple five-step method works with the papers and tests you already have.",
    category: "Mathematics",
    published: "2026-10-09",
    landing: "online-maths-classes-sri-lanka",
    intro:
      "A learning gap is a topic or skill your child has not fully mastered, and it is usually hiding behind a poor overall mark. The good news is that you can find most gaps yourself in an afternoon, using work that already exists.",
    sections: [
      {
        h: "Step 1: Gather the last few papers and tests",
        p: [
          "Collect three to five recent school tests, mock papers or past papers your child has already marked. More is better, but you only need enough to see a pattern.",
        ],
      },
      {
        h: "Step 2: List every question where marks were lost",
        p: [
          "Go through each paper and note the topic of every question that lost marks: algebra, geometry, statistics, word problems and so on. Do not worry about the exact marks at this stage.",
        ],
      },
      {
        h: "Step 3: Look for repeats",
        p: [
          "After three or four papers, the same topics start to appear again and again. Those repeats are your gaps. If algebra shows up in every paper, you have found where to start, even if the questions looked different each time.",
        ],
      },
      {
        h: "Step 4: Sort each mistake by type",
        p: ["For each lost mark, decide which of these it was:"],
        ul: [
          "Concept: did not understand the idea",
          "Method: knew the idea but used the wrong steps",
          "Careless: made a small slip with signs or arithmetic",
          "Reading: misread or misunderstood the question",
          "Time: ran out of time before reaching it",
        ],
      },
      {
        h: "Step 5: Test the foundations",
        p: [
          "If algebra is the weak topic, check the skills underneath it: fractions, negative numbers, and expanding brackets. Ask your child to do five simple questions on each. A wobble on the basics usually explains the trouble above it.",
        ],
      },
      {
        h: "What the pattern tells you",
        ul: [
          "Mostly concept errors: needs the topic retaught from the ground up",
          "Mostly method errors: needs guided practice with feedback on each step",
          "Mostly careless errors: needs a checking routine and slower, neater working",
          "Mostly time errors: needs timed practice and a plan for which questions to skip first",
        ],
        p: [
          "Once you know the type, the fix is clear, and so is how long it is likely to take. If this feels like a lot, a diagnostic assessment with a teacher does the same job in a single session and produces a written plan.",
        ],
      },
    ],
  },
  {
    slug: "how-to-use-past-papers-properly",
    title: "How to Use Past Papers Properly: Why Doing More Is Not Always Better",
    description:
      "Past papers are the best revision tool, but only when used in the right order. Here is how to use topical questions, timed papers and mark schemes to actually improve.",
    category: "Exam technique",
    published: "2026-10-09",
    landing: "online-maths-classes-sri-lanka",
    intro:
      "Past papers are the closest thing to the real exam, which is why students and parents rely on them. But many students use them badly: they do a full paper early, see a low mark, and lose confidence without learning anything from it. Used well, past papers are one of the fastest ways to improve.",
    sections: [
      {
        h: "Start with topical questions, not full papers",
        p: [
          "In the months before the exam, practise by topic. Pick algebra, do ten questions from past papers on algebra, mark them, learn from the mistakes, and repeat. A full paper tests everything at once, so it hides which topic caused the lost marks. A topical set shows you straight away.",
        ],
      },
      {
        h: "Use your own exam board's papers",
        p: [
          "Cambridge and Edexcel word their questions differently and structure their papers differently. Practise with papers from the board your child is actually sitting, so the wording, layout and command words feel familiar on the day.",
        ],
      },
      {
        h: "Read the mark scheme like a teacher",
        p: [
          "After marking, do not just tick or cross. Read the mark scheme to see where each mark is given. You will notice that marks are often awarded for method, not only the final answer, and that answers need to be written in a certain way to earn credit.",
        ],
        ul: [
          "Which steps earn marks even if the final answer is wrong?",
          "What exact wording or units does the mark scheme expect?",
          "How many marks does this question carry, and how much working does that suggest?",
        ],
      },
      {
        h: "Keep an error log",
        p: [
          "For every lost mark, write one line: the topic, what went wrong, and what the correct approach was. Review this log once a week. After a few weeks it becomes the most personal revision guide your child will ever have.",
        ],
      },
      {
        h: "Save timed full papers for later",
        p: [
          "Closer to the exam, switch to full papers under real conditions: a quiet room, no phone, and the real time limit. This builds stamina and pacing. Do not use up every available paper early. Keep the most recent ones back for the final weeks.",
        ],
      },
      {
        h: "A simple order that works",
        ul: [
          "First: fix gaps and rebuild topics",
          "Then: topical questions with mark scheme review",
          "Then: mixed topic sets",
          "Finally: full timed papers, marked strictly and logged",
        ],
        p: [
          "The aim is not to complete as many papers as possible. It is to learn something from every paper you do.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-a-tutor-and-signs-your-child-needs-one",
    title: "Does Your Child Need a Tutor? Signs to Look For and How to Choose",
    description:
      "Not every struggling student needs a tutor, and not every tutor is the right fit. A practical guide for Sri Lankan parents on when to hire help and which questions to ask first.",
    category: "Choosing a tutor",
    published: "2026-10-09",
    landing: "online-maths-classes-sri-lanka",
    intro:
      "Tuition is a real cost in time and money, so it is worth being sure before you commit. This guide covers the signs that a tutor will genuinely help, and the questions that separate a good tutor from a busy one.",
    sections: [
      {
        h: "Signs a tutor will help",
        ul: [
          "Marks have stayed low or dropped despite regular studying",
          "Your child says they understand in class but cannot do the questions alone",
          "The same kinds of mistakes appear in every paper",
          "Confidence is falling, and your child avoids or dreads the subject",
          "There was a disruption, such as a school change, illness or a move abroad",
          "The class moves too fast, or the group is too large for individual questions",
        ],
      },
      {
        h: "Signs more practice may be enough",
        ul: [
          "Your child understands the topics but has not practised much",
          "Marks are generally good and only occasionally slip",
          "The main problem is organisation or time management, not understanding",
        ],
        p: [
          "In these cases a better study routine may help more than a tutor, and a good tutor will tell you so.",
        ],
      },
      {
        h: "Questions to ask any tutor before you start",
        ul: [
          "How will you find out what my child actually needs?",
          "Will my child get a written plan, and will I see it?",
          "How will I know if it is working? What do you report, and how often?",
          "Do you teach my child's exam board and level regularly?",
          "Is the class one to one or in a group, and how many students are in it?",
          "What happens if we want to pause or stop?",
        ],
      },
      {
        h: "Warning signs",
        ul: [
          "A promise of a specific grade, which no honest tutor can guarantee",
          "No assessment or plan before the lessons start",
          "The same worksheets given to every student",
          "No way for parents to see progress",
          "Pressure to pay for a long block of lessons up front",
        ],
      },
      {
        h: "Why a diagnostic first matters",
        p: [
          "A tutor who starts teaching straight away is guessing where the problem is. A short diagnostic at the start, followed by a plan, means every later session is spent on the right topics. It also gives you something concrete to check progress against.",
          "At Atomic Learner every student begins this way, and every parent receives a monthly update. If you are comparing options, ask each tutor to explain how they would do the same.",
        ],
      },
    ],
  },
  {
    slug: "online-vs-in-person-tuition",
    title: "Online or In-Person Tuition: Which Works Better for O/L and A/L?",
    description:
      "An honest comparison of online and in-person one to one tuition for O/L and A/L students, including who each format suits best and how to decide.",
    category: "Choosing a tutor",
    published: "2026-10-09",
    landing: "olevel-maths-kalubowila",
    intro:
      "Parents often ask which is better. The honest answer is that it depends on the student. Both formats work well when the teaching is good and the student is engaged. Here is how to decide.",
    sections: [
      {
        h: "Where online classes work well",
        ul: [
          "No travel time, which is a large saving in Colombo traffic",
          "Easy to keep a regular weekly slot, even during exam season",
          "The only option if you live outside Sri Lanka",
          "Lessons can be recorded or written up on a shared screen, so notes are easy to keep",
          "A wider choice of tutors, not limited to your area",
        ],
      },
      {
        h: "Where in-person classes work well",
        ul: [
          "Fewer distractions, which helps students who drift on a screen",
          "Easier to see the student's rough work and step in early",
          "Better for younger students or those who find it hard to concentrate online",
          "A natural break from devices, which many families value",
        ],
      },
      {
        h: "What matters more than the format",
        p: [
          "A well-planned online lesson beats a poorly planned in-person one, and the reverse is also true. The things that really decide results are the same in both: a clear plan, work set between sessions, mistakes reviewed, and a teacher who explains until the student understands.",
        ],
      },
      {
        h: "How to decide",
        ul: [
          "Does your child focus well on a screen? If yes, online is fine.",
          "Is travel a barrier? If yes, online saves time every week.",
          "Does your child need close supervision to stay on task? In person may suit better.",
          "Are you outside Sri Lanka? Online is the practical choice.",
        ],
        p: [
          "At Atomic Learner you can choose by fit. Online sessions run for 1.5 hours and in-person sessions in Kalubowila run for 2 hours. Many students try one format and switch to the other around exam time, and that is perfectly fine.",
        ],
      },
    ],
  },
  {
    slug: "alevel-science-revision-plan",
    title: "A/L Physics, Chemistry and Biology: A Revision Plan That Actually Works",
    description:
      "A practical weekly revision structure for Cambridge and Edexcel A/L sciences, built on active recall, spaced practice and topical questions rather than rereading notes.",
    category: "Sciences",
    published: "2026-10-09",
    landing: "alevel-sciences-online",
    intro:
      "A/L Science students often spend long hours rereading notes and highlighting, then feel surprised when the exam asks something unfamiliar. Rereading feels productive because the page looks familiar, but familiarity is not the same as being able to recall and apply an idea. A better plan trains the exact skill the exam tests.",
    sections: [
      {
        h: "Principle 1: Test yourself instead of rereading",
        p: [
          "After studying a topic, close the notes and write down everything you can remember. Then check what you missed. This is called active recall, and it shows you honestly what you know. It feels harder than rereading, and that effort is the point.",
        ],
      },
      {
        h: "Principle 2: Space the practice out",
        p: [
          "Come back to each topic after a day, a week, and then a month, instead of cramming it once. Short returns beat one long session. A simple tracker listing each topic with the dates it was last reviewed is enough.",
        ],
      },
      {
        h: "Principle 3: Practise with exam questions early",
        p: [
          "Do not wait to finish the syllabus before trying exam questions. Attempt a few questions after each topic. Exam wording and the way marks are awarded are learned only by doing real questions.",
        ],
      },
      {
        h: "Subject tips",
        ul: [
          "Physics: practise units and rearranging formulae until they are automatic, and always sketch the situation before calculating",
          "Chemistry: build confidence with moles and stoichiometry early, because they appear across physical, organic and analytical topics",
          "Biology: use precise terminology and practise applying ideas to unfamiliar data, since many marks reward application, not recall",
        ],
      },
      {
        h: "A sample week",
        ul: [
          "Monday: learn or rebuild one topic, then write a one page summary from memory",
          "Tuesday: topical exam questions on that topic, marked against the mark scheme",
          "Thursday: review last week's topic with ten recall questions",
          "Saturday: a mixed timed section, then update the error log",
          "Sunday: rest, or a light review of the error log only",
        ],
        p: [
          "Adjust the days to suit the school timetable. What matters is the pattern: learn, test, review, repeat.",
        ],
      },
      {
        h: "When to get help",
        p: [
          "If the same topic keeps going wrong after two rounds of this routine, the gap is probably deeper than revision can fix. That is the moment to get the concept explained again from the base, ideally one to one, so questions can be asked as they arise.",
        ],
      },
    ],
  },
  {
    slug: "how-to-answer-ict-exam-questions",
    title: "How to Answer ICT Exam Questions and Earn Every Mark",
    description:
      "Many ICT marks are lost through how answers are written, not what the student knows. Learn how to read command words, match answers to marks and apply concepts to scenarios.",
    category: "ICT",
    published: "2026-10-09",
    landing: "ict-classes-ol-al-online",
    intro:
      "Ask a student what they know about networks or databases and they often explain it well. Then the exam question arrives and the marks do not follow. Usually the issue is the way the answer is built, not a lack of knowledge. The skills below are simple and can be practised.",
    sections: [
      {
        h: "Read the command word first",
        p: [
          "The first word of the question tells you how much to write and in what style. Typical command words include state, describe, explain and compare. Stating needs a short fact. Describing needs the features. Explaining needs a reason, which usually means the word because. Comparing needs both sides.",
          "Students who write a long explanation for a state question waste time, and students who give a one line fact for an explain question lose marks.",
        ],
      },
      {
        h: "Match the length of your answer to the marks",
        p: [
          "A two mark question usually wants two clear points. A six mark question wants a developed answer with several linked points. Count the marks and aim for roughly one distinct point per mark.",
        ],
      },
      {
        h: "Use the right terminology",
        p: [
          "ICT mark schemes reward specific words. Saying the computer saves it is weaker than saying the data is stored on secondary storage. Keep a short glossary for each topic and test yourself on it regularly.",
        ],
      },
      {
        h: "Apply the idea to the scenario",
        p: [
          "Many questions describe a situation, such as a school, a shop or a hospital, and ask what should be done. Generic textbook answers score poorly. Mention the details given in the question so the answer clearly fits that scenario.",
        ],
      },
      {
        h: "Practise the practical skills",
        ul: [
          "Spreadsheets: cell references, formulas and functions, sorting and filtering",
          "Databases: fields, records, keys, and simple queries",
          "Presentation and document tasks: follow the instructions exactly and check each requirement",
        ],
        p: [
          "Practical questions are often the easiest marks to gain because the answer is checkable. Doing them hands-on, not just reading about them, is what builds speed.",
        ],
      },
      {
        h: "A routine to follow",
        ul: [
          "Underline the command word and the marks",
          "Plan the points in two or three words each",
          "Write in clear short sentences with the right terms",
          "Check each mark has a matching point before moving on",
        ],
      },
    ],
  },
  {
    slug: "studying-cambridge-or-edexcel-from-abroad",
    title: "Studying Cambridge or Edexcel from Abroad: A Guide for Sri Lankan Families",
    description:
      "Moved overseas but your child still sits O/L or A/L exams? Here is how to keep a steady study routine across time zones and avoid the gaps that come from a move.",
    category: "Studying abroad",
    published: "2026-10-09",
    landing: "online-classes-for-sri-lankans-abroad",
    intro:
      "Moving countries is hard on a student's studies. New school, new syllabus, a different pace, and often a gap in the middle of a course. If your child is still working towards Cambridge or Edexcel O/L or A/L exams, a few practical steps make the transition much smoother.",
    sections: [
      {
        h: "Check the exam details with the school or exam centre",
        p: [
          "Confirm which board and level your child is sitting, which subjects, and where and when the exams are taken. Registration rules and deadlines differ by country and centre, so confirm them directly with the school or centre rather than relying on assumptions.",
        ],
      },
      {
        h: "Find the gaps the move created",
        p: [
          "A change of school often means some topics were taught twice and others missed. Do a quick check of each subject against the syllabus and mark which topics are solid, shaky or never covered. Fix the never covered ones first, because they cannot be guessed on the day.",
        ],
      },
      {
        h: "Choose a time slot that works on both sides",
        p: [
          "Sri Lanka is five and a half hours ahead of UTC. That makes the gap about 1.5 hours with Dubai, 2.5 hours behind Singapore, and 5.5 hours ahead of the UK in winter, or 4.5 hours in summer. These differences shift with daylight saving, so recheck when the clocks change.",
          "Pick one fixed weekly slot and protect it. A regular slot beats a flexible one, because it becomes part of the routine.",
        ],
      },
      {
        h: "Keep one set of notes",
        p: [
          "Students who change schools often end up with notes scattered across notebooks. Keep a single notebook or folder per subject, organised by topic, along with an error log from practice papers. It becomes the main revision resource.",
        ],
      },
      {
        h: "Keep a parent view of progress",
        p: [
          "When your child's teacher is in another country, it is easy to lose sight of progress. Ask for a short written update each month covering what was done, what improved and what comes next.",
        ],
      },
      {
        h: "Why some families choose a teacher in Sri Lanka",
        p: [
          "Teachers who work with Cambridge and Edexcel students in Sri Lanka know how these papers are set and how they are marked, and many families abroad prefer that familiarity. Online classes make it possible from anywhere. At Atomic Learner the rates are LKR 2,500 per session for O/L and LKR 3,500 per session for A/L, one to one, wherever you live.",
        ],
      },
    ],
  },
];

export const articleBySlug = Object.fromEntries(articles.map((a) => [a.slug, a])) as Record<
  string,
  Article
>;

export function wordCount(a: Article): number {
  const parts = [a.intro];
  for (const s of a.sections) {
    parts.push(s.h);
    if (s.p) parts.push(...s.p);
    if (s.ul) parts.push(...s.ul);
  }
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

export function readMinutes(a: Article): number {
  return Math.max(2, Math.round(wordCount(a) / 200));
}
