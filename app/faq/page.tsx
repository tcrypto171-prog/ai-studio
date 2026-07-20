import PremiumNavbar from "../../components/PremiumNavbar";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
import { faqItems } from "../../lib/content";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <PremiumNavbar />
      <main className="mx-auto min-h-screen max-w-[1600px] md:pl-[280px]">
        <section className="px-6 py-20 sm:px-10 md:px-12 lg:px-16">
          <div className="mx-auto max-w-5xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">FAQ</p>
            <h1 className="text-5xl font-semibold text-white sm:text-6xl">Frequently asked questions about IPTV Apollo.</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-400">
              Find quick answers about device support, account activation, package bundles, and support options.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <FAQ items={faqItems} />
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-16 sm:px-10 md:px-12 lg:px-16">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/40">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Still need help?</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Our support team is available anytime.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-400">
                  If your question isn’t covered here, open a support request and we’ll help you find the right plan and setup.
                </p>
              </div>
              <div className="space-y-4 text-slate-200">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Help center</p>
                <p className="text-lg font-semibold text-white">support@iptvapollo.com</p>
                <p className="text-sm leading-7 text-slate-400">Fast-response support for activation, packages, and streaming issues.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
