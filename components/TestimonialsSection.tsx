"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rodriguez",
    role: "Sports Enthusiast",
    company: "Professional Coach",
    content: "IPTV Apollo transformed how I watch sports. Crystal clear streams, no buffering, and access to every league imaginable.",
    rating: 5,
    avatar: "AR",
    color: "from-red-500/20 to-orange-500/10",
  },
  {
    name: "Maya Chen",
    role: "Streaming Director",
    company: "Content Creator",
    content: "The international channels are incredible. I can finally access content from my home country with zero lag.",
    rating: 5,
    avatar: "MC",
    color: "from-pink-500/20 to-purple-500/10",
  },
  {
    name: "James Murphy",
    role: "Tech Savvy Dad",
    company: "Family of 5",
    content: "Setup was super easy, and the whole family loves it. One account, multiple devices, and everyone's happy.",
    rating: 5,
    avatar: "JM",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    name: "Sofia Rossi",
    role: "Premium Subscriber",
    company: "Movie Collector",
    content: "The 4K quality is exceptional. This is the premium experience I've been waiting for. Worth every penny.",
    rating: 5,
    avatar: "SR",
    color: "from-emerald-500/20 to-green-500/10",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-4 mb-16 text-center mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Loved by Users
          </p>
          <h2 className="text-5xl font-black text-white sm:text-6xl">
            Join thousands of happy streamers
          </h2>
          <p className="text-xl leading-8 text-slate-400 max-w-2xl mx-auto">
            Read what real users love about IPTV Apollo's service, quality, and support.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${testimonial.color} p-6 backdrop-blur-sm transition-all duration-300`}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm leading-6 text-slate-300 mb-6">
                  "{testimonial.content}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white font-semibold text-sm"
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
