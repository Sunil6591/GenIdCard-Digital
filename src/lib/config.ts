import { validateOrigin } from "./origin";

export const siteConfig = {
  name: "FootfallIQ Attendance",
  url: validateOrigin(process.env.NEXT_PUBLIC_SITE_URL, "https://footfalliq.in"),
  appUrl: validateOrigin(process.env.NEXT_PUBLIC_APP_URL, "https://attendance.footfalliq.in"),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "yo@spopsy.com",
  whatsappNumber: "919960509991",
  whatsappDisplay: "+91 99605 09991",
  whatsappUrl: "https://wa.me/919960509991",
};
