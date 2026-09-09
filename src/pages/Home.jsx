import {
  Cloud,
  Code2,
  ShieldCheck,
  Network,
  ArrowRight
} from 'lucide-react'

import { Link } from 'react-router-dom'

import ProjectCard from '../components/ProjectCard'
import WriteupCard from '../components/WriteupCard'

import { projects } from '../data/projects'
import { writeups } from '../data/writeups'

export default function Home() {
  const featured = projects.filter(
    (project) => project.featured
  )

  const latestWriteups = writeups.slice(0, 3)

  return (
    <main>
      <section className="hero container">
        <div>
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
            A technical portfolio for my Cisco
            Packet Tracer labs, cloud architecture,
            web applications and cybersecurity
            CTF write-ups.
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
              Read CTF write-ups
            </Link>
          </div>
        </div>

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
              <span className="muted">$</span>
              {' show expertise\n'}

              <span className="success">✓</span>
              {' Cisco Networking\n'}

              <span className="success">✓</span>
              {' Azure Cloud Architecture\n'}

              <span className="success">✓</span>
              {' React + Laravel Web Apps\n'}

              <span className="success">✓</span>
              {' Cybersecurity & CTF Write-ups'}
            </code>
          </pre>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              FEATURED WORK
            </div>

            <h2>
              Selected projects
            </h2>
          </div>

          <Link to="/projects">
            View all projects →
          </Link>
        </div>

        <div className="grid projects-grid">
          {featured.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
            />
          ))}
        </div>
      </section>

      <section className="section container writeups-home">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              SECURITY NOTES
            </div>

            <h2>
              Latest CTF write-ups
            </h2>
          </div>

          <Link to="/writeups">
            Browse write-ups →
          </Link>
        </div>

        <div className="grid projects-grid">
          {latestWriteups.map((writeup) => (
            <WriteupCard
              writeup={writeup}
              key={writeup.id}
            />
          ))}
        </div>
      </section>

      <section
        className="section container"
        id="about"
      >
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              WHAT I BUILD
            </div>

            <h2>
              Three focus areas
            </h2>
          </div>
        </div>

        <div className="grid focus-grid">
          <div className="focus-card">
            <Network />

            <h3>
              Packet Tracer
            </h3>

            <p>
              VLANs, trunking, router-on-a-stick,
              DHCP, ACLs, SSH, switching and
              troubleshooting documentation.
            </p>
          </div>

          <div className="focus-card">
            <Cloud />

            <h3>
              Cloud Architecture
            </h3>

            <p>
              Azure-focused architecture,
              multi-cloud governance, identity,
              storage, deployment and secure
              application design.
            </p>
          </div>

          <div className="focus-card">
            <ShieldCheck />

            <h3>
              CTF Write-ups
            </h3>

            <p>
              Challenge-by-challenge notes covering
              methodology, vulnerability analysis,
              solution reasoning, remediation and
              lessons learned.
            </p>
          </div>
        </div>
      </section>

      <section className="section container about-panel">
        <div>
          <div className="eyebrow">
            PORTFOLIO PURPOSE
          </div>

          <h2>
            More than screenshots.
          </h2>
        </div>

        <div>
          <p>
            Engineering work is documented as project
            case studies, while CTF activity is
            documented as individual write-ups.

            This keeps the portfolio easy to browse
            and makes the security section feel more
            like a technical knowledge base.
          </p>

          <div className="mini-stack">
            <Code2 size={18} />

            React · Laravel · Cisco · Azure ·
            PostgreSQL · Security
          </div>
        </div>
      </section>
    </main>
  )
}