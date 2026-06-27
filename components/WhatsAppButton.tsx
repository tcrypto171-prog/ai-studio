"use client";

import Link from "next/link";

const whatsappNumber = "212771564433";

export function buildWhatsAppLink(
  packageName: string,
  duration: string,
  price: string
) {
  const text = `Hello IPTVASPOLLO Team,

I would like to purchase the following subscription:

📦 Package: ${packageName}
📅 Duration: ${duration}
💰 Price: ${price}

Please send me the payment instructions and activation details.

Thank you!`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function WhatsAppButton() {
  return (
    <Link
      href={buildWhatsAppLink(
        "Exclusive 12-Month Pass",
        "12 months",
        "$89.99"
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-amber-400 px-5 py-4 text-sm font-semibold text-black shadow-[0_24px_80px_rgba(212,175,55,0.25)] transition hover:scale-105 hover:brightness-105"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
        💬
      </span>

      <span>Chat on WhatsApp</span>
    </Link>
  );
}