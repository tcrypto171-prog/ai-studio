import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iptvaspollo.com"),

  title: {
    default: "IPTV Apollo | Premium IPTV Subscription",
    template: "%s | IPTV Apollo",
  },

  description:
    "Enjoy premium IPTV subscriptions with thousands of live TV channels, sports, movies, TV series, and 4K streaming. Fast activation, secure payment, and 24/7 VIP support.",

  keywords: [
    "IPTV",
    "Premium IPTV",
    "Best IPTV",
    "IPTV Subscription",
    "4K IPTV",
    "Live TV",
    "Sports IPTV",
    "Movies IPTV",
    "TV Series",
    "Smart TV IPTV",
    "Firestick IPTV",
    "Android IPTV",
    "Worldwide IPTV",
    "IPTV Apollo",
  ],

  authors: [
    {
      name: "IPTV Apollo",
    },
  ],

  creator: "IPTV Apollo",

  publisher: "IPTV Apollo",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iptvaspollo.com",
    title: "IPTV Apollo | Premium IPTV Subscription",
    description:
      "Premium IPTV subscriptions with worldwide live TV channels, sports, movies, TV series, 4K streaming and 24/7 VIP support.",
    siteName: "IPTV Apollo",
  },

  twitter: {
    card: "summary_large_image",
    title: "IPTV Apollo | Premium IPTV Subscription",
    description:
      "Watch thousands of live TV channels, sports, movies and TV series in stunning 4K quality.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">
        <GoogleTagManager gtmId="GTM-5R4ZT3H9" />
        {children}
      </body>
    </html>
  );
}