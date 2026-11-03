import { useState } from 'react'
import { Award, BriefcaseBusiness, GraduationCap, Users } from 'lucide-react'

export default function KYouth() {
  const programmeDays = [
    { day: 'Day 1', date: 'Monday, 2 November 2026', title: 'Programme Introduction' },
    { day: 'Day 2', date: 'Tuesday, 3 November 2026', title: 'Learning & Development' },
    { day: 'Day 3', date: 'Wednesday, 4 November 2026', title: 'Skills in Practice' },
    { day: 'Day 4', date: 'Thursday, 5 November 2026', title: 'Teamwork & Industry Exposure' },
    { day: 'Day 5', date: 'Friday, 6 November 2026', title: 'Reflection & Career Next Steps' }
  ]

  const [activeDay, setActiveDay] = useState(0)

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

        <div className="k-youth-mark">
          <img src="/images/kyouth.png" alt="K-Youth, an initiative by Khazanah Nasional" />
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

      <section className="k-youth-schedule" aria-labelledby="schedule-heading">
        <div className="k-youth-section-head">
          <div>
            <div className="eyebrow">5-DAY PROGRAMME</div>
            <h2 id="schedule-heading">Programme schedule</h2>
          </div>
          <p>2–6 November 2026</p>
        </div>

        <div className="k-youth-days" role="tablist" aria-label="Programme days">
          {programmeDays.map((programmeDay, index) => (
            <button
              key={programmeDay.day}
              type="button"
              role="tab"
              aria-selected={activeDay === index}
              className={activeDay === index ? 'active' : ''}
              onClick={() => setActiveDay(index)}
            >
              <span>{programmeDay.day}</span>
              <strong>{programmeDay.date.split(', ')[1]}</strong>
            </button>
          ))}
        </div>

        <div className="k-youth-day-panel" role="tabpanel">
          <div>
            <span>{programmeDays[activeDay].day}</span>
            <p>{programmeDays[activeDay].date}</p>
            <h3>{programmeDays[activeDay].title}</h3>
          </div>
          <p className="k-youth-day-status">Programme details to be added</p>
        </div>
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
