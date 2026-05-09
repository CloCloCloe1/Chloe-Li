import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chloe-li.vercel.app"),
  title: "Chloe Li | Business Analyst & Product Analyst",
  description:
    "A concise bilingual portfolio for Business Analyst, Product Analyst, and Data Analyst opportunities.",
  openGraph: {
    title: "Chloe Li | Portfolio",
    description:
      "Business Analyst and Product Analyst portfolio highlighting experience in data analysis, AI workflows, product validation, financial systems, reporting, and research.",
    url: "https://chloe-li.vercel.app/",
    siteName: "Chloe Li Portfolio",
    images: [
      {
        url: "/linkedin-preview.jpg?v=1",
        width: 2048,
        height: 1152,
        alt: "Open book pages preview image"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chloe Li | Portfolio",
    description:
      "Business Analyst and Product Analyst portfolio highlighting experience in data analysis, AI workflows, product validation, financial systems, reporting, and research.",
    images: ["/linkedin-preview.jpg?v=1"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
