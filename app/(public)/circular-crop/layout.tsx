import React from "react";
import type { Metadata } from "next";

const SITE_URL = "https://newtools.space";
const PAGE_URL = `${SITE_URL}/circular-crop`;
const PAGE_TITLE = "Circular Crop — Crop Images Into a Circle Online";
const PAGE_DESCRIPTION =
  "Free online circular image cropper. Upload any image, position and zoom, then download a perfectly cropped circle with a transparent background. No ads, no sign-up — works entirely in your browser.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "circular crop",
    "circle crop",
    "crop image to circle",
    "circular image cropper",
    "round crop",
    "circle image cutter",
    "crop photo circle",
    "circular crop online",
    "free circular crop",
    "circle crop tool",
    "round image cropper",
    "crop circle transparent",
    "profile picture crop",
    "avatar crop",
    "circle photo editor",
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
  name: "Circular Crop",
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Circular image cropping",
    "Drag and drop upload",
    "Touch-friendly zoom and pan",
    "Transparent PNG output",
    "Client-side processing",
    "No server uploads",
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
      name: "Is my image uploaded to a server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Everything happens in your browser. Your image never leaves your device — it is processed entirely client-side using the HTML Canvas API.",
      },
    },
    {
      "@type": "Question",
      name: "What format is the output?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cropped image is saved as a PNG with a transparent background, so the area outside the circle is fully transparent.",
      },
    },
    {
      "@type": "Question",
      name: "Does this work on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The cropper supports touch gestures — drag to move and pinch to zoom. It works on any phone, tablet, or desktop.",
      },
    },
    {
      "@type": "Question",
      name: "Is this circular crop tool free?",
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
      name: "Circular Crop",
      item: PAGE_URL,
    },
  ],
};

export default function CircularCropLayout({
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
