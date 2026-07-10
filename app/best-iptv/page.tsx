import { createSEO } from "../seo/seo";
import PageTemplate from "../seo/page-templates";

export const metadata = createSEO({
  title: "Best IPTV Subscription 2026 | IPTV Apollo",
  description:
    "Discover the best IPTV subscription with 4K channels, premium sports, movies, TV series and worldwide streaming.",
  keywords: [
    "Best IPTV",
    "Premium IPTV",
    "IPTV Subscription",
    "4K IPTV",
    "Sports IPTV",
    "Movies IPTV",
  ],
  path: "/best-iptv",
});

export default function BestIPTVPage() {
  return (
    <PageTemplate
      title="Best IPTV Subscription in 2026"
      subtitle="Discover why IPTV Apollo is one of the leading IPTV providers worldwide."
      content={
        <>
          <h2>Why Choose IPTV Apollo?</h2>

          <p>
            IPTV Apollo delivers thousands of live TV channels, premium sports,
            movies, TV series, and 4K streaming with instant activation and
            reliable performance.
          </p>

          <h2>Key Features</h2>

          <ul>
            <li>4K Ultra HD Streaming</li>
            <li>Worldwide Channels</li>
            <li>Sports & PPV</li>
            <li>Movies & TV Shows</li>
            <li>24/7 Support</li>
          </ul>
        </>
      }
    />
  );
}