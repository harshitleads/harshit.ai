import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";
import CalendlyBubble from "@/components/calendly-bubble";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.harshit.ai"),
  alternates: {
    canonical: "/",
  },
  title: "Harshit Sharma | Director of AI Transformation",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  description:
    "Portfolio of Harshit Sharma - Director of AI Transformation leading enterprise AI in logistics, with a focus on evals, reliability, and trustworthy AI systems.",
  openGraph: {
    title: "Harshit Sharma | Director of AI Transformation",
    description:
      "Leading enterprise AI transformation in logistics. Shipping real products, obsessed with evals, reliability, and what makes AI systems trustworthy.",
    url: "https://www.harshit.ai",
    siteName: "Harshit Sharma",
    images: [
      {
        url: "https://www.harshit.ai/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harshit Sharma, Director of AI Transformation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Sharma | Director of AI Transformation",
    description:
      "Leading enterprise AI transformation in logistics. Shipping real products, obsessed with evals, reliability, and what makes AI systems trustworthy.",
    images: ["https://www.harshit.ai/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1128",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <CalendlyBubble />
        <Analytics />
      </body>
    </html>
  );
}
