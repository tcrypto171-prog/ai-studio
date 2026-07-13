import type { Metadata } from "next";
import type { CountrySEO } from "./countries";

const SITE_URL = "https://iptvaspollo.com";
const BRAND = "IPTV Aspollo";

export function generateCountryMetadata(
  country: CountrySEO
): Metadata {
  const title = `${country.keyword} | 4K Streaming | ${BRAND}`;

  const description = `Enjoy premium IPTV in ${country.country}. Watch live TV, sports, movies and series in 4K quality with fast activation and reliable streaming.`;

  const canonical = `${SITE_URL}/iptv-${country.slug}`;

  return {
    title,
    description,

    keywords: [
      country.keyword,
      `IPTV ${country.country}`,
      "4K IPTV",
      "Premium IPTV",
      "Best IPTV",
    ],

    alternates: {
      canonical,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BRAND,
      type: "website",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}