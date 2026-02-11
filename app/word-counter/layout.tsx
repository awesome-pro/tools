import React from "react";
import type { Metadata } from "next";

const SITE_URL = "https://newtools.space";
const PAGE_URL = `${SITE_URL}/word-counter`;
const PAGE_TITLE = "Word Counter — Count Words, Characters & Sentences Instantly";
const PAGE_DESCRIPTION =
  "Free online word counter tool. Instantly count words, characters, sentences, paragraphs, and estimate reading time. No ads, no sign-up — just paste and count.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "word counter",
    "word count",
    "character counter",
    "character count",
    "letter counter",
    "sentence counter",
    "paragraph counter",
    "reading time calculator",
    "text counter",
    "online word counter",
    "free word counter",
    "word counter tool",
    "count words online",
    "count characters online",
    "writing tool",
    "text analysis",
    "word count tool",
    "words in text",
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
  name: "Word Counter",
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Word count",
    "Character count",
    "Sentence count",
    "Paragraph count",
    "Reading time estimation",
    "Copy and paste support",
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
      name: "How does the word counter work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply paste or type your text into the text area. The tool instantly counts words, characters, sentences, paragraphs, and estimates reading time in real-time — no button clicks needed.",
      },
    },
    {
      "@type": "Question",
      name: "Is this word counter free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this word counter is completely free with no ads, no sign-up, and no limits. Use it as many times as you want.",
      },
    },
    {
      "@type": "Question",
      name: "How is reading time calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reading time is estimated based on an average reading speed of 200 words per minute, which is the standard for adult readers.",
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
      name: "Word Counter",
      item: PAGE_URL,
    },
  ],
};

export default function WordCounterLayout({
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