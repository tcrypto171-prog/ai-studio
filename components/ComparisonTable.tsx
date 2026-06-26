import { motion } from "framer-motion";

const benefits = [
  { feature: "Channel depth", standard: "2,000+", asapollo: "12,000+" },
  { feature: "Resolution", standard: "HD only", asapollo: "4K ready" },
  { feature: "Latency", standard: "Standard", asapollo: "Ultra-low" },
  { feature: "Support", standard: "Email-only", asapollo: "VIP 24/7" },
  { feature: "Service guarantee", standard: "None", asapollo: "SLA-backed" },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="bg-[#080808] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Why Aspollo</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Compare premium IPTV the right way.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">A cinematic-grade streaming experience should feel superior on every metric — not just price.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_35px_120px_rgba(0,0,0,0.25)] backdrop-blur-xl"
        >
          <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-px bg-slate-900 text-left text-sm text-slate-300 sm:text-base">
            <div className="bg-slate-950 px-6 py-5 font-semibold text-white">Feature</div>
            <div className="bg-slate-950 px-6 py-5 text-slate-400">Typical service</div>
            <div className="bg-slate-950 px-6 py-5 text-slate-400">IPTV Aspollo</div>
          </div>
          {benefits.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.5fr_1fr_1fr] gap-px border-t border-white/10 ${index % 2 === 0 ? "bg-slate-950/70" : "bg-slate-900/80"}`}
            >
              <div className="px-6 py-6 text-white">{row.feature}</div>
              <div className="px-6 py-6 text-slate-300">{row.standard}</div>
              <div className="px-6 py-6 text-amber-300">{row.asapollo}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
