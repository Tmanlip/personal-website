import { ArrowUpRight, Flag } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function WriteupCard({ writeup }) {
  return (
    <article className="card writeup-card">
      <div className="card-top">
        <span className="pill writeup-pill">
          <Flag size={12} />
          {writeup.category}
        </span>

        <span className="status">
          {writeup.difficulty}
        </span>
      </div>

      <div className="writeup-meta">
        {writeup.platform} · {writeup.date}
      </div>

      <h3>{writeup.title}</h3>

      <p>{writeup.summary}</p>

      <div className="tags">
        {writeup.tags.slice(0, 4).map((tag) => (
          <span key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <Link
        className="card-link"
        to={`/writeups/${writeup.id}`}
      >
        Read write-up
        <ArrowUpRight size={17} />
      </Link>
    </article>
  )
}