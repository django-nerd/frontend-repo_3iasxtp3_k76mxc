import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-blue-500/30 blur-3xl"/>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.15),transparent_60%)]"/>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              A children’s book with no pictures — on purpose.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-slate-200"
            >
              Meet the interactive book where kids become the illustrators. Each page prompts them to draw, imagine, and bring the story to life — their way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100 transition-colors">Get updates</a>
              <a href="#concept" className="inline-flex items-center justify-center rounded-xl bg-slate-800/60 border border-white/10 text-white px-5 py-3 font-semibold hover:bg-slate-800 transition-colors">See how it works</a>
            </motion.div>

            <p className="mt-6 text-sm text-slate-400">No screens. No rules. Just pure creativity.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-slate-300">Imagine this spread says:</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">“Draw your hero discovering a new world.”</h3>
                  <p className="mt-3 text-slate-400">Every prompt invites kids to sketch, color, and make the story their own.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-2xl bg-gradient-to-br from-pink-500 to-blue-500 blur-2xl opacity-60"/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
