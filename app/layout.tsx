import type { Metadata, Viewport } from "next";
import "@fontsource/fraunces/latin-600.css";
import "@fontsource/fraunces/latin-700.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "@fontsource/caveat/latin-500.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Latte Lab — Coffee & community at MIT",
    template: "%s | Latte Lab",
  },
  description:
    "A student-run coffee club bringing people together across MIT. Campus pop-ups, hands-on workshops, and good company.",
  openGraph: {
    type: "website",
    siteName: "Latte Lab",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/brand/logo.svg" },
};
export const viewport: Viewport = { themeColor: "#f8f5ed" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              email: site.email,
              sameAs: [site.instagram],
              logo: `${site.url}/brand/logo.svg`,
            }),
          }}
        />
      </body>
    </html>
  );
}
