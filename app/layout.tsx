import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GenIdCard - Generate Print-Ready ID Cards Without Errors",
  description:
    "Collect data, validate records, and generate front–back ID cards that printers can trust. Built for schools, colleges, corporates, and printers.",
  keywords: ["ID cards", "student ID", "employee ID", "ID card generator", "print-ready ID cards"],
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "GenIdCard - Generate Print-Ready ID Cards Without Errors",
    description:
      "Collect data, validate records, and generate front–back ID cards that printers can trust. Built for schools, colleges, corporates, and printers.",
    url: "https://genidcard.com",
    siteName: "GenIdCard",
    images: [
      {
        url: "https://genidcard.com/printing-confident.png",
        width: 1200,
        height: 630,
        alt: "Printing Confident",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenIdCard - Generate Print-Ready ID Cards Without Errors",
    description:
      "Collect data, validate records, and generate front–back ID cards that printers can trust.",
    images: ["https://genidcard.com/printing-confident.png"],
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

