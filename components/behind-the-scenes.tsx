import { ArrowUpRight, Code2, Link2, MessageCircle, Sparkles, Cloud } from "lucide-react";

const stack = [
  { name: "Next.js + React", detail: "The interactive resume and chat interface.", icon: Code2 },
  { name: "LangChain", detail: "Connects the AI model with resume lookup and chapter tools.", icon: Link2 },
  { name: "OpenAI", detail: "Generates conversational replies from the supplied context.", icon: Sparkles },
  { name: "Vercel", detail: "Hosts the website and runs Scout’s server-side requests.", icon: Cloud },
];

export default function BehindTheScenes() {
  return <section className="behind-scenes page-width" aria-labelledby="behind-scenes-title">
    <div className="behind-scenes-heading" data-reveal>
      <div><span className="eyebrow muted">THE PROJECT</span><h2 id="behind-scenes-title">Behind the scenes: Meet Scout</h2></div>
      <a className="text-link" href="https://github.com/nikki46/resume-agent" target="_blank" rel="noreferrer">Explore the code <ArrowUpRight size={16} aria-hidden="true"/></a>
    </div>
    <p className="behind-scenes-intro" data-reveal>You’re exploring one of Nicole’s projects: an interactive resume that pairs a guided story with an AI agent. Here’s what makes Scout work.</p>
    <div className="behind-scenes-grid">
      <div><h3>The building blocks</h3><ul className="tech-stack">{stack.map(({ name, detail, icon: Icon }, index) => <li key={name} data-reveal data-reveal-delay={index * 65}><Icon size={20} strokeWidth={1.6} aria-hidden="true"/><div><strong>{name}</strong><p>{detail}</p></div></li>)}</ul><p className="stack-detail">Written in TypeScript, with custom CSS and Motion for the small animated touches.</p></div>
      <div className="scout-flow"><h3><MessageCircle size={18} aria-hidden="true"/> From question to conversation</h3><ol>
        <li data-reveal><span aria-hidden="true">01</span><div><strong>You ask.</strong><p>Your question, current chapter, and recent chat history go to the server.</p></div></li>
        <li data-reveal data-reveal-delay="80"><span aria-hidden="true">02</span><div><strong>Scout gets the context.</strong><p>LangChain gives the model Nicole’s resume facts and tools to look up a chapter or suggest another one.</p></div></li>
        <li data-reveal data-reveal-delay="160"><span aria-hidden="true">03</span><div><strong>The conversation continues.</strong><p>OpenAI generates a reply. Scout can point you to a relevant chapter; you decide where to go next.</p></div></li>
      </ol></div>
    </div>
    <div className="behind-scenes-note" data-reveal><BookNote/><p>Designed to stay grounded in the resume and acknowledge missing details. If live AI is unavailable, suggested questions offer clearly labeled prepared notes. Built with assistance; the app doesn’t save chats to a database.</p></div>
  </section>;
}

function BookNote() {
  return <Link2 size={17} aria-hidden="true"/>;
}
