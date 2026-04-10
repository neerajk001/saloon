import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cielo Hair & Beauty | Elevated Hair & Beauty Experience",
  description:
    "Experience the ultimate in luxury hair and beauty at Cielo. Book your appointment in Thames or Tauranga today.",
};

// Cache Strategy: Static export with aggressive caching
// Images and videos will be cached by Vercel CDN for 1 year
// This minimizes bandwidth usage and provides fast global delivery

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
