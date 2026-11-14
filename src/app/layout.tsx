import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/noto-sans-devanagari/400.css";
import "@fontsource/noto-sans-devanagari/600.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnalyticsBridge from "@/components/layout/AnalyticsBridge";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/lib/config";

const title = "FootfallIQ Attendance — Employee attendance, simply on WhatsApp";
const description = "A simpler attendance routine for teams across sites and shifts. Employees share their location through WhatsApp. Managers get one clear attendance dashboard.";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title: { default: title, template: "%s | FootfallIQ Attendance" }, description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: siteConfig.name, locale: "en_IN", type: "website", images: [{ url: "/social-preview.svg", width: 1200, height: 630, alt: "FootfallIQ Attendance — One WhatsApp message away" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/social-preview.svg"] },
  icons: { icon: [{ url: "/digital/fav.ico", type: "image/png" }, { url: "/digital/fav.png", type: "image/png" }], apple: [{ url: "/digital/fav.png", type: "image/png" }] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F8FAF8" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a><Header />{children}<Footer /><FloatingWhatsApp /><AnalyticsBridge /></body></html>;
}
