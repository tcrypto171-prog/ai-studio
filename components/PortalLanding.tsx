"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ExternalLink, PlayCircle, ShieldCheck, Sparkles, Tv, Wifi } from "lucide-react";
import { buildWhatsAppLink } from "./WhatsAppButton";

const appLinks = [
  {
    name: "IPTV Smarters Pro",
    description: "Fast setup for Android, iOS, Fire TV, and Smart TVs.",
    href: "https://www.iptvsmarters.com/",
    badge: "Most popular",
  },
  {
    name: "TiviMate",
    description: "Premium interface with favorites, recording, and advanced EPG support.",
    href: "https://tivimate.com/",
    badge: "Power user",
  },
  {
    name: "XCIPTV",
    description: "Flexible player experience for a wide range of IPTV setups.",
    href: "https://www.xciptv.com/",
    badge: "Flexible",
  },
  {
    name: "IBO Player",
    description: "Packed with reliability and refined playback tools for premium viewing.",
    href: "https://www.ibo-player.com/",
    badge: "Reliable",
  },
];

const guideCards = [
  { title: "Android", slug: "android", blurb: "Install and launch IPTV apps with Play Store and APK steps." },
  { title: "Smart TV", slug: "smart-tv", blurb: "Set up your TV app in minutes with guided pairing steps." },
  { title: "Fire TV Stick", slug: "fire-tv-stick", blurb: "Install the best player apps and optimize stream stability." },
  { title: "Windows", slug: "windows", blurb: "Use desktop apps and portal access on your PC without friction." },
  { title: "macOS", slug: "macos", blurb: "Enjoy premium streaming on Apple devices with a seamless setup flow." },
  { title: "iPhone / iPad", slug: "iphone-ipad", blurb: "Connect your iOS device with the best mobile-compatible players." },
];

const supportItems = [
  { title: "WhatsApp Support", description: "Fast live assistance for activation, renewals, and troubleshooting.", href: buildWhatsAppLink("Client Portal", "support", "premium assistance"), label: "Open WhatsApp" },
  { title: "Email Support", description: "Send us details for account help or device-specific troubleshooting.", href: "mailto:support@iptvaspollo.com", label: "Email us" },
  { title: "Telegram Support", description: "Receive quick updates and support from our premium concierge team.", href: "https://t.me/iptvaspollo", label: "Join Telegram" },
];

const subscriptionActions = [
  { title: "Renew Subscription", href: buildWhatsAppLink("Renewal", "1 month", "$9.99"), detail: "Keep your service active without interruption." },
  { title: "Upgrade Package", href: buildWhatsAppLink("Upgrade", "Premium", "$89.99"), detail: "Unlock more channels and premium performance." },
  { title: "Request Trial", href: buildWhatsAppLink("Trial Request", "trial", "free access"), detail: "Ask for a preview before you commit." },
  { title: "View Available Plans", href: "/pricing", detail: "Browse the full premium plan catalog." },
];

const knowledgeItems = [
  { title: "Frequently Asked Questions", href: "/faq" },
  { title: "Troubleshooting", href: "/portal/guides/android" },
  { title: "Buffering Solutions", href: "/portal/guides/fire-tv-stick" },
  { title: "Activation Guide", href: "/portal/guides/smart-tv" },
  { title: "Device Compatibility", href: "/portal/guides/windows" },
];

const downloadItems = [
  { title: "M3U Guide", href: "/portal/guides/macos" },
  { title: "Xtream Codes Guide", href: "/portal/guides/iphone-ipad" },
  { title: "Playlist Tutorial", href: "/portal/guides/android" },
  { title: "Video Tutorials", href: "/portal/guides/smart-tv" },
];

function SectionCard({ title, subtitle, children, accent = false }: { title: string; subtitle: string; children: ReactNode; accent?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-[28px] border p-7 shadow-[0_25px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl ${accent ? "border-amber-400/30 bg-gradient-to-br from-amber-400/10 to-transparent" : "border-white/10 bg-white/5"}`}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${accent ? "bg-amber-400/15 text-amber-300" : "bg-white/10 text-white"}`}>
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-sm text-slate-400">{subtitle}</p>
        </div>
      </div>
      {children}
    </motion.article>
  );
}

