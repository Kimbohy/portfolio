import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import ClarityAnalytics from "@/components/ClarityAnalytics";
import { PortfolioProvider } from "@/context/PortfolioMode";

const SITE_URL = "https://lova.is-a.dev";
const SITE_NAME = "Finoana Lovtiana Rabarijaona";
const DESCRIPTION =
  "Personal portfolio of Finoana Lovtiana Rabarijaona, a passionate software engineer and AI enthusiast.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: DESCRIPTION,
  keywords: [
    "Finoana Lovtiana Rabarijaona",
    "Finoana Rabarijaona",
    "Lovatiana Rabarijaona",
    "Finoana Lovtiana",
    "Lovatiana Finoana Rabarijaona",
    "Rabarijaona Finoana Lovatiana",
    "Rabarijaona Lovatiana",
    "Finoana",
    "Lovatiana",
    "Rabarijaona",
    "Software Engineer",
    "AI Enthusiast",
    "AI Engineer",
    "ML Engineer",
    "Full-Stack Developer",
    "Tech Portfolio",
    "Projects Showcase",
    "Web Development",
    "MISA",
    "Mathématiques Informatique et Statistique Appliquées",
    "Mathematics Computer Science and Applied Statistics",
    "Kimbohy",
    "Kimbohy Marisika",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  alternates: { canonical: "/" },
  // L'image Open Graph est générée par app/opengraph-image.tsx
  openGraph: {
    type: "website",
    title: `${SITE_NAME} - Portfolio`,
    description: DESCRIPTION,
    url: "/",
    siteName: `${SITE_NAME} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Portfolio`,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NuqsAdapter>
          <PortfolioProvider>
            {children}
            <Analytics />
            <SpeedInsights />
            {process.env.CLARITY_PROJECT_ID && (
              <ClarityAnalytics projectId={process.env.CLARITY_PROJECT_ID} />
            )}
          </PortfolioProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
