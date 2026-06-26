import Link from "next/link";

const footerLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-14 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="text-2xl font-semibold text-white">IPTV Aspollo</p>
          <p className="text-sm leading-7 text-slate-400">Luxury IPTV service for premium homes and hospitality venues with white-glove support, built-in 4K streaming, and global channel access.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} IPTV Aspollo. All rights reserved.
      </div>
    </footer>
  );
}
