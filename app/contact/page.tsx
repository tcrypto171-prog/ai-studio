import Footer from "../../components/Footer";
import FormField from "../../components/FormField";
import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto min-h-screen max-w-[1600px] md:pl-[280px]">
        <section className="px-6 py-20 sm:px-10 md:px-12 lg:px-16">
          <div className="mx-auto max-w-5xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Contact</p>
            <h1 className="text-5xl font-semibold text-white sm:text-6xl">Get in touch with IPTV Apollo support.</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-400">
              Need help with plans, activation, or account setup? Send us a message and our team will respond quickly.
            </p>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-6 rounded-[32px] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/40">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Contact details</p>
                <p className="mt-4 text-lg font-semibold text-white">support@iptvapollo.com</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">Our team responds to all inquiries within minutes, 24/7.</p>
              </div>
              <div className="grid gap-4 text-sm text-slate-300">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">Live chat: Online now</div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">Billing support: billing@iptvapollo.com</div>
              </div>
            </div>
            <form className="space-y-6 rounded-[32px] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/40">
              <FormField label="Full name" name="name" placeholder="Jane Doe" />
              <FormField label="Email address" name="email" type="email" placeholder="jane@example.com" />
              <FormField label="Subject" name="subject" placeholder="Question about pricing" />
              <FormField label="Message" name="message" textarea placeholder="Tell us how we can help" />
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Send message
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
