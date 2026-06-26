import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Aspollo transformed our home theater into a cinematic streaming destination with zero buffering and stunning channel variety.",
    author: "Isabella M., Hospitality Operator",
  },
  {
    quote: "The setup was effortless, and the service feels premium from day one. The support team is truly VIP.",
    author: "Liam R., Smart Living Enthusiast",
  },
  {
    quote: "Every stream is sharp, every channel connects fast, and the interface feels as polished as top-tier streaming brands.",
    author: "Nina K., Residential Concierge",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#080808] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Trusted by premium households worldwide.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">A curated IPTV experience backed by clients who demand flawless performance and luxury service.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_90px_rgba(0,0,0,0.16)] backdrop-blur-xl"
            >
              <p className="text-lg leading-8 text-slate-300">“{testimonial.quote}”</p>
              <p className="mt-8 font-semibold text-white">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
