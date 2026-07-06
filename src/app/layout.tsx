import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/styles/index.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import EsportsNavbar from "@/components/_common/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://yourdomain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Nexus Arena | Play Beyond",
    template: "%s | Nexus Arena",
  },

  description:
    "Enter Nexus Arena, a next-generation gaming and esports destination for competitive games, live tournaments, creators, match schedules, legendary moments, and gaming news.",

  keywords: [
    "Nexus Arena",
    "gaming platform",
    "esports",
    "competitive gaming",
    "online tournaments",
    "gaming community",
    "esports tournaments",
    "live gaming events",
    "gaming news",
    "professional gamers",
    "gaming creators",
    "tournament platform",
    "esports matches",
    "gaming highlights",
  ],

  authors: [
    {
      name: "Nexus Arena",
    },
  ],

  creator: "Nexus Arena",
  publisher: "Nexus Arena",

  category: "Gaming",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nexus Arena",
    title: "Nexus Arena | Play Beyond",
    description:
      "Discover games, enter competitions, follow creators, watch legendary moments, and experience the next generation of gaming.",
    images: [
      {
        url: "/og/nexus-arena-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nexus Arena gaming and esports platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexus Arena | Play Beyond",
    description:
      "Games, tournaments, creators, live matches, and legendary gaming moments in one arena.",
    images: ["/og/nexus-arena-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AntdRegistry>
          <EsportsNavbar />
          {children}
        </AntdRegistry>
      </body>
    </html>
  )
}
