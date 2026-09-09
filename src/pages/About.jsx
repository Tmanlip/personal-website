import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Cloud,
  Code2,
  GraduationCap,
  Network,
  ShieldCheck,
  Terminal
} from 'lucide-react'

export default function About() {
  const skills = {
    Networking: [
      'Cisco',
      'VLAN',
      '802.1Q',
      'Router-on-a-Stick',
      'ACL',
      'DHCP',
      'SSH',
      'Packet Tracer'
    ],

    Cloud: [
      'Microsoft Azure',
      'AWS',
      'OCI',
      'Azure App Service',
      'Azure Static Web Apps',
      'Azure Blob Storage',
      'Key Vault'
    ],

    Development: [
      'React',
      'Laravel',
      'PHP',
      'JavaScript',
      'PostgreSQL',
      'MongoDB',
      'Python',
      'Git'
    ],

    Security: [
      'Network Security',
      'CTF',
      'Web Security',
      'Cryptography',
      'Forensics',
      'RBAC',
      'MFA',
      'Security Hardening'
    ]
  }

  return (
    <main className="container page about-page">
      {/* INTRODUCTION */}
      <section className="about-hero">
        <div>
          <div className="eyebrow">
            ABOUT ME
          </div>

          <h1>
            Network & Security student
            <br />

            <span>
              building beyond the classroom.
            </span>
          </h1>

          <p className="about-intro">
            I'm a Computer Science student specialising in
            Computer Networks and Security, with interests
            spanning network engineering, cloud architecture,
            cybersecurity and application development.
          </p>

          <p className="about-intro">
            I use this portfolio to document not only what I
            build, but also the architecture, configuration,
            troubleshooting and security decisions behind
            each project.
          </p>
        </div>

        <div className="about-terminal">
          <div className="terminal-bar">
            <span></span>
            <span></span>
            <span></span>

            <small>about@portfolio:~</small>
          </div>

          <div className="about-terminal-content">
            <Terminal size={26} />

            <div>
              <span className="terminal-key">
                focus
              </span>

              <p>
                Networking · Cloud · Security
              </p>
            </div>

            <div>
              <span className="terminal-key">
                approach
              </span>

              <p>
                Build · Test · Break · Fix · Document
              </p>
            </div>

            <div>
              <span className="terminal-key">
                current
              </span>

              <p>
                Freelancing · Learning · Building
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              WHAT I DO
            </div>

            <h2>Technical focus</h2>
          </div>
        </div>

        <div className="grid focus-grid">
          <div className="focus-card">
            <Network />

            <h3>Network Engineering</h3>

            <p>
              Designing and configuring segmented networks
              using switching, routing, VLANs, trunking,
              access control and secure management.
            </p>
          </div>

          <div className="focus-card">
            <Cloud />

            <h3>Cloud Architecture</h3>

            <p>
              Designing and deploying cloud infrastructure
              with an emphasis on Azure, governance,
              identity, security and automation.
            </p>
          </div>

          <div className="focus-card">
            <ShieldCheck />

            <h3>Cybersecurity</h3>

            <p>
              Developing practical security skills through
              network security projects, CTF challenges,
              secure architecture and defensive analysis.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE + EDUCATION */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              JOURNEY
            </div>

            <h2>Education & experience</h2>
          </div>
        </div>

        <div className="about-timeline">
          <article className="timeline-item">
            <div className="timeline-icon">
              <BriefcaseBusiness size={20} />
            </div>

            <div className="timeline-content">
              <div className="timeline-top">
                <div>
                  <span className="timeline-type">
                    EXPERIENCE
                  </span>

                  <h3>
                    IT Infrastructure Operations Analyst Intern
                  </h3>
                </div>

                <span className="timeline-date">
                  2025 — 2026
                </span>
              </div>

              <p className="timeline-org">
                Cloud Architecture Team
              </p>

              <p>
                Worked with cloud infrastructure,
                governance and operational workloads,
                including multi-cloud tagging compliance
                across Microsoft Azure, AWS and OCI.
              </p>

              <div className="tags">
                <span>Azure</span>
                <span>AWS</span>
                <span>OCI</span>
                <span>Cloud Governance</span>
              </div>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-icon">
              <GraduationCap size={20} />
            </div>

            <div className="timeline-content">
              <div className="timeline-top">
                <div>
                  <span className="timeline-type">
                    EDUCATION
                  </span>

                  <h3>
                    Bachelor of Computer Science
                  </h3>
                </div>

                <span className="timeline-date">
                  2022 — 2026
                </span>
              </div>

              <p className="timeline-org">
                Computer Networks & Security
              </p>

              <p>
                Studying computer networking,
                cybersecurity, software development,
                databases and secure systems while
                applying the concepts through practical
                projects and labs.
              </p>

              <div className="tags">
                <span>Networking</span>
                <span>Security</span>
                <span>Cloud</span>
                <span>Software Engineering</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              CERTIFICATIONS
            </div>

            <h2>Professional learning</h2>
          </div>
        </div>

        <div className="cert-grid">
          <article className="panel cert-card">
            <div className="cert-icon">
              <Award size={22} />
            </div>

            <div>
              <span className="cert-provider">
                CISCO
              </span>

              <h3>CCNA</h3>

              <p>
                Networking fundamentals, switching,
                routing, enterprise networking and
                network security.
              </p>
            </div>
          </article>

          <article className="panel cert-card">
            <div className="cert-icon">
              <Cloud size={22} />
            </div>

            <div>
              <span className="cert-provider">
                MICROSOFT
              </span>

              <h3>
                Azure Administrator Associate
              </h3>

              <p>
                Azure identities, governance, storage,
                compute, virtual networking and resource
                management.
              </p>
            </div>
          </article>

          <article className="panel cert-card">
            <div className="cert-icon">
              <BookOpen size={22} />
            </div>

            <div>
              <span className="cert-provider">
                MICROSOFT
              </span>

              <h3>Azure Fundamentals</h3>

              <p>
                Cloud concepts, Azure architecture,
                services, security, governance and
                management.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* SKILLS */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              TOOLBOX
            </div>

            <h2>Technical skills</h2>
          </div>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(
            ([category, items]) => (
              <article
                className="panel skill-group"
                key={category}
              >
                <div className="skill-title">
                  {category === 'Networking' && (
                    <Network size={18} />
                  )}

                  {category === 'Cloud' && (
                    <Cloud size={18} />
                  )}

                  {category === 'Development' && (
                    <Code2 size={18} />
                  )}

                  {category === 'Security' && (
                    <ShieldCheck size={18} />
                  )}

                  <h3>{category}</h3>
                </div>

                <div className="tags large">
                  {items.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="about-section about-philosophy panel">
        <div>
          <div className="eyebrow">
            HOW I LEARN
          </div>

          <h2>
            Build it. Understand it.
            <br />
            Document it.
          </h2>
        </div>

        <div>
          <p>
            I prefer learning through implementation.
            Instead of stopping at theory, I build labs,
            deploy infrastructure, troubleshoot failures
            and document what happened.
          </p>

          <p>
            That's also why this portfolio contains
            detailed network configurations, architecture
            decisions and CTF write-ups rather than only
            finished-project screenshots.
          </p>
        </div>
      </section>
    </main>
  )
}