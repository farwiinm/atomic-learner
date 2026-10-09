export type Faq = { q: string; a: string };

export type LandingPage = {
  slug: string;
  /** Short label used in internal links */
  label: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  /** Which price cards to show */
  levels: ("ol" | "al")[];
  forWhom: string[];
  topicsHeading: string;
  topics: { title: string; items: string[] }[];
  approachHeading: string;
  approach: string[];
  faqs: Faq[];
  related: string[];
};

export const landingPages: LandingPage[] = [
  {
    slug: "online-maths-classes-sri-lanka",
    label: "Online Maths classes",
    metaTitle: "Online O/L & A/L Maths Classes, Cambridge & Edexcel | Atomic Learner",
    metaDescription:
      "1:1 online Mathematics classes for Cambridge and Edexcel O/L and A/L students. A diagnostic first, then a plan built around your child. From LKR 2,500 per session.",
    eyebrow: "Online Mathematics, 1:1",
    h1: "Online Maths classes for Cambridge and Edexcel students",
    intro:
      "Most students who struggle in Maths are not weak at the whole subject. One or two topics are quietly holding everything else back. Every student here starts with a diagnostic that finds exactly which ones, then learns from a plan built around those gaps.",
    levels: ["ol", "al"],
    forWhom: [
      "O/L students stuck on grades D or E who want a clear route to C or higher",
      "Students who understand the lesson in class but lose marks in the exam",
      "A/L students who need Pure Maths, Mechanics or Statistics rebuilt from the base",
      "Parents who want to see real progress, not just more hours of tuition",
    ],
    topicsHeading: "What we cover",
    topics: [
      {
        title: "O/L Mathematics",
        items: [
          "Algebra and equations",
          "Quadratics and graphs",
          "Geometry and trigonometry",
          "Mensuration",
          "Statistics and probability",
          "Word problems and exam technique",
        ],
      },
      {
        title: "A/L Mathematics",
        items: [
          "Pure Mathematics",
          "Calculus and functions",
          "Mechanics",
          "Probability and Statistics",
          "Past paper strategy",
          "Time management under exam pressure",
        ],
      },
    ],
    approachHeading: "Why a diagnostic comes before the first lesson",
    approach: [
      "Maths is built in layers. A shaky idea from Grade 8 will quietly cost marks in Grade 11, however much revision is done on the new topic. Fixing the new topic without finding the old gap is why many students keep repeating the same mistakes.",
      "The diagnostic is a short worksheet that maps which topics are secure and which are not. The plan that follows covers the gaps first, then moves into topical past paper practice for your exam board.",
    ],
    faqs: [
      {
        q: "Are the online Maths classes really one to one?",
        a: "Yes. Every class is one teacher with one student, so the pace and the examples follow the student, not a group average.",
      },
      {
        q: "Which exam boards do you teach?",
        a: "Cambridge and Edexcel, at O/L and A/L level only.",
      },
      {
        q: "How long is an online session and what does it cost?",
        a: "Online sessions are 1.5 hours. O/L is LKR 2,500 per session and A/L is LKR 3,500 per session.",
      },
      {
        q: "What do I need for online classes?",
        a: "A laptop, tablet or phone with a stable connection, and paper and a pen. The teacher writes the working live so the student can follow every step.",
      },
      {
        q: "Can you promise a specific grade?",
        a: "No honest tutor can. What we can promise is a clear plan, regular practice on the right topics, and a monthly update so you can see the progress.",
      },
    ],
    related: [
      "online-classes-for-sri-lankans-abroad",
      "olevel-maths-kalubowila",
      "alevel-sciences-online",
    ],
  },
  {
    slug: "online-classes-for-sri-lankans-abroad",
    label: "For Sri Lankans abroad",
    metaTitle: "Online Cambridge & Edexcel Classes for Sri Lankans Abroad | Atomic Learner",
    metaDescription:
      "Sri Lankan students living overseas: 1:1 online O/L and A/L tuition in Maths, ICT, Physics, Chemistry and Biology, scheduled around your time zone. From LKR 2,500 per session.",
    eyebrow: "For families living abroad",
    h1: "Online classes for Sri Lankan students abroad",
    intro:
      "Moving abroad does not have to mean losing a teacher your child understands. Sessions run live, one to one, in a time slot that works for your country, with the same diagnostic and plan that students in Colombo receive.",
    levels: ["ol", "al"],
    forWhom: [
      "Sri Lankan families overseas whose children sit Cambridge or Edexcel O/L or A/L",
      "Students who have changed schools or countries and have gaps from the move",
      "Parents who want a teacher who knows the local exam style and past paper patterns",
      "Families who want the same rate as local students, with no overseas surcharge",
    ],
    topicsHeading: "Subjects available online",
    topics: [
      {
        title: "O/L",
        items: ["Mathematics", "ICT", "Physics", "Chemistry", "Biology"],
      },
      {
        title: "A/L",
        items: ["Mathematics", "ICT", "Physics", "Chemistry", "Biology"],
      },
    ],
    approachHeading: "How it works across time zones",
    approach: [
      "Sri Lanka is five and a half hours ahead of UTC, so a family in the UK, the Middle East, Australia or North America needs a slot that suits both sides. Share your time zone when you book and we will find a regular weekly time that fits.",
      "Each month you receive a short written update with what was covered, what has improved and what comes next. That matters most when you are not in the same country as your child's teacher.",
    ],
    faqs: [
      {
        q: "Is the price different for students outside Sri Lanka?",
        a: "No. The rate is the same wherever the student lives: LKR 2,500 per session for O/L and LKR 3,500 per session for A/L.",
      },
      {
        q: "Can classes be at a time that suits our country?",
        a: "Yes. Tell us your time zone and we will agree a fixed weekly slot that works for both sides.",
      },
      {
        q: "Do you teach the exam boards we use abroad?",
        a: "We teach Cambridge and Edexcel O/L and A/L. If your child sits a different board or level, the booking call is the place to check whether we are a fit.",
      },
      {
        q: "How does the first step work?",
        a: "You book a short call, the student completes a diagnostic, and the plan is built from the results. Nothing is decided before you have seen what the plan looks like.",
      },
    ],
    related: [
      "online-maths-classes-sri-lanka",
      "alevel-sciences-online",
      "ict-classes-ol-al-online",
    ],
  },
  {
    slug: "olevel-maths-kalubowila",
    label: "In person in Kalubowila",
    metaTitle: "O/L Maths Tuition in Kalubowila, Dehiwala & Mount Lavinia | Atomic Learner",
    metaDescription:
      "1:1 in-person Cambridge and Edexcel O/L and A/L tuition in Kalubowila, close to Dehiwala, Mount Lavinia, Wellawatte and Nugegoda. 2-hour sessions from LKR 2,500.",
    eyebrow: "In person, Kalubowila",
    h1: "O/L tuition in Kalubowila, one to one",
    intro:
      "Classes are held in person in Kalubowila, within easy reach of Dehiwala, Mount Lavinia, Wellawatte and Nugegoda. Each session is two hours with one teacher and one student, so there is time to work through the topic, not just rush past it.",
    levels: ["ol", "al"],
    forWhom: [
      "Students in Dehiwala, Mount Lavinia, Wellawatte, Nugegoda and nearby who prefer to study face to face",
      "Students who focus better away from a screen",
      "Parents who want a quiet, distraction-free space and a teacher they can speak to directly",
      "Students who want both options and plan to switch between in-person and online",
    ],
    topicsHeading: "Subjects taught in person",
    topics: [
      {
        title: "STEM subjects",
        items: ["Mathematics", "ICT", "Physics", "Chemistry", "Biology"],
      },
      {
        title: "Levels and boards",
        items: ["O/L", "A/L", "Cambridge", "Edexcel"],
      },
    ],
    approachHeading: "What a two-hour in-person session looks like",
    approach: [
      "The first part of the session reviews the work set last time. The middle is a new topic taught step by step, followed by questions of increasing difficulty. The last part is exam-style practice, so the student leaves having used what they learned.",
      "Because the price is the same online and in person, the choice comes down to which format your child learns best in. Many students start in person and move online during exam season, or the other way round.",
    ],
    faqs: [
      {
        q: "Where exactly are the classes?",
        a: "In Kalubowila. The exact location is shared with you when you book. There are no home visits.",
      },
      {
        q: "Which areas do students come from?",
        a: "Mostly Kalubowila, Dehiwala, Mount Lavinia, Wellawatte and Nugegoda.",
      },
      {
        q: "How long is a session and what does it cost?",
        a: "In-person sessions are 2 hours. O/L is LKR 2,500 per session and A/L is LKR 3,500 per session.",
      },
      {
        q: "Can my child switch between in person and online?",
        a: "Yes. The rate is the same, so you can switch when it suits you, for example when travel is difficult near exams.",
      },
      {
        q: "Is it group tuition?",
        a: "No. Classes are one to one only.",
      },
    ],
    related: [
      "online-maths-classes-sri-lanka",
      "ict-classes-ol-al-online",
      "alevel-sciences-online",
    ],
  },
  {
    slug: "alevel-sciences-online",
    label: "A/L Physics, Chemistry, Biology",
    metaTitle: "Online A/L Physics, Chemistry & Biology Classes | Atomic Learner",
    metaDescription:
      "1:1 online A/L Physics, Chemistry and Biology for Cambridge and Edexcel students. Concepts rebuilt from the base, topical past papers, monthly updates. LKR 3,500 per session.",
    eyebrow: "A/L Sciences, online 1:1",
    h1: "Online A/L Physics, Chemistry and Biology classes",
    intro:
      "A/L Sciences reward understanding, not memorising. Students who fall behind usually have a weak link in the fundamentals, such as units, moles or core biochemistry, that shows up again in every later chapter. We find that link first and fix it.",
    levels: ["al"],
    forWhom: [
      "Cambridge and Edexcel A/L students aiming to raise a grade in Physics, Chemistry or Biology",
      "Students who can recall facts but struggle with application and data questions",
      "Students combining sciences with Maths who need a steady weekly rhythm",
      "Students who have lost time to a school change or illness and need to catch up",
    ],
    topicsHeading: "Where students most often need help",
    topics: [
      {
        title: "Physics",
        items: ["Mechanics and motion", "Waves and optics", "Electricity", "Thermal physics", "Modern physics"],
      },
      {
        title: "Chemistry",
        items: ["Stoichiometry and moles", "Energetics", "Equilibria", "Organic chemistry", "Electrochemistry"],
      },
      {
        title: "Biology",
        items: ["Cell structure and biochemistry", "Genetics", "Physiology", "Ecology", "Data and essay technique"],
      },
    ],
    approachHeading: "Teaching built on a science background",
    approach: [
      "Ms. Fathima holds a BSc in Biotechnology and an MSc in Big Data Analytics, and has more than seven years of teaching experience. That mix helps with the data-heavy and quantitative parts of the A/L syllabus, where many students lose marks.",
      "Each plan sets out the topics in order, with exam-style practice after each one. Online sessions are 1.5 hours at LKR 3,500 per session.",
    ],
    faqs: [
      {
        q: "Can I book more than one science subject?",
        a: "Yes. Many students take two sciences. Each subject has its own diagnostic and its own plan, and you pay per session.",
      },
      {
        q: "Which boards are covered?",
        a: "Cambridge and Edexcel A/L.",
      },
      {
        q: "How do online science classes work with diagrams and calculations?",
        a: "The teacher writes and draws live, and the student works along on paper. Notes and practice questions are shared after the session.",
      },
      {
        q: "What does an A/L session cost?",
        a: "LKR 3,500 per session, whether online (1.5 hours) or in person (2 hours).",
      },
    ],
    related: [
      "online-maths-classes-sri-lanka",
      "online-classes-for-sri-lankans-abroad",
      "ict-classes-ol-al-online",
    ],
  },
  {
    slug: "ict-classes-ol-al-online",
    label: "ICT classes",
    metaTitle: "Online ICT Classes for O/L & A/L, Cambridge & Edexcel | Atomic Learner",
    metaDescription:
      "1:1 ICT tuition for Cambridge and Edexcel O/L and A/L students, taught by a teacher with an MSc in Big Data Analytics. Online or in person. From LKR 2,500 per session.",
    eyebrow: "ICT, online or in person",
    h1: "ICT classes for O/L and A/L, taught one to one",
    intro:
      "ICT marks are often lost on the same few things: how a question is worded, how to show working, and how to apply a concept rather than recite it. Sessions focus on the exam style for your board and on the practical skills behind each topic.",
    levels: ["ol", "al"],
    forWhom: [
      "O/L students who want a strong grade in ICT alongside Maths and Science",
      "A/L students who need help turning theory into exam answers",
      "Students who learn best by doing, working through examples on screen",
      "Students and parents who want a teacher with a real background in IT",
    ],
    topicsHeading: "What we cover",
    topics: [
      {
        title: "Core areas",
        items: [
          "Spreadsheets and formulas",
          "Databases and data handling",
          "Data representation and storage",
          "Networks and security",
          "Systems and the impact of technology",
        ],
      },
      {
        title: "Exam skills",
        items: [
          "Reading command words correctly",
          "Structuring longer answers",
          "Applying concepts to scenarios",
          "Topical past paper drills",
        ],
      },
    ],
    approachHeading: "Practical, not just theory",
    approach: [
      "Ms. Fathima holds an MSc in Big Data Analytics and has worked in the IT industry, so examples come from how these tools are really used. Students see why a spreadsheet formula or a database design works, not only the steps to copy.",
      "Online sessions are 1.5 hours and in-person sessions are 2 hours, at the same rate: LKR 2,500 per session for O/L and LKR 3,500 per session for A/L.",
    ],
    faqs: [
      {
        q: "Do I need special software?",
        a: "For online sessions, a computer with a spreadsheet program is ideal. The teacher will tell you what to install before the first lesson.",
      },
      {
        q: "Is ICT taught alongside Maths or on its own?",
        a: "Either. Each subject has its own diagnostic and its own plan, so you can book ICT alone or together with another subject.",
      },
      {
        q: "Which exam boards?",
        a: "Cambridge and Edexcel, at O/L and A/L level.",
      },
      {
        q: "How do I get started?",
        a: "Book a short call. The student then does a diagnostic, and the plan is built from the results.",
      },
    ],
    related: [
      "online-maths-classes-sri-lanka",
      "alevel-sciences-online",
      "online-classes-for-sri-lankans-abroad",
    ],
  },
];

export const landingBySlug = Object.fromEntries(landingPages.map((p) => [p.slug, p])) as Record<
  string,
  LandingPage
>;
