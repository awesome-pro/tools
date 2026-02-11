import React from "react";
import type { Metadata } from "next";

const SITE_URL = "https://newtools.space";
const PAGE_URL = `${SITE_URL}/json-formatter`;
const PAGE_TITLE = "JSON Formatter — Format, Validate & Minify JSON Online";
const PAGE_DESCRIPTION =
  "Free online JSON formatter and validator. Paste your JSON and instantly format, minify, or validate it. No ads, no sign-up — just paste and go.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "json formatter",
    "json format",
    "json beautifier",
    "json validator",
    "json minifier",
    "json pretty print",
    "format json online",
    "json formatter online",
    "free json formatter",
    "json lint",
    "json checker",
    "validate json",
    "minify json",
    "json viewer",
    "json parser",
    "json tool",
    "json formatter tool",
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
  name: "JSON Formatter",
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
    "JSON formatting with custom indentation",
    "JSON minification",
    "Real-time JSON validation",
    "Syntax error highlighting",
    "Copy and paste support",
    "Sample JSON loading",
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
      name: "How does the JSON formatter work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paste your JSON into the input panel on the left. The tool parses it in real-time and displays the formatted output on the right. If there's a syntax error, it will show you the exact error message.",
      },
    },
    {
      "@type": "Question",
      name: "Can I minify JSON with this tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Click the Minify button to compress your JSON into a single line with no whitespace — perfect for API payloads and config files.",
      },
    },
    {
      "@type": "Question",
      name: "Does this tool validate my JSON?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The formatter validates your JSON as you type. Valid JSON shows a green checkmark; invalid JSON shows the error message so you can fix it immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Is this JSON formatter free?",
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
      name: "JSON Formatter",
      item: PAGE_URL,
    },
  ],
};

export default function JsonFormatterLayout({
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
