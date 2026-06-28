"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 pt-16 pb-5 text-slate-300">
      <div className="absolute left-20 top-0 h-64 w-64 rounded-full bg-amber-500/20 blur-[120px]" />
      <div className="absolute right-20 bottom-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-[120px]" />


      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">


          {/* Brand */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-white">
              IPTV Apollo
            </h2>

            <p className="leading-7 text-slate-400">
              Premium IPTV Experience with
              high quality entertainment and global channels.
            </p>
          </div>



          {/* Quick Links */}
          <div>

            <h3 className="mb-5 font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link className="block hover:text-amber-400" href="#experience">
                Experience
              </Link>

              <Link className="block hover:text-amber-400" href="#pricing">
                Pricing
              </Link>

              <Link className="block hover:text-amber-400" href="#faq">
                FAQ
              </Link>

              <Link className="block hover:text-amber-400" href="#contact">
                Contact
              </Link>

            </div>

          </div>




          {/* Legal */}
          <div>

            <h3 className="mb-5 font-semibold text-white">
              Legal
            </h3>


            <div className="space-y-3">

              <Link className="block hover:text-amber-400 transition" href="/privacy-policy">
  Privacy Policy
</Link>

<Link className="block hover:text-amber-400 transition" href="/refund-policy">
  Refund Policy
</Link>

<Link className="block hover:text-amber-400 transition" href="/terms-and-conditions">
  Terms & Conditions
</Link>

<Link className="block hover:text-amber-400 transition" href="/disclaimer">
  Disclaimer
</Link>

            </div>

          </div>




          {/* Support */}
          <div>

            <h3 className="mb-5 font-semibold text-white">
              Support
            </h3>

            <div className="space-y-3">

              <a
  href="https://wa.me/212771564433"
  target="_blank"
  rel="noreferrer"
  className="block hover:text-amber-400 transition"
>
  WhatsApp
</a>

<a
  href="mailto:hello@iptvaspollo.com"
  className="block hover:text-amber-400 transition"
>
  hello@iptvaspollo.com
</a>

<p className="text-amber-400 font-medium">
  24/7 VIP Support
</p>

            </div>

          </div>



        </div>




        {/* Bottom */}

        <div className="mt-8 border-t border-white/10 pt-5">

<h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
  Secure Payment Methods
</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

  <span className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-semibold text-amber-400 transition-all duration-300 hover:border-amber-300 hover:bg-amber-400 hover:text-black">
    Visa
  </span>

  <span className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-semibold text-amber-400 transition-all duration-300 hover:border-amber-300 hover:bg-amber-400 hover:text-black">
    Mastercard
  </span>

  <span className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-semibold text-amber-400 transition-all duration-300 hover:border-amber-300 hover:bg-amber-400 hover:text-black">
    PayPal
  </span>

  <span className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-semibold text-amber-400 transition-all duration-300 hover:border-amber-300 hover:bg-amber-400 hover:text-black">
    Crypto
  </span>

</div>
          <p className="mt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} IPTV Apollo. All rights reserved.
          </p>


        </div>


      </div>


    </footer>
  );
}