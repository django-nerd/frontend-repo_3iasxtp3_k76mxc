import { motion } from 'framer-motion'

const Feature = ({ title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
  >
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-slate-300">{text}</p>
  </motion.div>
)

export default function Concept() {
  return (
    <section id="concept" className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-pink-500/20 blur-2xl"/>
        <div className="absolute left-10 bottom-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"/>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">A story that blossoms from their imagination</h2>
          <p className="mt-4 text-slate-300">Every page offers an open-ended prompt — kids draw, decorate, and add details. By the end, they haven’t just read a book; they’ve made one.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Feature title="No Illustrations Included" text="Pages are intentionally blank — ready for every child’s unique art."/>
          <Feature title="Guided Prompts" text="Inspiring ideas spark storytelling through drawing and imagination."/>
          <Feature title="Keepsake Quality" text="Printed on thick, art-friendly paper for markers, crayons, and colored pencils."/>
        </div>
      </div>
    </section>
  )
}
