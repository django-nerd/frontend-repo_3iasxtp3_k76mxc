import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Concept from './components/Concept'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.12),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.12),transparent_25%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Concept />
        <HowItWorks />
        <Benefits />
        <CTA />

        <footer className="py-12 text-center text-slate-400">
          <p>© {new Date().getFullYear()} The Blank Book — Spark creativity on every page.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
