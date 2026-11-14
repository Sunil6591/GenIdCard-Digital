import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { marketingPages } from "@/data/marketing-pages";
import { indexingEnabled } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled) return [];
  return ["/", ...marketingPages.map(page => page.path)].map(path => ({ url: new URL(path, siteConfig.url).href }));
}
