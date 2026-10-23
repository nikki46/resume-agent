export const RESUME_URL = "/resume";
export const SOURCE_URL = "https://docs.google.com/document/d/14FkVc8HM-SQ0HEe3S8xktnZvwkQxt_3o/edit";
export type Chapter = {
  id: string; label: string; eyebrow: string; title: string; intro: string;
  dates: string; organization: string; facts: string[]; takeaway: string;
  stat: string; statLabel: string; questions: string[]; welcome: string;
};
export const chapters: Chapter[] = [
  {
    id: "hello", label: "Meet Nicole", eyebrow: "01 / A little introduction",
    title: "People-first.\nCuriosity-led.",
    intro: "Nicole brings together hands-on customer experience, growing leadership responsibility, and a curiosity for how technology works. Follow the thread from her first process improvement to the apps she’s built.",
    dates: "The story so far", organization: "Nicole Leon",
    facts: ["B.S. Business Administration, Information Systems concentration; AI minor at San Francisco State University, Class of 2026.", "A 4.00 major GPA, with three Dean’s List distinctions.", "Experience spanning hospitality, team training, library operations, and software projects."],
    takeaway: "An SDR connects people with possibilities. Nicole’s experience gives us several concrete places to explore that connection.",
    stat: "4.00", statLabel: "major GPA · SF State",
    questions: ["Give me her 30-second introduction", "What makes her an SDR candidate?", "What should I ask Nicole?"],
    welcome: "Hi, I’m Scout! I’ll help you get to know Nicole, one little discovery at a time. Start with a question, or follow me through her story."
  },
  {
    id: "people", label: "Connecting", eyebrow: "02 / The art of connecting",
    title: "Good conversations\nstart with listening.",
    intro: "At KC Branaghan’s, Nicole helped turn a busy room into a welcoming experience—balancing customer preferences, wait times, and the needs of the team.",
    dates: "February – December 2021", organization: "KC Branaghan’s · Long Beach",
    facts: ["Managed seating arrangements, table turnover, special events, and customer preferences.", "Communicated accurate wait-time estimates and coordinated timely seating.", "Worked closely with servers, bartenders, and management to keep service moving."],
    takeaway: "SDR connection: listening, setting expectations, and coordinating a smooth handoff all matter in an early customer conversation.",
    stat: "People", statLabel: "at the center of the experience",
    questions: ["How does hospitality translate to sales?", "What shows her communication skills?", "Has she handled sales objections?"],
    welcome: "This chapter is all about people. Nicole’s hospitality experience shows how she handled expectations and coordinated with a team. What would you like to explore?"
  },
  {
    id: "leadership", label: "Stepping up", eyebrow: "03 / Trust, earned over time",
    title: "Show up. Step up.\nBring others along.",
    intro: "Nicole joined a new Shake Shack location’s opening team. Within a year, she became a trainer. She later grew into a cross-trainer role, trusted to uphold standards and support others.",
    dates: "December 2022 – September 2026", organization: "Shake Shack · San Francisco",
    facts: ["Operated as a shift lead from 2023, responsible for efficiency across 10+ team members.", "Trained five new and existing team members in procedures and operational excellence.", "Promoted to cross-trainer in 2025 and offered the opportunity to help open new branches.", "During her tenure, the location became #1 among 10 Bay Area branches—a team achievement."],
    takeaway: "SDR connection: consistent execution, ownership, and helping a team improve. Her promotions are concrete evidence of increasing trust.",
    stat: "10+", statLabel: "team members across her shifts",
    questions: ["What’s her strongest leadership example?", "What demonstrates competitive drive?", "Tell me about resilience or rejection"],
    welcome: "There’s a lovely progression here: opening-team member, trainer, then cross-trainer. Ask me about the responsibilities behind those titles."
  },
  {
    id: "systems", label: "Making it better", eyebrow: "04 / Notice a problem. Make a difference.",
    title: "A small change.\nA meaningful impact.",
    intro: "At Los Alamitos Public Library, Nicole noticed an opportunity to make the way books were organized and routed more intuitive. Then she did something about it.",
    dates: "December 2018 – August 2019", organization: "Los Alamitos Public Library",
    facts: ["Handled check-in and prepared books and media for distribution.", "Proposed and implemented an organization system that was easier for patrons to search.", "Designed labels for shelving, transfers to other branches, and holds.", "Her routing system eliminated branch-number routing mistakes and reduced overall errors by over 50%."],
    takeaway: "SDR connection: notice friction, understand the problem, and improve the process. This is her clearest quantified example of initiative.",
    stat: "50%+", statLabel: "reduction in overall routing errors",
    questions: ["How did she improve the library process?", "What does this say about her initiative?", "How was the 50% measured?"],
    welcome: "Here’s a concrete result: a clearer routing system and over 50% fewer overall errors. We can unpack what the resume says—and what would be worth asking Nicole directly."
  },
  {
    id: "builder", label: "Staying curious", eyebrow: "05 / Curiosity, put into practice",
    title: "Not just wondering.\nActually building.",
    intro: "An Information Systems concentration and an AI minor meet hands-on projects: web apps for studying and personal finance, plus databases for transit maintenance and bookstore analytics.",
    dates: "2025 – 2026", organization: "SF State · Independent projects",
    facts: ["Study App (April 2026): tasks, timer, radio, and customizable themes using HTML, CSS, and JavaScript.", "Personal Finance Tracker (May 2025): a deployed web app with transactions, budgets, accounts, light/dark themes, and data import/export.", "BART maintenance database (December 2025): trains, requests, parts, and staff in MySQL.", "Bookstore Analytics (January 2026): inventory and popularity analysis using MySQL.", "Listed languages: SQL, HTML, CSS, Python, and JavaScript."],
    takeaway: "SDR connection: hands-on technical learning can help her ask more informed questions and build rapport with technical buyers.",
    stat: "4", statLabel: "projects connecting ideas to practice",
    questions: ["What has she actually built?", "What’s her AI experience?", "How would this help with technical buyers?"],
    welcome: "This is the builder side of Nicole: practical projects, an AI minor, and a habit of learning by doing. Pick a project or ask how that connects to an SDR role."
  },
  {
    id: "next", label: "The next chapter", eyebrow: "06 / Connecting the dots",
    title: "People. Possibility.\nA next chapter in AI.",
    intro: "For an SDR opportunity at LangChain, the interesting thread is how Nicole’s customer experience, initiative, and technical learning could come together.",
    dates: "Looking ahead", organization: "Exploring an SDR role at LangChain",
    facts: ["Customer experience: listening, managing expectations, and coordinating handoffs.", "Ownership: promotions, training responsibilities, and a measurable process improvement.", "Technical curiosity: an AI minor and practical web and database projects.", "Topics to explore with Nicole: why sales, why LangChain, an ambitious personal goal, and a specific experience handling rejection."],
    takeaway: "This site is built with LangChain. It’s a conversation starter for her application; her own motivations and stories belong in the interview.",
    stat: "Let’s talk", statLabel: "the best next step is a conversation",
    questions: ["Why might she fit LangChain?", "What does LangChain do?", "What would you ask in an interview?"],
    welcome: "We’ve connected the dots. I can recap Nicole’s experience, explain how this guide uses LangChain, or suggest a few thoughtful questions for your conversation with her."
  }
];
export const evidence = {
  identity: "Nicole Leon. Resume supplied by the site owner. Class of 2026; graduation completion is not independently confirmed.",
  chapters,
  limitations: [
    "No direct SDR employment, sales quota, cold calling results, pipeline, revenue, or CRM experience is stated.",
    "No personal why-sales or why-LangChain statement, rejection story, ambitious personal goal, or specific difficult-customer anecdote has been supplied.",
    "Library measurement methodology is not provided. Treat the over-50% figure as a resume-reported result.",
    "The #1 Shake Shack location ranking is a team result; do not credit Nicole alone or invent how the ranking was calculated.",
    "AI minor does not establish production AI engineering or prior LangChain experience. This site was built with assistance; do not claim Nicole independently built it.",
    "No contact email, calendar, relocation preference, compensation expectation, work authorization, or availability is supplied."
  ],
  langchain: "LangChain provides open-source tools for building model-and-tool agents. LangGraph supports more controlled agent workflows. LangSmith helps teams observe, evaluate, and deploy agents. This site uses LangChain.js and OpenAI to answer questions grounded in Nicole's supplied resume; it is an independent candidate project, not endorsed by LangChain.",
  recruiterTopics: ["background and accomplishments", "why sales and why LangChain", "competitive drive", "resilience and grit", "communication and persuasion", "curiosity about AI"]
};
