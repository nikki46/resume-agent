import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Link2 } from "lucide-react";
import { chapters, SOURCE_URL } from "@/lib/resume";
export const metadata = { title: "Nicole Leon — Resume" };
export default function Resume() {
  return <main className="resume-page">
    <nav className="resume-page-nav"><Link href="/"><ArrowLeft size={15}/> Back to Scout</Link><a href={SOURCE_URL} target="_blank" rel="noreferrer">Original document <ArrowUpRight size={14}/></a></nav>
    <header><div className="eyebrow">THE PERSON BEHIND THE PAGE</div><h1>Nicole Leon</h1><p>Customer experience · Team leadership · Technical curiosity</p></header>
    <section><h2>Education</h2><div className="resume-entry"><div className="resume-entry-title"><h3>San Francisco State University</h3><span>Class of 2026</span></div><p>B.S. Business Administration, Concentration in Information Systems · Minor in AI</p><p><strong>Major GPA: 4.00 / 4.00</strong></p><p>Relevant coursework: Information Systems Analysis &amp; Design (A), IT Project Management (A), Managing Enterprise Data (A), Intro to Computer Science (A).</p><p>Academic distinctions: Outstanding Academic Achievement Award, Honor Roll, Principal’s Roll, Dean’s List ×3.</p></div></section>
    <section><h2>Work experience</h2>{[chapters[2],chapters[1],chapters[3]].map((c,i)=><div key={c.id} className="resume-entry"><div className="resume-entry-title"><h3>{c.organization}</h3><span>{c.dates}</span></div><p className="resume-role">{["Cross-Trainer", "Hostess / Server", "Staff Member"][i]}</p>{i===0&&<p>Part of the initial branch-opening team; promoted to Trainer within one year. As cross-trainer, responsible for product quality, reviewing work before it reaches customers, and filling station gaps during busy hours.</p>}<ul>{c.facts.map(f=><li key={f}>{f}</li>)}</ul></div>)}</section>
    <section><h2>Projects</h2>{chapters[4].facts.slice(0,4).map(f=><p className="resume-project" key={f}>{f}</p>)}</section>
    <section><h2>Skills</h2><p>Microsoft Suite · MySQL · SQL · HTML · CSS · Python · JavaScript</p></section>
    <footer><span>Based on Nicole’s supplied resume. Wording lightly edited for readability.</span><Link href="/"><Link2 size={12}/> Explore with Scout</Link></footer>
  </main>;
}
