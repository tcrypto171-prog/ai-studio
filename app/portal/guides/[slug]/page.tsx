import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, PlayCircle } from "lucide-react";
import PremiumNavbar from "../../../../components/PremiumNavbar";
import Footer from "../../../../components/Footer";

const guides = {
  android: {
    title: "Android Setup Guide",
    description: "Install your favorite IPTV player on Android phones, tablets, and Android TV devices.",
    steps: [
      "Open the Play Store or install the APK file from the app download section.",
      "Launch the player and enter your IPTV credentials or M3U playlist.",
      "Restart the app and enjoy optimized playback on your device.",
    ],
  },
  "smart-tv": {
    title: "Smart TV Setup Guide",
    description: "Get your IPTV service running on webOS, Tizen, and other popular Smart TVs.",
    steps: [
      "Download the compatible app from your TV app store.",
      "Open the app and select your preferred playlist or Xtream login method.",
      "Enable your TV's network settings for smoother streaming performance.",
    ],
  },
  "fire-tv-stick": {
    title: "Fire TV Stick Setup Guide",
    description: "Guide your Fire TV Stick through fast installation and premium channel startup.",
    steps: [
      "Install the IPTV player from the Amazon Appstore.",
      "Enable apps from unknown sources if required by the chosen player.",
      "Enter your credentials and optimize playback with the included setup tips.",
    ],
  },
  windows: {
    title: "Windows Setup Guide",
    description: "Get premium streaming running smoothly on Windows desktops and laptops.",
    steps: [
      "Download the desktop player from the app section and install it on your PC.",
      "Open the app and import your playlist or enter the Xtream credentials.",
      "Adjust the player settings for HD or 4K streaming and full-screen viewing.",
    ],
  },
  macos: {
    title: "macOS Setup Guide",
    description: "Set up your MacBook or iMac for premium IPTV playback with a polished experience.",
    steps: [
      "Download the compatible player and drag it into your Applications folder.",
      "Open the app and add your playlist or login details.",
      "Choose your preferred decoder and enable hardware acceleration for smoother playback.",
    ],
  },
  "iphone-ipad": {
    title: "iPhone / iPad Setup Guide",
    description: "Set up premium IPTV on iOS devices using the right mobile-friendly player.",
    steps: [
      "Install the app from the App Store if available.",
      "Open the app and add your login details or playlist source.",
      "Enable background refresh and push notifications for the best experience.",
    ],
  },
} as const;

type GuideSlug = keyof typeof guides;

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug as GuideSlug];

  return {
    title: `${guide?.title || "Guide"} | IPTV Aspollo`,
    description: guide?.description || "Installation guide for IPTV Aspollo.",
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides[slug as GuideSlug];

  if (!guide) {
    notFound();
  }

  return (
    <>
      <PremiumNavbar />
      <main className="min-h-screen bg-[#060606] text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/portal" className="transition hover:text-white">Client Portal</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{guide.title}</span>
          </nav>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/8 via-transparent to-transparent p-8 shadow-[0_25px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                <PlayCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-amber-300/80">Installation guide</p>
                <h1 className="text-3xl font-semibold text-white">{guide.title}</h1>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{guide.description}</p>

            <ol className="mt-8 space-y-4">
              {guide.steps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-sm font-semibold text-amber-300">{index + 1}</span>
                  <p className="text-slate-300">{step}</p>
                </li>
              ))}
            </ol>

            <Link href="/portal" className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:brightness-105">
              <ArrowLeft className="h-4 w-4" />
              Back to portal
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
