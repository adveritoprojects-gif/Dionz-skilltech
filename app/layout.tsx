import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dionzskillteck.com"),

  title: {
    default: "Dionz Skilltech | Skill Development & Technology Training",
    template: "%s | Dionz Skilltech",
  },

  description:
    "Dionz Skilltech is a modern skill development and technology company offering professional training, web development, software solutions, and digital skills for students and businesses.",

  keywords: [
    "Dionz Skilltech",
    "Skill development company",
    "Technology training institute",
    "Web development training",
    "Software development services",
    "IT skill training",
    "Digital skills training",
    "Next.js development",
    "Full stack development",
  ],

  authors: [{ name: "Dionz Skilltech" }],
  creator: "Dionz Skilltech",
  publisher: "Dionz Skilltech",

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Dionz Skilltech | Skill Development & Technology Training",
    description:
      "Professional skill development, IT training, and technology solutions by Dionz Skilltech. Empowering students and businesses with modern digital skills.",
    url: "https://dionzskillteck.com",
    siteName: "Dionz Skilltech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dionz Skilltech Skill Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dionz Skilltech | Skill Development & Technology Training",
    description:
      "Learn modern tech skills and build digital solutions with Dionz Skilltech.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
