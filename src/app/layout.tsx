import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnalyticsBridge from "@/components/layout/AnalyticsBridge";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/lib/config";
import { homeTitle, homeDescription, indexingEnabled, socialImage } from "@/lib/seo";
import AnalyticsProvider from "@/components/layout/AnalyticsProvider";

const inter = localFont({ src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2", display: "swap", variable: "--font-inter", preload: true });
const devanagari = localFont({ src: [
  { path: "../../node_modules/@fontsource/noto-sans-devanagari/files/noto-sans-devanagari-devanagari-400-normal.woff2", weight: "400" },
  { path: "../../node_modules/@fontsource/noto-sans-devanagari/files/noto-sans-devanagari-devanagari-600-normal.woff2", weight: "600" },
], display: "swap", variable: "--font-devanagari", preload: false });

const title = homeTitle;
const description = homeDescription;
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title: { default: title, template: "%s | FootfallIQ" }, description,
  alternates: { canonical: "/" },
  robots: { index: indexingEnabled, follow: true },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined, other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined },
  openGraph: { title, description, url: "/", siteName: siteConfig.name, locale: "en_IN", type: "website", images: [socialImage] },
  twitter: { card: "summary_large_image", title, description, images: [socialImage.url] },
  icons: { icon: [{ url: "/digital/fav.ico", type: "image/png" }, { url: "/icon-32.png", type: "image/png", sizes: "32x32" }], apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F8FAF8" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${devanagari.variable}`}><body><a href="#main-content" className="skip-link">Skip to content</a><Header />{children}<Footer /><FloatingWhatsApp /><AnalyticsProvider /><AnalyticsBridge /></body></html>;
}
