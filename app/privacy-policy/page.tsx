import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#070708] text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-[#111111] to-[#070708] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
            Legal
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            At IPTV Aspollo, protecting your privacy is one of our top priorities.
            This Privacy Policy explains what information we collect, how we use it,
            and how we protect your personal information.
          </p>

          <p className="mt-6 text-sm text-slate-500">
            Last Updated: July 2026
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-12 rounded-3xl border border-white/10 bg-white/5 p-10">

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-amber-400">
                Information We Collect
              </h2>

              <p className="leading-8 text-slate-300">
                We may collect your name, email address, WhatsApp number,
                IP address, browser information and other technical data
                required to provide our IPTV services.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-amber-400">
                How We Use Your Information
              </h2>

              <ul className="space-y-3 text-slate-300">
                <li>• Process your orders.</li>
                <li>• Improve customer support.</li>
                <li>• Enhance website performance.</li>
                <li>• Prevent fraud and abuse.</li>
                <li>• Communicate important updates.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-amber-400">
                Cookies
              </h2>

              <p className="leading-8 text-slate-300">
                We use cookies to improve your browsing experience and analyze
                website traffic.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-amber-400">
                Data Security
              </h2>

              <p className="leading-8 text-slate-300">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized access
                or disclosure.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-amber-400">
                Contact Us
              </h2>

              <p className="leading-8 text-slate-300">
                If you have any questions regarding this Privacy Policy,
                please contact us through our Contact page or WhatsApp support.
              </p>
            </div>

          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:brightness-110"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}