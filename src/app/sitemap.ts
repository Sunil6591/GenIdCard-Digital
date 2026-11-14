import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: new URL("/", siteConfig.url).href, changeFrequency: "monthly", priority: 1 }]; }
