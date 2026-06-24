import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://gawadeveloper.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gawa Developer — Build Better Software. Grow Faster.",
    template: "%s | Gawa Developer",
  },
  description:
    "Gawa Developer is a modern software development agency that builds custom web applications, SaaS platforms, mobile apps, and business automation solutions for startups and enterprises.",
  keywords: [
    "software development agency",
    "custom web applications",
    "SaaS development",
    "mobile app development",
    "business automation",
    "Next.js development",
    "React development",
    "TypeScript",
  ],
  authors: [{ name: "Gawa Developer", url: siteUrl }],
  creator: "Gawa Developer",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Gawa Developer",
    title: "Gawa Developer — Build Better Software. Grow Faster.",
    description:
      "Custom web apps, SaaS platforms, and business automation solutions that help companies streamline operations and grow with confidence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gawa Developer — Modern Software Development Agency",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gawa Developer — Build Better Software. Grow Faster.",
    description:
      "Custom web apps, SaaS platforms, and business automation solutions for startups and enterprises.",
    images: ["/og-image.png"],
    creator: "@gawadeveloper",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gawa Developer",
  url: siteUrl,
  description:
    "Modern software development agency specializing in custom web applications, SaaS platforms, mobile apps, and business automation.",
  slogan: "Build Better Software. Grow Faster.",
  serviceType: [
    "Custom Web Application Development",
    "SaaS Platform Development",
    "Mobile Application Development",
    "CRM & ERP Systems",
    "AI Integrations",
    "API Development",
    "Business Automation",
    "UI/UX Design",
  ],
  areaServed: "Worldwide",
  availableLanguage: "English",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
      </head>
      <body className='min-h-full flex flex-col bg-bg-canvas text-brand-dark'>
        <Navbar />
        {children}
        <Footer />
        {/* impeccable-live-start */}
        <script src='http://localhost:8400/live.js'></script>
        {/* impeccable-live-end */}
      </body>
    </html>
  );
}
