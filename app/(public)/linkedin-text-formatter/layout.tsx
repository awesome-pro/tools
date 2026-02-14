import React from "react";
import type { Metadata } from "next";

const SITE_URL = "https://newtools.space";
const PAGE_URL = `${SITE_URL}/linkedin-text-formatter`;
const PAGE_TITLE =
  "LinkedIn Text Formatter — Bold, Italic, Underline for LinkedIn Posts";
const PAGE_DESCRIPTION =
  "Free online LinkedIn text formatter. Convert your text to bold, italic, bold italic, underline, strikethrough, and monospace — then copy and paste into LinkedIn posts, comments, and messages. No ads, no sign-up.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "linkedin text formatter",
    "linkedin bold text",
    "linkedin italic text",
    "linkedin text formatting",
    "bold text for linkedin",
    "linkedin post formatter",
    "linkedin unicode text",
    "linkedin underline text",
    "linkedin strikethrough text",
    "linkedin monospace text",
    "format text for linkedin",
    "linkedin text generator",
    "linkedin bold italic",
    "linkedin text styles",
    "free linkedin text formatter",
    "linkedin comment formatter",
    "unicode text formatter",
    "social media text formatter",
    "linkedin text tool",
    "bold italic underline linkedin",
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
  name: "LinkedIn Text Formatter",
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Bold text formatting for LinkedIn",
    "Italic text formatting for LinkedIn",
    "Bold Italic text formatting",
    "Underline text formatting",
    "Strikethrough text formatting",
    "Monospace text formatting",
    "Real-time preview",
    "One-click copy to clipboard",
    "Works on LinkedIn posts, comments, and messages",
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
      name: "How does LinkedIn text formatting work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn doesn't support native rich text in posts and comments. This tool converts your regular text into special Unicode characters that look like bold, italic, underline, etc. These characters are part of the Unicode standard and display correctly on all devices and platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Will this work on LinkedIn posts, comments, and messages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The formatted text uses Unicode characters that work everywhere text is accepted — LinkedIn posts, comments, messages, and even your profile headline and summary.",
      },
    },
    {
      "@type": "Question",
      name: "Does this work on other platforms too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Unicode formatted text works on Twitter/X, Facebook, Instagram bios, WhatsApp, Telegram, and any platform that supports Unicode text.",
      },
    },
    {
      "@type": "Question",
      name: "Is this LinkedIn text formatter free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Completely free. No ads, no sign-up, no limits. Use it as often as you need.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a Chrome extension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We also offer a free Chrome extension that lets you format text directly while writing on LinkedIn — without leaving the page.",
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
      name: "LinkedIn Text Formatter",
      item: PAGE_URL,
    },
  ],
};

export default function LinkedInTextFormatterLayout({
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
