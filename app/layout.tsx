import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chloe Li | Business Analyst & Product Analyst",
  description:
    "A concise bilingual portfolio for Business Analyst, Product Analyst, and Data Analyst opportunities."
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
