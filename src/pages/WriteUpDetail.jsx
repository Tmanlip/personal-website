import { useParams, Link } from 'react-router-dom'

import {
  ArrowLeft,
  CheckCircle2,
  Flag,
  ShieldCheck
} from 'lucide-react'

import { writeups } from '../data/writeups'

export default function WriteupDetail() {
  const { id } = useParams()

  const writeup = writeups.find(
    (item) => item.id === id
  )

  if (!writeup) {
    return (
      <main className="container page">
        <h1>
          Write-up not found
        </h1>

        <Link to="/writeups">
          Back to write-ups
        </Link>
      </main>
    )
  }

  return (
    <main className="container page detail">
      <Link
        className="back"
        to="/writeups"
      >
        <ArrowLeft size={17} />
        Back to write-ups
      </Link>

      <div className="detail-hero writeup-hero">
        <span className="pill writeup-pill">
          <Flag size={12} />
          {writeup.category}
        </span>

        <h1>
          {writeup.title}
        </h1>

        <p>
          {writeup.summary}
        </p>

        <div className="writeup-facts">
          <span>
            <strong>Platform:</strong>{' '}
            {writeup.platform}
          </span>

          <span>
            <strong>Event:</strong>{' '}
            {writeup.event}
          </span>

          <span>
            <strong>Difficulty:</strong>{' '}
            {writeup.difficulty}
          </span>

          <span>
            <strong>Status:</strong>{' '}
            {writeup.status}
          </span>
        </div>

        <div className="tags large">
          {writeup.tags.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <section className="panel">
        <div className="section-icon-title">
          <Flag size={19} />

          <h2>
            Challenge objective
          </h2>
        </div>

        <p>
          {writeup.objective}
        </p>
      </section>

      <div className="detail-grid">
        <section className="panel">
          <h2>
            Methodology
          </h2>

          <div className="method-list">
            {writeup.methodology.map((step) => (
              <div
                className="method-step"
                key={step.title}
              >
                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <aside className="panel">
          <h2>
            Lab environment
          </h2>

          <div className="stack-list">
            {writeup.environment.map(
              (item, index) => (
                <div key={item}>
                  <span>
                    {String(index + 1).padStart(
                      2,
                      '0'
                    )}
                  </span>

                  {item}
                </div>
              )
            )}
          </div>
        </aside>
      </div>

      <section className="panel code-panel">
        <h2>
          Commands / technical notes
        </h2>

        <pre>
          <code>
            {writeup.commands}
          </code>
        </pre>
      </section>

      <section className="panel result-panel">
        <div className="section-icon-title">
          <CheckCircle2 size={19} />

          <h2>
            Result / proof
          </h2>
        </div>

        <p>
          {writeup.result}
        </p>
      </section>

      <div className="detail-grid">
        <section className="panel">
          <h2>
            Lessons learned
          </h2>

          <div className="check-list">
            {writeup.lessons.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} />

                <span>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="section-icon-title">
            <ShieldCheck size={19} />

            <h2>
              Remediation
            </h2>
          </div>

          <div className="check-list">
            {writeup.remediation.map((item) => (
              <div key={item}>
                <ShieldCheck size={18} />

                <span>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}