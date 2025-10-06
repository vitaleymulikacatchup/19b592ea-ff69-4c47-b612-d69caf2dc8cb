import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse — Fun memecoin with simple steps to buy",
  description: "MemePulse is a playful memecoin with clear buy steps, transparent tokenomics, and a community-first vibe. Easy onboarding, bold visuals, fast access.",
  keywords: ["memecoin","meme","crypto","buying","how-to-buy","tokenomics","community","web3","wallet","launch"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MemePulse",
    title: "MemePulse — Fun memecoin with simple steps to buy",
    description: "MemePulse is a playful memecoin with clear buy steps, transparent tokenomics, and a community-first vibe. Easy onboarding, bold visuals, fast access.",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759758566304-68896b45.jpg", width: 1200, height: 630, alt: "MemePulse logo with colorful memes and a bold buy button" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse — Fun memecoin with simple steps to buy",
    description: "MemePulse is a playful memecoin with clear buy steps, transparent tokenomics, and a community-first vibe. Easy onboarding, bold visuals, fast access.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759758566304-68896b45.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
