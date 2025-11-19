import { motion } from 'framer-motion'

const Step = ({ number, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-6"
  >
    <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-white text-slate-900 font-bold grid place-items-center">{number}</div>
    <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-slate-300">{text}</p>
  </motion.div>
)

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Simple, joyful, screen-free</h2>
          <p className="mt-4 text-slate-300">A calm activity that grows attention, confidence, and creative thinking.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Step number="1" title="Open the book" text="Each spread sets a scene or emotion — nothing is drawn yet."/>
          <Step number="2" title="Draw the story" text="Kids illustrate the moment with their own characters and details."/>
          <Step number="3" title="Make it theirs" text="Add stickers, captions, and color. Every book becomes one of a kind."/>
        </div>
      </div>
    </section>
  )
}
