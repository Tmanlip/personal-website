import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card-top">
        <span className={`pill ${project.category.toLowerCase().replaceAll(' ', '-')}`}>{project.category}</span>
        <span className="status">{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tags">{project.tags.slice(0,4).map(tag => <span key={tag}>{tag}</span>)}</div>
      <Link className="card-link" to={`/projects/${project.id}`}>View project <ArrowUpRight size={17}/></Link>
    </article>
  )
}
