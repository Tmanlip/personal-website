import { useMemo, useState } from 'react'

import WriteupCard from '../components/WriteupCard'
import { writeups } from '../data/writeups'

const categories = [
  'All',
  'Web',
  'Crypto',
  'Forensics',
  'OSINT',
  'Reverse Engineering',
  'Pwn',
  'Misc'
]

export default function Writeups() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(() => {
    if (filter === 'All') {
      return writeups
    }

    return writeups.filter(
      (writeup) => writeup.category === filter
    )
  }, [filter])

  return (
    <main className="container page">
      <div className="page-head">
        <div className="eyebrow">
          CTF WRITE-UPS
        </div>

        <h1>
          Challenge notes & solutions
        </h1>

        <p>
          Structured notes from legal CTFs and practice labs,
          focused on methodology, technical reasoning,
          lessons learned and remediation.
        </p>
      </div>

      <div className="filter-row">
        {categories.map((category) => (
          <button
            key={category}
            className={
              filter === category
                ? 'active'
                : ''
            }
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="grid projects-grid">
          {visible.map((writeup) => (
            <WriteupCard
              writeup={writeup}
              key={writeup.id}
            />
          ))}
        </div>
      ) : (
        <div className="panel empty-state">
          <h2>
            No write-ups yet
          </h2>

          <p>
            Add a write-up in{' '}
            <code>
              src/data/writeups.js
            </code>{' '}
            and it will appear here automatically.
          </p>
        </div>
      )}
    </main>
  )
}