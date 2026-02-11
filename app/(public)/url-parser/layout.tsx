import React from "react";
import type { Metadata } from "next";

const SITE_URL = "https://newtools.space";
const PAGE_URL = `${SITE_URL}/url-parser`;
const PAGE_TITLE = "URL Parser — Break Down Any URL Instantly";
const PAGE_DESCRIPTION =
  "Free online URL parser tool. Paste any URL and instantly see the protocol, hostname, port, path, query parameters, and hash fragment. No ads, no sign-up.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "url parser",
    "url decoder",
    "parse url",
    "url breakdown",
    "url components",
    "query string parser",
    "url analyzer",
    "url dissector",
    "online url parser",
    "free url parser",
    "url query parser",
    "url structure",
    "url parts",
    "url hostname",
    "url path extractor",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: "NewTools",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "URL Parser",
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "URL component breakdown",
    "Query parameter parsing",
    "Protocol detection",
    "Port extraction",
    "Hash fragment parsing",
    "One-click copy for each field",
  ],
  browserRequirements: "Requires JavaScript",
  softwareVersion: "1.0",
  author: {
    "@type": "Organization",
    name: "NewTools",
    url: SITE_URL,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the URL parser work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paste any URL into the input field. The tool uses the browser's built-in URL API to parse it in real-time and displays every component — protocol, host, path, query parameters, and more — in a clean, readable format.",
      },
    },
    {
      "@type": "Question",
      name: "Does the URL need to include https://?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A valid URL must include a protocol (e.g. https:// or http://). Without it, the parser cannot determine the URL structure.",
      },
    },
    {
      "@type": "Question",
      name: "Can I copy individual parts of the URL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every parsed field has a copy button next to it. You can also use 'Copy All' to copy the full breakdown to your clipboard.",
      },
    },
    {
      "@type": "Question",
      name: "Is this URL parser free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely free. No ads, no sign-up, no limits. Use it as often as you need.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "URL Parser",
      item: PAGE_URL,
    },
  ],
};

export default function UrlParserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
