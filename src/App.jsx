import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Writeups from './pages/WriteUp'
import WriteupDetail from './pages/WriteUpDetail'
import About from './pages/About'
import WriteupCollection from './pages/WriteupCollection'
import KYouth from './pages/KYouth'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />

        <Route
          path="/writeups"
          element={<Writeups />}
        />

        <Route
          path="/writeups/:collectionId"
          element={<WriteupCollection />}
        />

        <Route
          path="/writeups/:collectionId/:writeupId"
          element={<WriteupDetail />}
        />

        <Route path="/k-youth" element={<KYouth />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <div className="container">
          Built as a technical portfolio for networking, cloud engineering
          and cybersecurity write-ups.
        </div>
      </footer>
    </>
  )
}