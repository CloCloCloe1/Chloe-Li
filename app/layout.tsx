import type { Metadata } from "next";
import type { ReactNode } from "react";
import ClickSpark from "@/components/ClickSpark";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chloe-li.vercel.app"),
  title: "Chloe Li | Business Analyst",
  description:
    "A concise bilingual portfolio for Business Analyst and Data Analyst opportunities.",
  openGraph: {
    title: "Chloe Li | Portfolio",
    description:
      "Business Analyst portfolio highlighting experience in data analysis, AI workflows, product validation, financial systems, reporting, and research.",
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
      "Business Analyst portfolio highlighting experience in data analysis, AI workflows, product validation, financial systems, reporting, and research.",
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
      <body>
        <ClickSpark
          duration={460}
          extraScale={1.1}
          sparkColor="#0066cc"
          sparkCount={8}
          sparkRadius={22}
          sparkSize={12}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
