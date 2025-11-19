import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-sm md:text-base text-slate-200 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-500 to-blue-500 shadow-lg shadow-pink-500/20" />
              <span className="text-white font-semibold tracking-tight">The Blank Book</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#concept">Concept</NavLink>
              <NavLink href="#how">How it works</NavLink>
              <NavLink href="#benefits">Benefits</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
              <a href="#cta" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold hover:bg-slate-100 transition-colors">Get Notified</a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-3">
              <div className="grid gap-3">
                <NavLink href="#concept" onClick={close}>Concept</NavLink>
                <NavLink href="#how" onClick={close}>How it works</NavLink>
                <NavLink href="#benefits" onClick={close}>Benefits</NavLink>
                <NavLink href="#faq" onClick={close}>FAQ</NavLink>
              </div>
              <a href="#cta" onClick={close} className="block text-center rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold hover:bg-slate-100 transition-colors">Get Notified</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
