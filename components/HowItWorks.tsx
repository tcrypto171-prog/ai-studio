import { motion } from "framer-motion";

const steps = [
  {
    title: "Select your plan",
    description: "Pick the ideal package for your screen count, region coverage, and premium support needs.",
  },
  {
    title: "Secure activation",
    description: "We onboard your account instantly with secure, private setup and encrypted channel paths.",
  },
  {
    title: "Stream in luxury",
    description: "Enjoy flawless playback, 4K-ready channels, and cinematic quality across every supported device.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#050505] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">How it works</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Launch your premium IPTV setup in minutes.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">A simple, secure onboarding flow that keeps every detail refined and effortless.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-400 text-lg font-semibold text-black">{index + 1}</div>
              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-slate-300 leading-7">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
