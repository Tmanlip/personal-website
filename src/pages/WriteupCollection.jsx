import { Link, useParams } from 'react-router-dom'

import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Circle,
  Flag
} from 'lucide-react'

import { writeupCollections } from '../data/writeups'

export default function WriteupCollection() {
  const { collectionId } = useParams()

  const collection = writeupCollections.find(
    (item) => item.id === collectionId
  )

  if (!collection) {
    return (
      <main className="container page">
        <h1>
          CTF collection not found
        </h1>

        <Link to="/writeups">
          Back to write-ups
        </Link>
      </main>
    )
  }

  const solved = collection.writeups.filter(
    (writeup) =>
      writeup.status === 'Solved'
  ).length

  return (
    <main className="container page">
      <Link
        className="back"
        to="/writeups"
      >
        <ArrowLeft size={17} />

        All write-ups
      </Link>

      <section className="collection-hero">
        <div>
          <span className="pill writeup-pill">
            {collection.type ===
            'Learning Path' ? (
              <BookOpen size={12} />
            ) : (
              <Flag size={12} />
            )}

            {collection.type}
          </span>

          <div className="eyebrow collection-eyebrow">
            {collection.platform}
          </div>

          <h1>
            {collection.title}
          </h1>

          <p>
            {collection.description}
          </p>

          <div className="tags large">
            {collection.tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="panel collection-summary">
          <span>
            COMPLETION
          </span>

          <strong>
            {solved}
          </strong>

          <p>
            solved challenges
          </p>

          <div className="collection-summary-line">
            <span>
              Total documented
            </span>

            <b>
              {collection.writeups.length}
            </b>
          </div>

          <div className="collection-summary-line">
            <span>
              Status
            </span>

            <b>
              {collection.status}
            </b>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              SOLVED CHALLENGES
            </div>

            <h2>
              Write-ups
            </h2>
          </div>
        </div>

        <div className="challenge-list">
          {collection.writeups.map(
            (writeup, index) => (
              <Link
                key={writeup.id}
                className="challenge-row"
                to={`/writeups/${collection.id}/${writeup.id}`}
              >
                <div className="challenge-number">
                  {String(index + 1).padStart(
                    2,
                    '0'
                  )}
                </div>

                <div className="challenge-main">
                  <div className="challenge-title-row">
                    <h3>
                      {writeup.title}
                    </h3>

                    {writeup.status ===
                    'Solved' ? (
                      <span className="challenge-solved">
                        <CheckCircle2
                          size={14}
                        />

                        Solved
                      </span>
                    ) : (
                      <span>
                        <Circle size={14} />
                        Pending
                      </span>
                    )}
                  </div>

                  <p>
                    {writeup.summary}
                  </p>

                  <div className="tags">
                    <span>
                      {writeup.category}
                    </span>

                    <span>
                      {writeup.difficulty}
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="challenge-arrow"
                />
              </Link>
            )
          )}
        </div>
      </section>
    </main>
  )
}