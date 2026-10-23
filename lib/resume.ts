import type { OrganizationId } from "@/components/organization-logo";
export const RESUME_URL = "/resume";
export const SOURCE_URL = "https://docs.google.com/document/d/14FkVc8HM-SQ0HEe3S8xktnZvwkQxt_3o/edit";
export type Chapter = {
  id: string; label: string; eyebrow: string; title: string; intro: string;
  dates: string; organization: string; organizationLogo?: OrganizationId; facts: string[]; takeaway: string;
  stat: string; statLabel: string; questions: string[]; welcome: string;
};
// Shared source facts keep the printable resume and Scout aligned.
export const education = {
  school: "San Francisco State University", classYear: "Class of 2026",
  degree: "B.S. Business Administration, Concentration in Information Systems · Minor in AI",
  coursework: "Artificial Intelligence (listed as current), Intro to Computer Science (A), Building Business Apps with Python (A), Business Communications (A), Business Finance (A), Marketing (A), Operations Management (A), Managerial Accounting (A), Financial Accounting (A), International Business and Multicultural Relations (A)",
  distinctions: "Outstanding Academic Achievement Award, Honor Roll, Principal’s Roll, Dean’s List ×3"
};
export const workExperience = [
  {
    id: "kizuki", organizationLogo: "kizuki" as const, organization: "Kizuki Ramen · San Francisco", dates: "May 2026 – Present",
    role: "Hostess · Expo · Barback · Inventory management",
    facts: [
      "Hired as a hostess and quickly took on responsibilities across the front of house, including expo, inventory management, and barback duties.",
      "Contributed to a team that generated $1M in sales during her tenure, averaging $9k per evening shift. The location became the most profitable of six under the same Area Director.",
      "Runs expo—the bridge between front and back of house—managing ticket times, checking order accuracy, and coordinating to-go and dine-in orders, typically overseeing 80–170 orders per hour.",
      "Forecasts stock replenishment for the coming week, including drinks, condiments, syrups, napkins, and to-go packaging.",
      "Reorganized the station so inventory levels could be identified at a glance."
    ]
  },
  {
    id: "shake-shack", organizationLogo: "shake-shack" as const, organization: "Shake Shack · San Francisco", dates: "December 2022 – May 2026", role: "Cross-Trainer",
    facts: [
      "Joined the branch-opening team and was promoted to Trainer within one year.",
      "Operated as a shift lead from 2023, responsible for store-wide efficiency across 10+ team members.",
      "Promoted to Cross-Trainer in 2025 and offered the opportunity to open new branches, reserved for select staff who best exemplify Shack standards.",
      "Trained five new and existing team members in company procedures and operational excellence.",
      "Responsible for product quality during her shifts, reviewing orders before they reach customers and filling station gaps during busy hours.",
      "During her tenure, the location became #1 among 10 Bay Area branches by efficiency (profit)—a team achievement."
    ]
  }
];
export const projects = [
  { name: "Resume Agent", stack: "LangChain · Vercel · OpenAI SDK", date: "October 2026", description: "Built an interactive chat agent that walks through her experience and resume." },
  { name: "Study App", stack: "HTML · CSS · JavaScript", date: "April 2026", description: "Built a web app that tracks tasks, with a built-in timer and radio, plus premade and customizable themes." },
  { name: "Personal Finance Tracker", stack: "HTML · CSS · JavaScript", date: "May 2025", description: "Built and deployed a web app for transactions, bank accounts, credit cards, and budgets, with light/dark themes and data import/export." },
  { name: "BART", stack: "MySQL", date: "December 2025", description: "Created a maintenance database tracking trains, maintenance requests, parts, and staff." },
  { name: "Bookstore Analytics", stack: "MySQL", date: "January 2026", description: "Created and populated a database to track bookstore inventory and analyze popularity." }
];
export const skills = ["Prompt Engineering (Certificate from CognitiveClass.AI)", "SAP", "MySQL"];
export const languages = ["SQL", "HTML", "CSS", "Python", "JavaScript"];
export const chapters: Chapter[] = [
  {
    id: "hello", label: "Meet Nicole", eyebrow: "01 / A little introduction",
    title: "People-first.\nCuriosity-led.",
    intro: "Nicole connects people, keeps busy teams moving, and learns by building. From running expo at Kizuki Ramen to creating an interactive resume agent, she pairs customer-facing experience with technical curiosity.",
    dates: education.classYear, organization: education.school, organizationLogo: "sf-state",
    facts: ["B.S. Business Administration, Information Systems concentration; AI minor at San Francisco State University, Class of 2026.", "A 4.00 major GPA, with three Dean’s List distinctions.", "Experience in customer service, team training, and operational ownership at Kizuki Ramen and Shake Shack.", "Five projects spanning AI, web apps, and databases, plus a prompt-engineering certificate from CognitiveClass.AI."],
    takeaway: "SDR connection: clear communication, follow-through, and curiosity about how technology solves problems. Nicole’s experience gives us concrete examples to explore.",
    stat: "4.00", statLabel: "major GPA · SF State",
    questions: ["Give me her 30-second introduction", "What makes her an SDR candidate?", "What should I ask Nicole?"],
    welcome: "Hi, I’m Scout! I’ll help you get to know Nicole, one little discovery at a time. Start with a question, or follow me through her story."
  },
  {
    id: "people", label: "Connecting", eyebrow: "02 / Communication in motion",
    title: "Keep people connected.\nKeep things moving.",
    intro: "Hired as a hostess at Kizuki Ramen, Nicole quickly took on more across the front of house. Running expo puts her at the center of communication between the dining room and the kitchen.",
    dates: workExperience[0].dates, organization: workExperience[0].organization, organizationLogo: "kizuki",
    facts: ["Typically oversees 80–170 orders per hour, managing ticket times and checking accuracy before orders go out.", "Coordinates dine-in and to-go orders while connecting front-of-house and back-of-house teams.", "Expanded her role to include expo, barback duties, and inventory management.", "Contributed to $1M in location sales during her tenure, averaging $9k per evening shift; the team’s location became the most profitable of six under its Area Director."],
    takeaway: "SDR connection: communicate clearly under pressure, coordinate handoffs, and keep the customer experience in focus. The sales figures reflect the location’s team performance.",
    stat: "80–170", statLabel: "orders per hour typically overseen at expo",
    questions: ["How does hospitality translate to sales?", "What shows her communication skills?", "What do the Kizuki sales figures mean?"],
    welcome: "At expo, Nicole connects the kitchen, the front-of-house team, and the customer experience. Ask about the pace, the communication, or the team results behind this chapter."
  },
  {
    id: "leadership", label: "Stepping up", eyebrow: "03 / Trust, earned over time",
    title: "Show up. Step up.\nBring others along.",
    intro: "Nicole joined a new Shake Shack location’s opening team and became a trainer within a year. As a cross-trainer, she took ownership of product quality and stepped into station gaps when service got busy.",
    dates: workExperience[1].dates, organization: workExperience[1].organization, organizationLogo: "shake-shack",
    facts: ["Operated as a shift lead from 2023, responsible for store-wide efficiency across 10+ team members.", "Trained five new and existing team members in procedures and operational excellence.", "Promoted to cross-trainer in 2025 and offered the opportunity to help open new branches.", "Reviewed orders before they reached customers and filled station gaps during busy hours.", "During her tenure, the location became #1 among 10 Bay Area branches by efficiency (profit)—a team achievement."],
    takeaway: "SDR connection: take ownership, maintain standards under pressure, and help others perform. Her promotions show increasing responsibility and trust.",
    stat: "10+", statLabel: "team members across her shifts",
    questions: ["What’s her strongest leadership example?", "What demonstrates competitive drive?", "Tell me about resilience or rejection"],
    welcome: "There’s a clear progression here: opening-team member, trainer, then cross-trainer. Ask about the quality standards, team support, and responsibilities behind those titles."
  },
  {
    id: "systems", label: "Thinking ahead", eyebrow: "04 / Anticipate what comes next",
    title: "Notice the details.\nPlan a step ahead.",
    intro: "At Kizuki Ramen, Nicole’s responsibilities extend beyond the current shift. She forecasts next week’s stock needs and makes inventory easier for the team to see and manage.",
    dates: workExperience[0].dates, organization: workExperience[0].organization, organizationLogo: "kizuki",
    facts: ["Forecasts when drinks, condiments, syrups, napkins, and to-go packaging need replenishing for the next week.", "Reorganized the station so stock levels could be identified at a glance.", "Took on inventory management alongside hostess, expo, and barback responsibilities."],
    takeaway: "SDR connection: anticipate needs, keep information clear, and follow through on the details. Her inventory work is a practical example of operational ownership.",
    stat: "1 week", statLabel: "ahead when planning stock replenishment",
    questions: ["How does she plan ahead?", "What does this say about her initiative?", "How did she make inventory easier to manage?"],
    welcome: "Good service starts before the rush. Nicole forecasts supplies and made stock levels easier to spot. Let’s explore how she approaches the details that keep a team moving."
  },
  {
    id: "builder", label: "Staying curious", eyebrow: "05 / Curiosity, put into practice",
    title: "Not just wondering.\nActually building.",
    intro: "Nicole’s Information Systems concentration and AI minor meet hands-on projects—including the resume agent you’re using. Her learning spans AI, practical web apps, and databases.",
    dates: "2025 – 2026", organization: "SF State · Personal projects", organizationLogo: "sf-state",
    facts: ["Resume Agent (October 2026): an interactive guide to her experience, listing LangChain, Vercel, and the OpenAI SDK.", "Study App: tasks, timer, radio, and themes. Personal Finance Tracker: transactions, budgets, accounts, and data import/export.", "MySQL projects: BART maintenance tracking and bookstore inventory and popularity analysis.", "Prompt Engineering certificate from CognitiveClass.AI; skills also include SAP and MySQL.", "Coursework includes AI (listed as current), Building Business Apps with Python (A), and Business Communications (A)."],
    takeaway: "SDR connection: building with AI and learning technical tools gives her practical context for conversations with developers and technical buyers.",
    stat: "5", statLabel: "projects connecting ideas to practice",
    questions: ["What has she actually built?", "What’s her AI experience?", "How would this help with technical buyers?"],
    welcome: "You’re exploring one of Nicole’s listed projects right now. Ask about this LangChain resume agent, her other apps, or the AI learning behind her technical curiosity."
  },
  {
    id: "next", label: "The next chapter", eyebrow: "06 / Connecting the dots",
    title: "People. Ownership.\nA next chapter in AI.",
    intro: "For an SDR opportunity at LangChain, Nicole brings three threads together: customer-facing communication, ownership in busy teams, and hands-on curiosity about AI.",
    dates: "Looking ahead", organization: "Exploring an SDR role at LangChain",
    facts: ["Communication: connects front and back of house while overseeing 80–170 orders per hour at Kizuki Ramen.", "Ownership: training and quality responsibilities at Shake Shack, plus inventory forecasting at Kizuki.", "Technical curiosity: an AI minor, a prompt-engineering certificate, and five projects—including this LangChain resume agent.", "Topics to explore with Nicole: why sales, why LangChain, an ambitious personal goal, and a specific experience handling rejection."],
    takeaway: "This site is built with LangChain and appears in her updated resume as a project. It opens the conversation; Nicole can share the decisions, motivations, and stories behind it.",
    stat: "Let’s talk", statLabel: "the best next step is a conversation",
    questions: ["Why might she fit LangChain?", "What does LangChain do?", "What would you ask in an interview?"],
    welcome: "We’ve connected the dots. I can recap Nicole’s experience, explain how this guide uses LangChain, or suggest a few thoughtful questions for your conversation with her."
  }
];
export const evidence = {
  identity: "Nicole Leon. Updated resume supplied by the site owner, read October 23, 2026 UTC. Class of 2026; graduation completion is not independently confirmed.",
  education, workExperience, projects, skills, languages, chapters,
  limitations: [
    "No direct SDR employment, sales quota, cold-calling results, pipeline ownership, individual sales revenue, or CRM experience is stated. Kizuki location sales are restaurant team results, not Nicole’s individual sales or SDR quota attainment.",
    "Kizuki figures are resume-reported: $1M in location sales during her tenure, an average of $9k per evening shift, most profitable of six locations under the same Area Director, and typically 80–170 orders per hour overseen at expo. Do not convert these into personal revenue, growth percentages, or a different reporting period. Measurement methodology is not supplied.",
    "Shake Shack ranked #1 of 10 Bay Area branches by efficiency (profit), as described in the resume. It is a team result; the detailed ranking formula is not supplied.",
    "No personal why-sales or why-LangChain statement, rejection story, ambitious personal goal, or specific difficult-customer anecdote has been supplied.",
    "The updated resume lists Resume Agent as Nicole’s project, using LangChain, Vercel, and the OpenAI SDK. Acknowledge this hands-on AI project. It was built with assistance; do not claim she independently engineered every part or has prior professional AI engineering experience.",
    "AI coursework is listed as current in the source document; do not infer current enrollment or confirmed graduation from Class of 2026.",
    "No contact email, calendar, relocation preference, compensation expectation, work authorization, or availability is supplied.",
    "Use this updated resume as the current source. Do not revive roles or metrics omitted from it based on older visitor or assistant messages."
  ],
  langchain: "LangChain provides open-source tools for building model-and-tool agents. LangGraph supports more controlled agent workflows. LangSmith helps teams observe, evaluate, and deploy agents. This site uses LangChain.js and OpenAI to answer questions grounded in Nicole's supplied resume and is hosted on Vercel; it is an independent candidate project, not endorsed by LangChain.",
  recruiterTopics: ["background and accomplishments", "why sales and why LangChain", "competitive drive", "resilience and grit", "communication and persuasion", "curiosity about AI"]
};
