import { siteConfig } from "./config";
import { absoluteUrl } from "./seo";

export function websiteGraph() {
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": absoluteUrl("/#organization"), name: "FootfallIQ", legalName: "Spopsy (Sole Proprietorship)", url: absoluteUrl("/"), logo: { "@type": "ImageObject", url: absoluteUrl("/digital/logo.png"), width: 878, height: 567 }, email: siteConfig.contactEmail, description: "FootfallIQ provides WhatsApp-based employee attendance management for businesses working across sites and shifts." },
    { "@type": "WebSite", "@id": absoluteUrl("/#website"), name: siteConfig.name, url: absoluteUrl("/"), inLanguage: "en", publisher: { "@id": absoluteUrl("/#organization") } },
    { "@type": "WebApplication", "@id": absoluteUrl("/#application"), name: siteConfig.name, url: siteConfig.appUrl, applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Employee attendance through WhatsApp with explicit location sharing, site-radius verification, shift reminders, supervisor alerts and a centralized management dashboard.", publisher: { "@id": absoluteUrl("/#organization") } },
  ] };
}
export function breadcrumbData(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })) };
}
