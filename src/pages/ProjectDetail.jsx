import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  if (!project) return <main className="container page"><h1>Project not found</h1><Link to="/projects">Back to projects</Link></main>
  return (
    <main className="container page detail">
      <Link className="back" to="/projects"><ArrowLeft size={17}/> Back to projects</Link>
      <div className="detail-hero">
        <span className="pill">{project.category}</span>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="tags large">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
      </div>
      <div className="detail-grid">
        <section className="panel"><h2>Project highlights</h2><div className="check-list">{project.highlights.map(h => <div key={h}><CheckCircle2 size={18}/><span>{h}</span></div>)}</div></section>
        <aside className="panel"><h2>Architecture / stack</h2><div className="stack-list">{project.architecture.map((a,i) => <div key={a}><span>{String(i+1).padStart(2,'0')}</span>{a}</div>)}</div></aside>
      </div>
      <section className="panel code-panel"><h2>Configuration / implementation notes</h2><pre><code>{project.code}</code></pre></section>
      <section className="panel"><h2>What to add next</h2><p>Add screenshots from Packet Tracer, architecture diagrams, GitHub links, deployment URLs, testing evidence and a short “Lessons Learned” section for each project.</p></section>
    </main>
  )
}
