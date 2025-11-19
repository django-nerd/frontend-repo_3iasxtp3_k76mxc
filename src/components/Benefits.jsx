import { motion } from 'framer-motion'

const Benefit = ({ title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
  >
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-slate-300">{text}</p>
  </motion.div>
)

export default function Benefits() {
  return (
    <section id="benefits" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Builds skills beyond the page</h2>
          <p className="mt-4 text-slate-300">Designed with educators and parents in mind to nurture lifelong creativity.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Benefit title="Creative Confidence" text="Prompts remove the fear of the blank page, making drawing feel accessible." />
          <Benefit title="Fine Motor Skills" text="Practice pencil control, shape recognition, and hand–eye coordination." />
          <Benefit title="Storytelling" text="Children learn sequencing, character-building, and visual narration." />
        </div>
      </div>
    </section>
  )
}
