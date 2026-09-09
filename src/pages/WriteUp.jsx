import { Link } from 'react-router-dom'

import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Flag
} from 'lucide-react'

import { writeupCollections } from '../data/writeups'

export default function Writeups() {
  return (
    <main className="container page">
      <div className="page-head">
        <div className="eyebrow">
          CTF & SECURITY LEARNING
        </div>

        <h1>
          Write-ups & learning paths
        </h1>

        <p>
          CTF events, training platforms and structured
          cybersecurity learning paths, with individual
          solved challenges documented inside each topic.
        </p>
      </div>

      <div className="writeup-collection-grid">
        {writeupCollections.map((collection) => {
          const solved =
            collection.progress?.solved ??
            collection.writeups.length

          const total =
            collection.progress?.total ??
            collection.writeups.length

          const percentage =
            total > 0
              ? Math.round((solved / total) * 100)
              : 0

          return (
            <article
              className="panel collection-card"
              key={collection.id}
            >
              <div className="collection-card-top">
                <span className="pill writeup-pill">
                  {collection.type ===
                  'Learning Path' ? (
                    <BookOpen size={12} />
                  ) : (
                    <Flag size={12} />
                  )}

                  {collection.type}
                </span>

                <span className="status">
                  {collection.status}
                </span>
              </div>

              <span className="collection-platform">
                {collection.platform}
              </span>

              <h2>
                {collection.title}
              </h2>

              <p>
                {collection.description}
              </p>

              <div className="tags">
                {collection.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="collection-progress">
                <div className="progress-heading">
                  <span>
                    <CheckCircle2 size={14} />

                    {solved} solved
                  </span>

                  <span>
                    {percentage}%
                  </span>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-value"
                    style={{
                      width: `${percentage}%`
                    }}
                  />
                </div>

                <small>
                  {solved} / {total} challenges
                </small>
              </div>

              <Link
                className="card-link"
                to={`/writeups/${collection.id}`}
              >
                View write-ups

                <ArrowUpRight size={17} />
              </Link>
            </article>
          )
        })}
      </div>
    </main>
  )
}