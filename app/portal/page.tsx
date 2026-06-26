import type { Metadata } from "next";
import PortalLanding from "../../components/PortalLanding";
import PremiumNavbar from "../../components/PremiumNavbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Client Portal | IPTV Aspollo",
  description: "Manage your IPTV subscription, download apps, access installation guides, renew your plan, and contact support from the premium client portal.",
  openGraph: {
    title: "Client Portal | IPTV Aspollo",
    description: "A premium client dashboard for IPTV subscriptions, app downloads, installation guides, and support.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Portal | IPTV Aspollo",
    description: "Access your IPTV service dashboard, guides, and support from one premium portal.",
  },
};

export default function PortalPage() {
  return (
    <>
      <PremiumNavbar />
      <PortalLanding />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Client Portal",
            url: "https://iptvaspollo.com/portal",
            description: "Premium IPTV client portal for app downloads, installation guides, renewals, and support.",
          }),
        }}
      />
    </>
  );
}
