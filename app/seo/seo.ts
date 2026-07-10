import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
};

export function createSEO({
  title,
  description,
  keywords,
  path,
}: SEOProps): Metadata {

  const url = `https://iptvaspollo.com${path}`;

  return {
    title,
    description,

    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "IPTV Apollo",
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