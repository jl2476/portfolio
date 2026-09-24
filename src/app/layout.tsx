import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixel Portfolio | John Li",
  description:
    "A cozy pixel art portfolio — showcasing projects, skills, and vibes under a starry night sky.",
  keywords: ["portfolio", "developer", "pixel art", "web developer", "projects"],
  authors: [{ name: "John Li" }],
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
