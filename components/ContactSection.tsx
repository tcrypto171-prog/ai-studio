import Link from "next/link";
import { Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#050505] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Talk to our VIP onboarding team.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">Need a custom deployment, reseller pricing, or dedicated support? Reach out and we’ll secure your premium IPTV service instantly.</p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_40px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <div className="space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Support line</p>
                <p className="mt-3 text-2xl font-semibold text-white">+1 800 518 7019</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Email</p>
                <p className="mt-3 text-2xl font-semibold text-white">hello@iptvaspollo.com</p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-sm text-slate-400">Request immediate assistance or book a luxury deployment consultation.</p>
              </div>
              <Link
                href="https://wa.me/1234567890?text=Hello%20IPTV%20Aspollo%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20premium%20IPTV%20services."
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 text-sm font-semibold text-black transition hover:brightness-105"
              >
                Send a message
                <Send className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
