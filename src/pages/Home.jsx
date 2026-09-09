import {
  ArrowRight,
  Cloud,
  Code2,
  Network,
  ShieldCheck
} from 'lucide-react'

import { Link } from 'react-router-dom'

import ProjectCard from '../components/ProjectCard'

import { projects } from '../data/projects'
import { writeupCollections } from '../data/writeups'

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3)

  const latestCollections = writeupCollections.slice(0, 3)

  return (
    <main>
      {/* =========================
          HERO
          ========================= */}
      <section className="hero container">
        <div className="hero-content">
          <div className="eyebrow">
            NETWORKING · CLOUD · SECURITY
          </div>

          <h1>
            Building systems.
            <br />

            <span>
              Documenting the process.
            </span>
          </h1>

          <p className="hero-copy">
            A technical portfolio documenting my work in
            computer networking, cloud architecture,
            application development and cybersecurity.
          </p>

          <p className="hero-copy">
            From Cisco Packet Tracer labs and cloud
            deployments to CTF learning paths, I focus on
            understanding how systems are designed, secured,
            deployed and troubleshooted.
          </p>

          <div className="hero-actions">
            <Link
              className="btn primary"
              to="/projects"
            >
              Explore projects

              <ArrowRight size={18} />
            </Link>

            <Link
              className="btn secondary"
              to="/writeups"
            >
              Explore CTF write-ups
            </Link>
          </div>
        </div>

        {/* TERMINAL */}
        <div className="hero-terminal">
          <div className="terminal-bar">
            <span></span>
            <span></span>
            <span></span>

            <small>
              portfolio@tma:~
            </small>
          </div>

          <pre>
            <code>
              <span className="muted">
                $
              </span>
              {' whoami\n'}

              <span className="success">
                ›
              </span>
              {' Network & Security Student\n\n'}

              <span className="muted">
                $
              </span>
              {' show focus\n'}

              <span className="success">
                ✓
              </span>
              {' Network Engineering\n'}

              <span className="success">
                ✓
              </span>
              {' Cloud Architecture\n'}

              <span className="success">
                ✓
              </span>
              {' DevOps & Deployment\n'}

              <span className="success">
                ✓
              </span>
              {' Cybersecurity\n\n'}

              <span className="muted">
                $
              </span>
              {' status\n'}

              <span className="success">
                online
              </span>
            </code>
          </pre>
        </div>
      </section>

      {/* =========================
          FEATURED PROJECTS
          ========================= */}
      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              FEATURED WORK
            </div>

            <h2>
              Selected engineering projects
            </h2>

            <p>
              Networking, cloud and application projects
              documented as technical case studies.
            </p>
          </div>

          <Link to="/projects">
            View all projects →
          </Link>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard
                project={project}
                key={project.id}
              />
            ))}
          </div>
        ) : (
          <div className="panel empty-state">
            <h3>
              No featured projects yet
            </h3>

            <p>
              Mark a project with{' '}
              <code>
                featured: true
              </code>{' '}
              inside{' '}
              <code>
                src/data/projects.js
              </code>.
            </p>
          </div>
        )}
      </section>

      {/* =========================
          CTF / LEARNING PATH
          ========================= */}
      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              SECURITY LEARNING
            </div>

            <h2>
              CTFs & learning paths
            </h2>

            <p>
              Collections of solved challenges grouped by
              CTF event, platform or structured learning
              path.
            </p>
          </div>

          <Link to="/writeups">
            Browse all write-ups →
          </Link>
        </div>

        {latestCollections.length > 0 ? (
          <div className="writeup-collection-grid">
            {latestCollections.map((collection) => {
              const solved =
                collection.progress?.solved ??
                collection.writeups.filter(
                  (writeup) =>
                    writeup.status === 'Solved'
                ).length

              const total =
                collection.progress?.total ??
                collection.writeups.length

              const percentage =
                total > 0
                  ? Math.round(
                      (solved / total) * 100
                    )
                  : 0

              return (
                <Link
                  key={collection.id}
                  to={`/writeups/${collection.id}`}
                  className="panel home-collection-card"
                >
                  <div className="collection-card-top">
                    <span className="pill writeup-pill">
                      {collection.type}
                    </span>

                    <span className="status">
                      {collection.status}
                    </span>
                  </div>

                  <span className="collection-platform">
                    {collection.platform}
                  </span>

                  <h3>
                    {collection.title}
                  </h3>

                  <p>
                    {collection.description}
                  </p>

                  <div className="tags">
                    {collection.tags
                      .slice(0, 4)
                      .map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}
                  </div>

                  <div className="collection-progress">
                    <div className="progress-heading">
                      <span>
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

                  <strong>
                    View write-ups →
                  </strong>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="panel empty-state">
            <h3>
              No CTF collections yet
            </h3>

            <p>
              Add your first CTF event or learning path
              inside{' '}
              <code>
                src/data/writeups.js
              </code>.
            </p>
          </div>
        )}
      </section>

      {/* =========================
          FOCUS AREAS
          ========================= */}
      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              TECHNICAL FOCUS
            </div>

            <h2>
              What I work on
            </h2>

            <p>
              My projects currently focus on networking,
              cloud engineering and cybersecurity.
            </p>
          </div>
        </div>

        <div className="grid focus-grid">
          {/* NETWORKING */}
          <div className="focus-card">
            <div className="focus-icon">
              <Network size={25} />
            </div>

            <h3>
              Network Engineering
            </h3>

            <p>
              Designing and troubleshooting segmented
              networks using Cisco technologies and
              Packet Tracer.
            </p>

            <div className="tags">
              <span>VLAN</span>
              <span>802.1Q</span>
              <span>Routing</span>
              <span>ACL</span>
              <span>SSH</span>
            </div>
          </div>

          {/* CLOUD */}
          <div className="focus-card">
            <div className="focus-icon">
              <Cloud size={25} />
            </div>

            <h3>
              Cloud Architecture
            </h3>

            <p>
              Designing cloud systems with a focus on
              infrastructure, governance, security,
              identity and deployment automation.
            </p>

            <div className="tags">
              <span>Azure</span>
              <span>AWS</span>
              <span>OCI</span>
              <span>IaC</span>
              <span>DevOps</span>
            </div>
          </div>

          {/* SECURITY */}
          <div className="focus-card">
            <div className="focus-icon">
              <ShieldCheck size={25} />
            </div>

            <h3>
              Cybersecurity
            </h3>

            <p>
              Improving practical security knowledge
              through CTF challenges, labs, secure
              architecture and defensive analysis.
            </p>

            <div className="tags">
              <span>CTF</span>
              <span>Web</span>
              <span>Forensics</span>
              <span>Crypto</span>
              <span>Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PORTFOLIO PHILOSOPHY
          ========================= */}
      <section className="section container">
        <div className="about-panel">
          <div>
            <div className="eyebrow">
              HOW I LEARN
            </div>

            <h2>
              Build it.
              <br />

              Understand it.
              <br />

              Document it.
            </h2>
          </div>

          <div>
            <p>
              I prefer learning through implementation.
              Instead of documenting only the final result,
              I try to explain the architecture,
              configuration, troubleshooting and security
              decisions behind my work.
            </p>

            <p>
              CTF activities are organized differently:
              each event or learning path acts as a
              collection, while individual solved
              challenges are documented as detailed
              write-ups.
            </p>

            <div className="mini-stack">
              <Code2 size={18} />

              React · Laravel · Cisco · Azure ·
              PostgreSQL · Git · Security
            </div>

            <div
              className="hero-actions"
              style={{ marginTop: '24px' }}
            >
              <Link
                className="btn secondary"
                to="/about"
              >
                More about me

                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
          ========================= */}
      <section className="section container">
        <div className="panel home-cta">
          <div>
            <div className="eyebrow">
              EXPLORE THE LAB
            </div>

            <h2>
              See what I've been building
              and learning.
            </h2>

            <p>
              Browse engineering projects or explore
              cybersecurity learning paths and challenge
              write-ups.
            </p>
          </div>

          <div className="hero-actions">
            <Link
              className="btn primary"
              to="/projects"
            >
              View projects

              <ArrowRight size={18} />
            </Link>

            <Link
              className="btn secondary"
              to="/writeups"
            >
              CTF write-ups
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}