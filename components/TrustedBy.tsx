import { motion } from "framer-motion";

const brands = [
  "NOVA",
  "STRATUS",
  "PHOENIX",
  "XENON",
  "ECLIPSE",
];

export default function TrustedBy() {
  return (
    <section id="trusted" className="border-t border-white/10 bg-[#050505] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Trusted by</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Luxury streaming partners and enterprise clients rely on us.</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {brands.map((brand, index) => (
              <motion.div key={brand} whileHover={{ y: -4 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
