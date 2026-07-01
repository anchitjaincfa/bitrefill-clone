import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buy Gift Cards & Top Up Airtime with Bitcoin or Crypto - Bitrefill",
  description:
    "Buy gift cards, mobile refills, eSIMs and pay bills with Bitcoin, Lightning, Ethereum, USDT, USDC and more. Live on crypto with 8,000+ products in 180+ countries.",
  metadataBase: new URL("https://bitrefill-clone.vercel.app"),
  openGraph: {
    title: "Bitrefill — Spend crypto, save big.",
    description:
      "Buy gift cards, mobile refills and eSIMs with crypto. 8,000+ products, 180+ countries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
