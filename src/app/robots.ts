import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { indexingEnabled } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots {
  // Allow crawlers to see noindex on draft policy pages. Preview protection also needs authentication.
  return indexingEnabled ? { rules: { userAgent: "*", allow: "/", disallow: ["/api/"] }, sitemap: new URL("/sitemap.xml", siteConfig.url).href } : { rules: { userAgent: "*", allow: "/", disallow: ["/api/"] } };
}
