import { Award, BriefcaseBusiness, GraduationCap, Users } from 'lucide-react'

export default function KYouth() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Structured Learning',
      text: 'A guided development programme focused on building practical technical knowledge and professional confidence.'
    },
    {
      icon: BriefcaseBusiness,
      title: 'Industry Readiness',
      text: 'Hands-on learning designed to strengthen workplace skills, communication and career preparation.'
    },
    {
      icon: Users,
      title: 'Professional Community',
      text: 'Learning alongside peers and industry mentors while developing a strong and supportive network.'
    },
    {
      icon: Award,
      title: 'Career Growth',
      text: 'A focused journey to grow capabilities, explore opportunities and prepare for the next career milestone.'
    }
  ]

  return (
    <main className="container page k-youth-page">
      <section className="k-youth-hero">
        <div>
          <div className="eyebrow">CAREER DEVELOPMENT</div>
          <h1>K-Youth Nurture Programme</h1>
          <p>
            Developing future-ready talent through structured learning,
            practical experience and meaningful industry exposure.
          </p>
        </div>

        <div className="k-youth-mark" aria-hidden="true">
          K<span>Y</span>
        </div>
      </section>

      <section className="k-youth-grid" aria-label="Programme highlights">
        {highlights.map(({ icon: Icon, title, text }) => (
          <article className="k-youth-card" key={title}>
            <Icon size={26} />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="k-youth-note">
        <div>
          <div className="eyebrow">PROGRAMME FOCUS</div>
          <h2>Learn, grow and progress with purpose.</h2>
        </div>
        <p>
          The programme brings development and employability together,
          helping participants build relevant skills, gain real-world
          perspective and take confident steps toward their careers.
        </p>
      </section>
    </main>
  )
}
