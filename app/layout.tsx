import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Potion",
  description: "Notion except I did that.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light",
        url: "/jotion-logo.svg",
        href: "/jotion-logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark",
        url: "/jotion-logo-dark.svg",
        href: "/jotion-logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
