"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, Code2, ExternalLink, Leaf, Link2, MessageCircle, RotateCcw, Send, Sparkles, Users, X } from "lucide-react";
import { chapters, RESUME_URL } from "@/lib/resume";
import ScoutLion from "./scout-lion";
import JourneyArt from "./journey-art";

type Message = { role: "user" | "assistant"; content: string; chapter?: string; sources?: string[]; suggestedChapter?: string; error?: boolean; mode?: "live" | "resume-note" };
const icons = [Sparkles, MessageCircle, Users, BookOpen, Code2, Leaf];
export default function ScoutExperience() {
  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState<number[]>([0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [liveStatus, setLiveStatus] = useState<"checking" | "ready" | "unavailable">("checking");
  const reduced = useReducedMotion();
  const chatEnd = useRef<HTMLDivElement>(null);
  const chatArea = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const aboutDialog = useRef<HTMLDialogElement>(null);
  const request = useRef<AbortController | null>(null);
  const chapter = chapters[active];
  const Icon = icons[active];
  useEffect(() => { fetch("/api/chat").then(r => r.json() as Promise<{ available: boolean }>).then(d => setLiveStatus(d.available ? "ready" : "unavailable")).catch(() => setLiveStatus("unavailable")); return () => request.current?.abort(); }, []);
  useEffect(() => { if (chatArea.current) chatArea.current.scrollTo({ top: chatArea.current.scrollHeight, behavior: reduced ? "auto" : "smooth" }); }, [messages, busy, active, reduced]);
  useEffect(() => { if (showAbout) aboutDialog.current?.showModal(); else aboutDialog.current?.close(); }, [showAbout]);
  function go(index: number, scroll = false) {
    setActive(index); setVisited(v => v.includes(index) ? v : [...v, index]);
    if (scroll) document.getElementById("journey")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }
  async function ask(question: string) {
    if (busy || !question.trim()) return;
    const next: Message[] = [...messages, { role: "user", content: question.trim(), chapter: chapter.id }];
    setMessages(next); setInput(""); setBusy(true);
    const controller = new AbortController(); request.current = controller;
    const timer = setTimeout(() => controller.abort(), 45000);
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, signal: controller.signal, body: JSON.stringify({ chapter: chapter.id, messages: next.filter(m => !m.error).slice(-10).map(m => ({ role: m.role, content: m.content })) }) });
      const result = await response.json() as { answer: string; error?: string; sources?: string[]; suggestedChapter?: string; mode?: "live" | "resume-note" };
      if (!response.ok) { setLiveStatus("unavailable"); throw new Error(result.error || "Scout couldn’t connect. Please try again in a moment."); }
      setMessages(m => [...m, { role: "assistant", content: result.answer, sources: result.sources, suggestedChapter: result.suggestedChapter, chapter: chapter.id, mode: result.mode }]); setLiveStatus(result.mode === "resume-note" ? "unavailable" : "ready");
    } catch (err) {
      const message = err instanceof Error && err.name !== "AbortError" ? err.message : "That took a little too long. Please try your question again.";
      setMessages(m => [...m, { role: "assistant", content: message, error: true, chapter: chapter.id }]);
    } finally { clearTimeout(timer); setBusy(false); }
  }
  return <>
    <a className="skip-link" href="#journey">Skip to Nicole’s experience</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Nicole Leon home"><span className="name-mark">Nicole Leon<span className="brand-period">.</span></span><span className="brand-description">PEOPLE. INITIATIVE. POSSIBILITY.</span></a>
      <nav aria-label="Main navigation"><button className="text-link" onClick={() => go(active, true)}>Explore her story <ArrowDown size={14}/></button><a className="resume-link" href={RESUME_URL} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={15}/></a></nav>
    </header>
    <main id="top">
      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="green-dot"/> PEOPLE-FIRST. CURIOSITY-LED.</div>
          <h1 id="hero-title">Nicole<br/><em>Leon.</em></h1><p className="hero-tagline">A people person.<br/>A problem solver. A builder.</p>
          <p className="hero-description">From earning trust on a busy team to making a process better, get to know the experiences—and the curiosity—Nicole brings to her next chapter.</p>
          <div className="hero-actions"><button className="button primary" onClick={() => go(0, true)}>Explore Nicole’s story <ArrowRight size={17}/></button><span>6 chapters · your pace</span></div>
          <div className="application-note"><span className="note-line"/> An interactive resume for an <strong>SDR role at LangChain</strong></div>
        </div>
        <JourneyArt/>
      </section>
      <section className="guide-introduction page-width" aria-labelledby="scout-introduction-title">
        <div className="guide-introduction-mascot"><ScoutLion happy/></div>
        <div className="guide-speech-bubble">
          <span className="guide-introduction-label">YOUR GUIDE TO NICOLE</span>
          <h2 id="scout-introduction-title">Hi, I’m Scout!</h2>
          <p>I’m Nicole’s resume agent. I’ll walk you through her experience, and you can chat with me at every stop. Ask a question, follow your curiosity, or take the tour at your own pace.</p>
          <button className="guide-introduction-action" onClick={() => go(0, true)}>Let’s explore her story <ArrowRight size={17}/></button>
        </div>
      </section>
      <div className="built-strip"><span><Link2 size={15}/> Built with <a href="https://www.langchain.com/" target="_blank" rel="noreferrer">LangChain <ArrowUpRight size={12}/></a></span><span className="strip-divider"/><span>Real experience. A more human introduction.</span><button onClick={() => setShowAbout(true)}>About the AI guide <ArrowUpRight size={13}/></button></div>
      <section id="journey" className="journey-section page-width" aria-labelledby="journey-title">
        <div className="section-heading"><div><div className="eyebrow muted">A FEW STOPS ALONG THE WAY</div><h2 id="journey-title">Every chapter adds something.</h2></div><span className="progress-label">{visited.length} of 6 explored <span className="progress-track"><span style={{ width: `${visited.length / 6 * 100}%` }}/></span></span></div>
        <div className="chapter-nav" role="tablist" aria-label="Resume chapters">
          {chapters.map((c, i) => <button key={c.id} id={`tab-${c.id}`} role="tab" aria-selected={active === i} aria-controls="chapter-panel" tabIndex={active === i ? 0 : -1} className={active === i ? "chapter-tab active" : "chapter-tab"} onClick={() => go(i)} onKeyDown={e => { if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) { e.preventDefault(); const n = e.key === "Home" ? 0 : e.key === "End" ? 5 : (i + (e.key === "ArrowRight" ? 1 : 5)) % 6; go(n); document.getElementById(`tab-${chapters[n].id}`)?.focus(); } }}><span className="tab-number">{visited.includes(i) && i !== active ? <Check size={13}/> : String(i + 1).padStart(2, "0")}</span><span>{c.label}</span></button>)}
        </div>
        <div className="journey-grid">
          <div id="chapter-panel" role="tabpanel" aria-labelledby={`tab-${chapter.id}`} tabIndex={0} className="story-panel">
            <AnimatePresence mode="wait" initial={false}><motion.article key={chapter.id} initial={{ opacity: 0, y: reduced ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -8 }} transition={{ duration: reduced ? 0 : .22 }}>
              <div className="story-top"><span className="eyebrow muted">{chapter.eyebrow}</span><span className="chapter-symbol"><Icon size={22} strokeWidth={1.5}/></span></div>
              <h3>{chapter.title.split("\n").map((line, i) => <span key={line}>{line}{i === 0 && <br/>}</span>)}</h3>
              <p className="chapter-intro">{chapter.intro}</p>
              <div className="organization"><strong>{chapter.organization}</strong><span>{chapter.dates}</span></div>
              <div className="facts-stat"><ul className="facts">{chapter.facts.map(f => <li key={f}>{f}</li>)}</ul><div className="stat-card"><span className="stat-spark">✳</span><strong>{chapter.stat}</strong><span>{chapter.statLabel}</span></div></div>
              <div className="takeaway"><Leaf size={18}/><p>{chapter.takeaway}</p></div>
              <a className="source-link" href={RESUME_URL} target="_blank" rel="noreferrer">From Nicole’s supplied resume <ExternalLink size={11}/></a>
            </motion.article></AnimatePresence>
            <div className="chapter-controls"><button className="previous" onClick={() => go(active - 1, true)} disabled={active === 0}><ArrowLeft size={16}/> Previous</button><span>{active + 1} / 6</span><button className="next" onClick={() => go(active === 5 ? 0 : active + 1, true)}>{active === 5 ? "Back to the beginning" : "Next chapter"} {active === 5 ? <RotateCcw size={15}/> : <ArrowRight size={16}/>}</button></div>
          </div>
          <aside className="chat-panel" aria-label="Chat with Scout">
            <div className="chat-header"><div className="scout-avatar"><ScoutLion/></div><div><h3>Ask about Nicole</h3><span><span className="status-dot"/> With Scout, her AI guide</span></div><button aria-label="Clear conversation" title="Clear conversation" disabled={busy || !messages.length} className="icon-button" onClick={() => setMessages([])}><RotateCcw size={15}/></button></div>
            <div className="chat-scroll" ref={chatArea} role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversation">
              <div className="welcome-message"><span className="message-author">SCOUT</span><p>{chapter.welcome}</p></div>
              {messages.map((m, i) => <div className={`chat-message ${m.role} ${m.error ? "chat-error" : ""}`} key={i}><span className="message-author">{m.role === "user" ? "YOU" : m.error ? "A QUICK NOTE" : m.mode === "resume-note" ? "PREPARED RESUME NOTE" : "SCOUT"}</span><p>{m.content}</p>{m.sources && <div className="answer-source"><BookOpen size={11}/> Based on Nicole’s resume &amp; approved site context</div>}{m.suggestedChapter && m.suggestedChapter !== chapter.id && <button className="jump-link" onClick={() => go(chapters.findIndex(c => c.id === m.suggestedChapter))}>Explore {chapters.find(c => c.id === m.suggestedChapter)?.label.toLowerCase()} <ArrowRight size={13}/></button>}{m.error && <button className="jump-link" disabled={busy} onClick={() => { const prior = messages.slice(0, i).reverse().find(v => v.role === "user"); if(prior) ask(prior.content); }}>Try again <RotateCcw size={12}/></button>}</div>)}
              {busy && <div className="thinking"><span/><span/><span/><span className="sr-only">Scout is thinking</span></div>}
              <div ref={chatEnd}/>
            </div>
            <div className="chat-bottom"><div className="question-label"><Sparkles size={12}/> A little conversation starter</div><div className="suggestions">{chapter.questions.map(q => <button key={q} disabled={busy} onClick={() => ask(q)}>{q}<ArrowUpRight size={13}/></button>)}</div>
              {liveStatus === "unavailable" && <p className="availability-note">Live chat is temporarily unavailable. Suggested questions have prepared resume notes.</p>}
              <form className="chat-form" onSubmit={e => { e.preventDefault(); ask(input); }}><label htmlFor="question" className="sr-only">Ask Scout about Nicole</label><input ref={field} id="question" value={input} onChange={e => setInput(e.target.value)} maxLength={1000} placeholder="What would you like to know?" autoComplete="off" disabled={busy}/><button type="submit" disabled={busy || !input.trim()} aria-label="Send question"><Send size={16}/></button></form>
              <p className="chat-disclaimer">AI guide, grounded in her resume. <button onClick={() => setShowAbout(true)}>About Scout</button></p>
            </div>
          </aside>
        </div>
        <div className="pause-note"><span>✧</span> Take your time. Ask a question. The next chapter can wait.</div>
      </section>
      <section className="closing page-width"><div><span className="eyebrow">THE PERSON BEHIND THE PAGE</span><h2>Some things are best<br/>discovered in conversation.</h2><p>You’ve seen the highlights.<br/>Nicole can tell you the stories behind them.</p><a className="button primary" href={RESUME_URL} target="_blank" rel="noreferrer">Read Nicole’s resume <ArrowUpRight size={17}/></a></div></section>
    </main>
    <footer className="page-width"><span className="footer-brand">Nicole Leon.</span><p>An interactive introduction.</p><button onClick={() => setShowAbout(true)}>Built with LangChain <Link2 size={14}/></button><a href="https://github.com/nikki46/resume-agent" target="_blank" rel="noreferrer">View source <ArrowUpRight size={12}/></a></footer>
    <dialog aria-labelledby="about-title" ref={aboutDialog} onCancel={() => setShowAbout(false)} onClick={e => { if(e.target === aboutDialog.current) setShowAbout(false); }} className="about-dialog"><button className="dialog-close icon-button" aria-label="Close about Scout" onClick={() => setShowAbout(false)}><X size={20}/></button><ScoutLion className="dialog-scout"/><div className="eyebrow">A LITTLE TRANSPARENCY</div><h2 id="about-title">Curious by design.<br/>Grounded in Nicole.</h2><p>Scout is an AI guide built with <strong>LangChain.js</strong> and OpenAI. It uses Nicole’s supplied resume and approved site context to answer questions and help you explore her experience.</p><p>It speaks about Nicole, not as her. When a personal story or detail hasn’t been supplied, Scout will say so. Connections to SDR work are interpretations, not claims of prior sales results.</p><p>Your messages are sent to the AI provider to generate replies. This app does not save your conversation to a database; it disappears when you reload. Please avoid sharing sensitive information.</p><p className="small-print">An independent candidate project, built with assistance. Not affiliated with or endorsed by LangChain. Company context checked October 2026.</p><a className="text-link" href="https://www.langchain.com/oss-overview" target="_blank" rel="noreferrer">Learn about LangChain <ArrowUpRight size={14}/></a></dialog>
  </>;
}
