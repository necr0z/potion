import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

import { Toaster } from "sonner";

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
    // suppressHydrationWarning for darkmode
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="potion-theme"
          >
            <Toaster position="bottom-center" />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
