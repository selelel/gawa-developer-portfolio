import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://gawadeveloper.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#292524",
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
      className={`${ebGaramond.variable} ${inter.variable} h-full antialiased`}
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
      </body>
    </html>
  );
}
