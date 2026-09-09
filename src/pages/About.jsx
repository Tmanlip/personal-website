import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Cloud,
  Code2,
  GraduationCap,
  Languages,
  Link as LinkIcon,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  Trophy,
  Users
} from 'lucide-react'

export default function About() {
  const skills = {
    Networking: [
      'Cisco Packet Tracer',
      'Networking',
      'VLAN',
      'Routing',
      'Switching',
      'Subnetting',
      'Network Troubleshooting',
      'Prisma Cloud'
    ],

    Cloud: [
      'Microsoft Azure',
      'AWS',
      'Azure Virtual Network',
      'RBAC',
      'Cloud Governance',
      'Cloud Compliance',
      'PowerShell',
      'Monitoring'
    ],

    Development: [
      'HTML5',
      'CSS',
      'C++',
      'Java',
      'JavaScript',
      'Python',
      'SQL',
      'Laravel'
    ],

    DataAndTools: [
      'Power BI',
      'Tableau',
      'Microsoft Office',
      'Canva',
      'Git',
      'GitHub'
    ]
  }

  const activities = [
    {
      title: 'Global Outreach Program to Korea',
      role: 'Protocol Unit',
      period: 'Sep 2023 – Jun 2024',
      location: 'Seoul & Gyeongju, Korea',
      description:
        'Represented UTM in an academic and cultural exchange involving Dongguk University and an industrial visit to Samsung Suwon, while supporting protocol, logistics and student-faculty coordination.'
    },

    {
      title: 'Liga Sukan Anak Negeri 2025',
      role: 'Technical Vice Director',
      period: 'Apr 2025',
      location: 'Universiti Teknologi Malaysia',
      description:
        'Oversaw technical operations and coordinated technical teams for a university-level sports competition involving participants from multiple UTM campuses.'
    },

    {
      title: 'Berkat Aidilfitri 2025',
      role: 'Director',
      period: 'Apr 2025',
      location: 'Kulai, Johor',
      description:
        'Led a community volunteer programme involving improvement activities at an orphanage and an Aidilfitri event for UTM students.'
    },

    {
      title: 'PERSAKA',
      role: 'Committee Member',
      period: 'Sep 2023 – Jun 2025',
      location: 'Universiti Teknologi Malaysia',
      description:
        'Contributed to UTMxHackathon 2024, COMPFAIR 2024 and AGM 2025, including protocol and floor-management responsibilities.'
    }
  ]

  return (
    <main className="container page about-page">
      {/* =========================
          HERO
          ========================= */}
      <section className="about-hero">
        <div>
          <div className="eyebrow">
            ABOUT ME
          </div>

          <h1>
            Network & Security graduate
            <br />

            <span>
              focused on cloud and cybersecurity.
            </span>
          </h1>

          <p className="about-intro">
            I am a Computer Science student majoring in
            Computer Networks and Security at Universiti
            Teknologi Malaysia, with graduation projected
            for October 2026.
          </p>

          <p className="about-intro">
            My background combines networking, cybersecurity,
            cloud engineering and secure system concepts,
            supported by CCNA and Microsoft Azure
            certifications together with practical enterprise
            cloud experience.
          </p>

          <p className="about-intro">
            I am particularly interested in cloud engineering,
            cloud architecture, network security and
            cybersecurity technology, and I use this portfolio
            to document how I design, deploy, troubleshoot and
            secure technical systems.
          </p>
        </div>

        <div className="profile-card">
          <div className="profile-image-wrapper">
            <img
              src="/images/gambar-selfie.jpeg"
              alt="Tengku Muhammad Aiman Aliff"
              className="profile-image"
            />
          </div>

          <div className="profile-info">
            <span className="profile-label">
              NETWORK · CLOUD · SECURITY
            </span>

            <h2>
              Tengku Muhammad Aiman Aliff
            </h2>

            <p>
              Computer Network & Security
            </p>

            <div className="profile-divider" />

            <div className="social-links">
              <a
                href="mailto:taimanaliff@gmail.com"
                className="social-link"
              >
                <Mail size={16} />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/tengku-muhammad-aiman-aliff-257065254/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <LinkIcon size={16} />
                LinkedIn
              </a>

              <a
                href="https://github.com/Tmanlip"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Code2 size={16} />
                GitHub
              </a>
            </div>

            <div className="profile-location">
              <MapPin size={15} />

              <span>
                Shah Alam, Selangor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PROFESSIONAL SUMMARY
          ========================= */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              PROFESSIONAL SUMMARY
            </div>

            <h2>
              Technical profile
            </h2>
          </div>
        </div>

        <div className="panel about-summary">
          <p>
            I have a strong foundation in computer networking,
            cybersecurity and secure system concepts, together
            with practical experience in cloud engineering and
            enterprise IT environments.
          </p>

          <p>
            During my industrial training with PPG Coatings,
            I worked with cloud infrastructure, governance,
            security, compliance, access control and operational
            support. My work included cloud tagging compliance,
            monitoring governance controls and auditing Azure
            virtual network IP usage.
          </p>

          <p>
            Alongside cloud and networking work, I continue to
            develop practical cybersecurity skills through CTFs,
            security labs and technical projects.
          </p>
        </div>
      </section>

      {/* =========================
          TECHNICAL FOCUS
          ========================= */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              TECHNICAL FOCUS
            </div>

            <h2>
              What I work on
            </h2>
          </div>
        </div>

        <div className="grid focus-grid">
          <div className="focus-card">
            <Network />

            <h3>
              Network Engineering
            </h3>

            <p>
              Network design, switching, routing, VLANs,
              subnetting, access control and troubleshooting
              using Cisco technologies.
            </p>
          </div>

          <div className="focus-card">
            <Cloud />

            <h3>
              Cloud Engineering
            </h3>

            <p>
              Cloud infrastructure, governance, compliance,
              virtual networking, access control, monitoring
              and operational support.
            </p>
          </div>

          <div className="focus-card">
            <ShieldCheck />

            <h3>
              Cybersecurity
            </h3>

            <p>
              Secure system design, CTF challenges, network
              security, cloud security and defensive
              analysis.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          PROFESSIONAL EXPERIENCE
          ========================= */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              PROFESSIONAL EXPERIENCE
            </div>

            <h2>
              Cloud engineering experience
            </h2>
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
                    INDUSTRIAL TRAINING
                  </span>

                  <h3>
                    IT Infrastructure Operations Analyst
                  </h3>
                </div>

                <span className="timeline-date">
                  Aug 2025 — Jul 2026
                </span>
              </div>

              <p className="timeline-org">
                PPG Coatings (Malaysia) Sdn Bhd
              </p>

              <p>
                Cloud Engineering and Architecture team,
                supporting enterprise cloud environments
                across governance, security, compliance,
                access control and operational workloads.
              </p>

              <div className="experience-points">
                <div>
                  <strong>
                    Cloud Governance
                  </strong>

                  <p>
                    Participated in reviews involving
                    security, compliance, access control
                    and cost-management policies.
                  </p>
                </div>

                <div>
                  <strong>
                    Operational Support
                  </strong>

                  <p>
                    Supported troubleshooting and recovery
                    activities for cloud-based workloads
                    and infrastructure.
                  </p>
                </div>

                <div>
                  <strong>
                    Tagging Compliance
                  </strong>

                  <p>
                    Checked resource tagging compliance
                    against established cloud tagging
                    standards.
                  </p>
                </div>

                <div>
                  <strong>
                    Azure Virtual Network Auditor
                  </strong>

                  <p>
                    Audited Azure virtual network IP ranges
                    and subnet utilisation to identify
                    available address space and potential
                    subnet optimisation.
                  </p>
                </div>
              </div>

              <div className="tags">
                <span>Azure</span>
                <span>Cloud Governance</span>
                <span>Compliance</span>
                <span>Networking</span>
                <span>RBAC</span>
                <span>Monitoring</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          EDUCATION
          ========================= */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              EDUCATION
            </div>

            <h2>
              Academic background
            </h2>
          </div>
        </div>

        <div className="about-timeline">
          <article className="timeline-item">
            <div className="timeline-icon">
              <GraduationCap size={20} />
            </div>

            <div className="timeline-content">
              <div className="timeline-top">
                <div>
                  <span className="timeline-type">
                    BACHELOR'S DEGREE
                  </span>

                  <h3>
                    Bachelor of Computer Science
                    (Computer Network and Security)
                    with Honours
                  </h3>
                </div>

                <span className="timeline-date">
                  Oct 2022 — Oct 2026
                </span>
              </div>

              <p className="timeline-org">
                Universiti Teknologi Malaysia
              </p>

              <p>
                CGPA: 3.77 / 4.00
              </p>

              <p>
                Coursework and practical experience include
                computer networking, network security,
                cloud computing, software engineering,
                databases and secure systems.
              </p>

              <div className="tags">
                <span>Networking</span>
                <span>Cybersecurity</span>
                <span>Cloud</span>
                <span>Software Engineering</span>
              </div>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-icon">
              <BookOpen size={20} />
            </div>

            <div className="timeline-content">
              <div className="timeline-top">
                <div>
                  <span className="timeline-type">
                    FOUNDATION
                  </span>

                  <h3>
                    Foundation in Basic Engineering
                  </h3>
                </div>

                <span className="timeline-date">
                  Sep 2021 — Sep 2022
                </span>
              </div>

              <p className="timeline-org">
                Asasi Universiti Teknologi Malaysia
              </p>

              <p>
                CGPA: 3.72 / 4.00
              </p>
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
                    SECONDARY EDUCATION
                  </span>

                  <h3>
                    Sijil Pelajaran Malaysia
                  </h3>
                </div>

                <span className="timeline-date">
                  Sep 2020 — Sep 2021
                </span>
              </div>

              <p className="timeline-org">
                Sekolah Menengah Kebangsaan Seksyen 9,
                Shah Alam
              </p>

              <p>
                Result: 6A, 3B
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          CERTIFICATIONS
          ========================= */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              CERTIFICATIONS
            </div>

            <h2>
              Professional certifications
            </h2>
          </div>
        </div>

        <div className="cert-grid">
          <article className="panel cert-card">
            <div className="cert-icon">
              <Award size={22} />
            </div>

            <div>
              <span className="cert-provider">
                CISCO · APR 2025
              </span>

              <h3>
                Cisco Certified Network Associate
              </h3>

              <p>
                Covers networking fundamentals,
                switching, routing, wireless,
                enterprise networking, security and
                network automation.
              </p>

              <div className="tags">
                <span>CCNAv7</span>
                <span>Routing</span>
                <span>Switching</span>
                <span>Wireless</span>
                <span>Security</span>
              </div>
            </div>
          </article>

          <article className="panel cert-card">
            <div className="cert-icon">
              <Cloud size={22} />
            </div>

            <div>
              <span className="cert-provider">
                MICROSOFT · JAN 2025
              </span>

              <h3>
                Microsoft Certified:
                Azure Administrator
              </h3>

              <p>
                Covers Azure virtual machines,
                networking, storage, identity,
                role-based access control, monitoring,
                backup and disaster recovery.
              </p>

              <div className="tags">
                <span>AZ-104</span>
                <span>Azure</span>
                <span>RBAC</span>
                <span>VNet</span>
                <span>Monitoring</span>
              </div>
            </div>
          </article>

          <article className="panel cert-card">
            <div className="cert-icon">
              <BookOpen size={22} />
            </div>

            <div>
              <span className="cert-provider">
                MICROSOFT · JAN 2023
              </span>

              <h3>
                Microsoft Certified:
                Azure Fundamentals
              </h3>

              <p>
                Covers core cloud concepts, Azure
                services, security, governance,
                pricing and cloud support.
              </p>

              <div className="tags">
                <span>AZ-900</span>
                <span>Cloud</span>
                <span>Azure</span>
                <span>Governance</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          SKILLS
          ========================= */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              SKILLS
            </div>

            <h2>
              Technical toolbox
            </h2>
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

                  {category === 'DataAndTools' && (
                    <BookOpen size={18} />
                  )}

                  <h3>
                    {category === 'DataAndTools'
                      ? 'Data & Tools'
                      : category}
                  </h3>
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

      {/* =========================
          LEADERSHIP & ACTIVITIES
          ========================= */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              LEADERSHIP & ACTIVITIES
            </div>

            <h2>
              Beyond technical work
            </h2>
          </div>
        </div>

        <div className="activity-grid">
          {activities.map((activity) => (
            <article
              className="panel activity-card"
              key={activity.title}
            >
              <div className="activity-icon">
                <Users size={20} />
              </div>

              <div>
                <span className="activity-role">
                  {activity.role}
                </span>

                <h3>
                  {activity.title}
                </h3>

                <div className="activity-meta">
                  <span>
                    {activity.period}
                  </span>

                  <span>
                    ·
                  </span>

                  <span>
                    {activity.location}
                  </span>
                </div>

                <p>
                  {activity.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          CTF EXPERIENCE
          ========================= */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              CYBERSECURITY EXPERIENCE
            </div>

            <h2>
              Capture The Flag
            </h2>
          </div>
        </div>

        <article className="panel ctf-highlight">
          <div className="ctf-highlight-icon">
            <Trophy size={24} />
          </div>

          <div>
            <span className="timeline-type">
              COMPETITION PARTICIPANT
            </span>

            <h3>
              Capture The Flag Competition
            </h3>

            <p>
              Competed in a university cybersecurity
              competition and achieved 8th place out of
              20 teams.
            </p>

            <p>
              The competition involved practical
              cybersecurity problem-solving and teamwork
              across multiple technical challenge types.
            </p>

            <div className="tags">
              <span>CTF</span>
              <span>Cybersecurity</span>
              <span>Problem Solving</span>
              <span>Teamwork</span>
            </div>
          </div>
        </article>
      </section>

      {/* =========================
          LANGUAGES
          ========================= */}
      <section className="about-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              LANGUAGES
            </div>

            <h2>
              Language proficiency
            </h2>
          </div>
        </div>

        <div className="language-grid">
          <article className="panel language-card">
            <Languages size={22} />

            <div>
              <h3>
                Malay
              </h3>

              <p>
                Native speaking proficiency with expert
                reading and written proficiency.
              </p>
            </div>
          </article>

          <article className="panel language-card">
            <Languages size={22} />

            <div>
              <h3>
                English
              </h3>

              <p>
                Professional speaking proficiency with
                expert reading and written proficiency.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          PHILOSOPHY
          ========================= */}
      <section className="about-section about-philosophy panel">
        <div>
          <div className="eyebrow">
            HOW I WORK
          </div>

          <h2>
            Build it.
            <br />

            Understand it.
            <br />

            Secure it.
            <br />

            Document it.
          </h2>
        </div>

        <div>
          <p>
            I prefer learning through hands-on
            implementation. I build labs, configure
            infrastructure, troubleshoot failures and
            document the reasoning behind technical
            decisions.
          </p>

          <p>
            My goal is to continue developing across
            network engineering, cloud architecture and
            cybersecurity while combining technical
            knowledge with practical enterprise
            experience.
          </p>
        </div>
      </section>
    </main>
  )
}