export default function PortalLanding() {
  return (
    <div className="min-h-screen bg-[#060606] text-white">
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">Client Portal</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
              <ShieldCheck className="h-4 w-4" />
              Client Portal
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Manage your premium service from a single control center.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Download apps, access installation guides, renew your subscription, and speak with our support team in one place.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#support" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:brightness-105">
                Contact support
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#downloads" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                Open downloads
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "24/7 support", value: "VIP" },
                { label: "Active plans", value: "3 tiers" },
                { label: "Average activation", value: "< 5 min" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-xl">
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-1 shadow-[0_45px_140px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.15),_transparent_28%),linear-gradient(135deg,_rgba(7,7,8,1)_0%,_rgba(18,18,24,1)_100%)] p-8">
                <div className="absolute right-6 top-6 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
                  Live access
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                      <Tv className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Connected devices</p>
                      <p className="text-slate-400">Secure, fast, and ready for every screen.</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      { title: "Installation ready", description: "Device-specific onboarding in one tap." },
                      { title: "Streaming stable", description: "Optimized playback for premium channels." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[24px] border border-amber-400/20 bg-amber-400/10 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Service status</p>
                        <p className="mt-2 text-xl font-semibold text-white">All systems online</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-amber-200">
                        <Wifi className="h-4 w-4" />
                        99.9%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-12 grid gap-6 xl:grid-cols-2">
          <SectionCard title="Download Apps" subtitle="Install the best IPTV players in seconds." accent>
            <div className="grid gap-3">
              {appLinks.map((app) => (
                <a key={app.name} href={app.href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 transition hover:border-amber-400/30 hover:bg-slate-900/80">
                  <div>
                    <p className="font-semibold text-white">{app.name}</p>
                    <p className="mt-1 text-sm text-slate-400">{app.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-300">
                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.2em]">{app.badge}</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Installation Guides" subtitle="Device-specific onboarding with premium support." >
            <div className="grid gap-3 sm:grid-cols-2">
              {guideCards.map((guide) => (
                <Link key={guide.slug} href={`/portal/guides/${guide.slug}`} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-amber-400/25 hover:bg-slate-900/70">
                  <p className="font-semibold text-white">{guide.title}</p>
                  <p className="mt-2 text-sm text-slate-400">{guide.blurb}</p>
                </Link>
              ))}
            </div>
          </SectionCard>
        </section>

        <section id="support" className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <SectionCard title="Customer Support" subtitle="Reach the team whenever you need help.">
            <div className="grid gap-3">
              {supportItems.map((item) => (
                <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 transition hover:border-amber-400/30 hover:bg-slate-900/70">
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                  </div>
                  <span className="rounded-full bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-300">{item.label}</span>
                </a>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Subscription" subtitle="Manage renewals, upgrades, and trial requests." accent>
            <div className="grid gap-3">
              {subscriptionActions.map((action) => (
                <Link key={action.title} href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel={action.href.startsWith("http") ? "noreferrer" : undefined} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-amber-400/25 hover:bg-slate-900/70">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">{action.title}</p>
                      <p className="mt-1 text-sm text-slate-400">{action.detail}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-amber-300" />
                  </div>
                </Link>
              ))}
            </div>
          </SectionCard>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-2">
          <SectionCard title="Knowledge Base" subtitle="Useful self-service support articles.">
            <ul className="space-y-3">
              {knowledgeItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 transition hover:border-amber-400/25 hover:bg-slate-900/70">
                    <span className="text-white">{item.title}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Downloads" subtitle="Everything you need for playlists and activation." accent>
            <ul className="space-y-3">
              {downloadItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 transition hover:border-amber-400/25 hover:bg-slate-900/70">
                    <span className="text-white">{item.title}</span>
                    <PlayCircle className="h-4 w-4 text-amber-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </SectionCard>
        </section>

        <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="mt-6 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent p-8 shadow-[0_25px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-amber-300/80">Future ready</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Customer login is reserved for the next stage.</h2>
              <p className="mt-3 max-w-2xl text-slate-400">The portal is designed to support secure authentication later without changing the experience or information architecture.</p>
            </div>
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-5 py-4 text-amber-200">
              <p className="font-semibold">Customer Login</p>
              <p className="mt-1 text-sm text-amber-100/80">Coming Soon</p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
