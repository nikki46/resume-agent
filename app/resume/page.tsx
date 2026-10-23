import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Link2 } from "lucide-react";
import { education, workExperience, projects, skills, languages, SOURCE_URL } from "@/lib/resume";
import OrganizationLogo from "@/components/organization-logo";
export const metadata = { title: "Nicole Leon — Resume" };
export default function Resume() {
  return <main className="resume-page">
    <nav className="resume-page-nav"><Link href="/"><ArrowLeft size={15}/> Back to Nicole’s story</Link><a href={SOURCE_URL} target="_blank" rel="noreferrer">Original document <ArrowUpRight size={14}/></a></nav>
    <header><div className="eyebrow">THE PERSON BEHIND THE PAGE</div><h1>Nicole Leon</h1><p>Customer communication · Operational ownership · Hands-on AI curiosity</p></header>
    <section><h2>Education</h2><div className="resume-entry"><OrganizationLogo organization="sf-state"/><div className="resume-entry-title"><h3>{education.school}</h3><span>{education.classYear}</span></div><p>{education.degree}</p><p><strong>Major GPA: 4.00 / 4.00</strong></p><p>Relevant coursework: {education.coursework}.</p><p>Academic distinctions: {education.distinctions}.</p></div></section>
    <section><h2>Work experience</h2>{workExperience.map(job=><div key={job.id} className="resume-entry"><OrganizationLogo organization={job.organizationLogo}/><div className="resume-entry-title"><h3>{job.organization}</h3><span>{job.dates}</span></div><p className="resume-role">{job.role}</p><ul>{job.facts.map(f=><li key={f}>{f}</li>)}</ul></div>)}</section>
    <section><h2>Projects</h2>{projects.map(project=><div className="resume-entry" key={project.name}><div className="resume-entry-title"><h3>{project.name}</h3><span>{project.date}</span></div><p className="resume-role">{project.stack}</p><p>{project.description}</p></div>)}</section>
    <section><h2>Skills &amp; languages</h2><p>{skills.join(" · ")}</p><p>{languages.join(" · ")}</p></section>
    <footer><span>Based on Nicole’s updated resume. Wording lightly edited for readability.</span><Link href="/"><Link2 size={12}/> Explore with Scout</Link></footer>
  </main>;
}
