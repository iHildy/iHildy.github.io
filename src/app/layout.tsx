import "@/styles/globals.css";

import { type Metadata } from "next";
import { ThemeProvider } from "@/app/_components/theme-provider";

const siteUrl = "https://ihildy.com";

export const metadata: Metadata = {
  title: "Ian Hildebrand",
  description:
    "Software engineer and entrepreneur based in Texas. Building pixel-perfect UIs and automations to make lives easier.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ian Hildebrand",
    title: "Ian Hildebrand",
    description:
      "Software engineer and entrepreneur based in Texas. Building pixel-perfect UIs and automations to make lives easier.",
    images: [
      {
        url: "/pfp.webp",
        width: 400,
        height: 400,
        alt: "Ian Hildebrand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Hildebrand",
    description:
      "Software engineer and entrepreneur based in Texas. Building pixel-perfect UIs and automations to make lives easier.",
    images: ["/pfp.webp"],
    creator: "@ianhildy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        <link rel="preconnect" href="https://x.com" />
      </head>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
