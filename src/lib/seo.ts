import type { Metadata } from "next";
import { siteConfig } from "./config";

export const indexingEnabled = process.env.SEO_INDEXING_ENABLED !== "false" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
export const homeTitle = "WhatsApp Attendance System for Employees | FootfallIQ";
export const homeDescription = "Manage employee attendance on WhatsApp with GPS check-ins, shift reminders, site management and daily reports. Explore FootfallIQ Attendance.";
export const socialImage = { url: "/social-preview.png", width: 1200, height: 630, alt: "FootfallIQ Attendance — Employee Attendance. Simplified with WhatsApp." };
export function absoluteUrl(path: string) { return new URL(path, siteConfig.url).href; }
export function pageMetadata(title: string, description: string, path: string, index = true): Metadata {
  const fullTitle = path === "/" ? title : `${title} | FootfallIQ`;
  return {
    title: { absolute: fullTitle }, description, alternates: { canonical: path },
    robots: { index: index && indexingEnabled, follow: true },
    openGraph: { type: "website", siteName: siteConfig.name, locale: "en_IN", title: fullTitle, description, url: path, images: [socialImage] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [socialImage.url] },
  };
}
