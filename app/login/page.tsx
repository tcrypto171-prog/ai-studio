import Footer from "../../components/Footer";
import FormField from "../../components/FormField";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto min-h-screen max-w-[1600px] md:pl-[280px]">
        <section className="px-6 py-20 sm:px-10 md:px-12 lg:px-16">
          <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Sign in</p>
              <h1 className="text-5xl font-semibold text-white sm:text-6xl">Access your IPTV Apollo dashboard.</h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-400">
                Secure sign in for your subscriptions, streaming history, and account settings.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/40">
              <form className="space-y-6">
                <FormField label="Email address" name="email" type="email" placeholder="you@example.com" />
                <FormField label="Password" name="password" type="password" placeholder="Enter your password" />
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Sign in
                </button>
                <p className="text-center text-sm text-slate-400">
                  Don’t have an account? <Link href="/register" className="text-cyan-300 hover:text-cyan-200">Register now</Link>
                </p>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
