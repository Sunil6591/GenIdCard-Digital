import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://digital.genidcard.com"),
  title: "Digital.GenIdCard.com - Smart Digital Event Pass & Access System",
  description:
    "Create secure QR-based digital passes for exhibitions and corporate events. Scan. Verify. Track. In Real-Time. Built for trade shows, conferences, and corporate events.",
  keywords: ["digital event pass", "QR event pass", "event registration", "exhibition pass", "corporate event"],
  icons: {
    icon: [
      { url: "/digital/logo.png", sizes: "any", type: "image/png" },
      { url: "/digital/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/digital/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/digital/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Digital.GenIdCard.com - Smart Digital Event Pass & Access System",
    description:
      "Create secure QR-based digital passes for exhibitions and corporate events. Scan. Verify. Track. In Real-Time.",
    url: "https://digital.genidcard.com",
    siteName: "Digital GenIdCard",
    images: [
      {
        url: "/digital/logo.png",
        width: 1200,
        height: 1200,
        alt: "GenIdCard.com - Smart Digital Event Pass & Access System",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital.GenIdCard.com - Smart Digital Event Pass & Access System",
    description:
      "Create secure QR-based digital passes for exhibitions and corporate events. Scan. Verify. Track. In Real-Time.",
    images: ["/digital/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JZR0K1Q8QM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JZR0K1Q8QM');
          `}
        </Script>
        <div 
          className="fixed inset-0 -z-10 opacity-100 site-background"
          style={{
            backgroundImage: "url('/cards.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Header />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

