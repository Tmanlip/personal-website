import { Link, NavLink } from 'react-router-dom'
import { Network } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Link className="brand" to="/">
          <span className="brand-icon">
            <Network size={20} />
          </span>

          <span>
            TMA<span className="accent">.lab</span>
          </span>
        </Link>

        <div className="nav-links">
          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/projects">
            Projects
          </NavLink>

          <NavLink to="/writeups">
            CTF Write-ups
          </NavLink>

          <a href="/#about">
            About
          </a>
        </div>
      </nav>
    </header>
  )
}