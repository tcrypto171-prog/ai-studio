import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageTemplate from "@/app/seo/page-templates";
import { countries } from "@/lib/seo/countries";
import { generateCountryMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{
    country: string;
  }>;
};

export async function generateStaticParams() {
  return countries.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { country } = await params;

  const data = countries.find((item) => item.slug === country);

  if (!data) {
    return {};
  }

  return generateCountryMetadata(data);
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;

  const data = countries.find((item) => item.slug === country);

  if (!data) {
    notFound();
  }

  return (
    <PageTemplate
      title={data.heroTitle}
      subtitle={data.heroSubtitle}
      content={
        <>
          <h2>Premium IPTV in {data.country}</h2>

          <p>
            IPTV Apollo offers premium IPTV subscriptions in{" "}
            {data.country} with over 35,000 live TV channels,
            150,000+ movies, TV shows, sports and 4K streaming.
          </p>

          <h2>Popular Channels</h2>

          <ul>
            {data.channels.map((channel) => (
              <li key={channel}>{channel}</li>
            ))}
          </ul>

          <h2>Why Choose IPTV Apollo?</h2>

          <ul>
            <li>35,000+ Live TV Channels</li>
            <li>150,000+ Movies & TV Shows</li>
            <li>4K Ultra HD Streaming</li>
            <li>Sports & PPV Included</li>
            <li>Instant Activation</li>
            <li>24/7 Premium Support</li>
          </ul>
        </>
      }
    />
  );
}