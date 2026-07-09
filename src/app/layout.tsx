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
  title: "Refill Demo — Educational Crypto Storefront UI",
  description:
    "Educational, non-commercial UI clone inspired by crypto gift-card storefronts. No purchases, payments, accounts, support or affiliation.",
  metadataBase: new URL("https://bitrefill-clone.vercel.app"),
  openGraph: {
    title: "Refill Demo — Educational Crypto Storefront UI",
    description:
      "A static Next.js demo for marketplace layout, catalog search and responsive UI patterns.",
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
