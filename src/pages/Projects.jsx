import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const filters = [
  'All',
  'Packet Tracer',
  'Cloud Architecture'
]

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(() => {
    if (filter === 'All') {
      return projects
    }

    return projects.filter(
      (project) => project.category === filter
    )
  }, [filter])

  return (
    <main className="container page">
      <div className="page-head">
        <div className="eyebrow">
          PROJECT ARCHIVE
        </div>

        <h1>
          Engineering projects
        </h1>

        <p>
          Packet Tracer networking labs, cloud architecture
          and web applications documented as engineering
          case studies.
        </p>
      </div>

      <div className="filter-row">
        {filters.map((item) => (
          <button
            key={item}
            className={filter === item ? 'active' : ''}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid projects-grid">
        {visible.map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
          />
        ))}
      </div>
    </main>
  )
}