"use client";

import Link from "next/link";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890";

export function buildWhatsAppLink(packageName: string, duration: string, price: string) {
  const text = `Hello IPTVASPOLLO team,%0AI am interested in the ${packageName} (${duration}) for ${price}.%0A%0APlease send me the activation details and any setup information.%0A%0AThank you!`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function WhatsAppButton() {
  return (
    <Link
      href={buildWhatsAppLink("Exclusive 12-Month Pass", "12 months", "$89.99")}
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-amber-400 px-5 py-4 text-sm font-semibold text-black shadow-[0_24px_80px_rgba(212,175,55,0.25)] transition hover:scale-105 hover:brightness-105"
      target="_blank"
      rel="noreferrer"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-black">💬</span>
      <span>Chat on WhatsApp</span>
    </Link>
  );
}
