import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

// implements Next.js font preloading and optimization
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixel Portfolio | John Li",
  description:
    "A cozy pixel art portfolio — showcasing projects, skills, and vibes under a starry night sky.",
  keywords: ["portfolio", "developer", "pixel art", "web developer", "projects"],
  authors: [{ name: "John Li" }],
  icons: {
    icon: "/slowpoke.png",
    shortcut: "/slowpoke.png",
    apple: "/slowpoke.png",
  },
  openGraph: {
    title: "Pixel Portfolio | John Li",
    description: "A cozy pixel art portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <head>
        <link rel="icon" href="/slowpoke.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/slowpoke.png" type="image/png" />
        <link rel="apple-touch-icon" href="/slowpoke.png" />
      </head>
      <body className={vt323.className}>{children}</body>
    </html>
  );
}
