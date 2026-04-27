import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClarityAnalytics from "@/components/ClarityAnalytics";
import { PortfolioProvider } from "@/context/PortfolioMode";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Finoana Lovtiana Rabarijaona",
  description:
    "Personal portfolio of Finoana Lovtiana Rabarijaona, a passionate software engineer and AI enthusiast.",
  keywords: [
    "Finoana Lovtiana Rabarijaona",
    "Finoana Rabarijaona",
    "Lovtiana Rabarijaona",
    "Finoana Lovtiana",
    "Lovatiana Finoana Rabarijaona",
    "Rabarijaona Finoana Lovatiana",
    "Rabarijaona Lovatiana",
    "Finoana",
    "Lovtiana",
    "Rabarijaona",
    "Software Engineer",
    "AI Enthusiast",
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
  openGraph: {
    title: "Finoana Lovtiana Rabarijaona - Portfolio",
    description:
      "Personal portfolio of Finoana Lovtiana Rabarijaona, a passionate software engineer and AI enthusiast.",
    url: "https://kimbohy.vercel.app",
    siteName: "Finoana Lovtiana Rabarijaona Portfolio",
    images: [
      "https://kimbohy.vercel.app/kimbohy.svg",
      "https://kimbohy.vercel.app/images/k.svg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
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
        </Suspense>
      </body>
    </html>
  );
}
