import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#070708] text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-[#111111] to-[#070708] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
            Legal
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Refund Policy
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Please read this Refund Policy carefully before purchasing any IPTV
            subscription from IPTV Aspollo.
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
                Digital Products
              </h2>

              <p className="leading-8 text-slate-300">
                IPTV subscriptions are digital products delivered electronically.
                Once your subscription has been activated, it cannot be returned.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-amber-400">
                Refund Eligibility
              </h2>

              <p className="leading-8 text-slate-300">
                Refund requests may be considered only if the service cannot be
                activated due to a technical issue on our side.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-amber-400">
                Non-Refundable Situations
              </h2>

              <ul className="space-y-3 text-slate-300">
                <li>• Incorrect device configuration.</li>
                <li>• Customer changes their mind.</li>
                <li>• Internet connection issues.</li>
                <li>• Unsupported devices.</li>
                <li>• Failure to read product description.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-amber-400">
                Contact Support
              </h2>

              <p className="leading-8 text-slate-300">
                If you experience any issue with your subscription, our support
                team is available to help resolve it before considering any
                refund request.
              </p>
            </div>

          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex rounded-full bg-amber-400 px-8 py-4 font-semibold text-black hover:brightness-110"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}