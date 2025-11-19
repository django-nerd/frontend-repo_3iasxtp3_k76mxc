import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/notify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      if (res.ok) setStatus('Thanks! We\'ll keep you posted.')
      else setStatus(data.detail || 'Something went wrong.')
    } catch (err) {
      setStatus('Could not reach the server. Try again later.')
    }
  }

  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Be first to know when it launches</h2>
          <p className="mt-3 text-slate-300">Get early access, sample pages, and launch-day perks.</p>

          <form onSubmit={submit} className="mt-8 mx-auto max-w-xl flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button type="submit" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100 transition-colors">Notify me</button>
          </form>
          {status && <p className="mt-3 text-slate-300">{status}</p>}
        </div>
      </div>
    </section>
  )
}
