import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PRAVA-24 | Водительские права по всей России",
    template: "%s | PRAVA-24",
  },
  description: "Официальное оформление водительских прав всех категорий с внесением в базу ГИБДД. Быстрая доставка по всей России. Без предоплаты.",
  keywords: [
    "водительские права", 
    "купить права", 
    "оформление прав", 
    "права ГИБДД", 
    "права на спецтехнику", 
    "права ГИМС", 
    "категория A", 
    "категория B", 
    "категория C",
    "официальные права",
    "доставка прав по России"
  ],
  authors: [{ name: "PRAVA-24" }],
  creator: "PRAVA-24",
  publisher: "PRAVA-24",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://prava-24.online"),
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
    },
  },
  openGraph: {
    title: "PRAVA-24 | Водительские права по всей России",
    description: "Официальное оформление водительских прав всех категорий с внесением в базу ГИБДД. Быстрая доставка по всей России.",
    url: "https://prava-24.online",
    siteName: "PRAVA-24",
    locale: "ru_RU",
    type: "website",
    images: [{
      url: "https://prava-24.online/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "PRAVAVOD - Водительские права по всей России",
    }],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}