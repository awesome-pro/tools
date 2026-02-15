import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://newtools.space";
const LAST_UPDATED = "February 15, 2025";

export const metadata: Metadata = {
  title: "Privacy Policy — NewTools",
  description:
    "Privacy Policy for NewTools. Learn how we handle your data, what information we collect, and your rights under GDPR and CCPA.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <div className="prose-sm space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h3]:text-sm [&_h3]:font-medium [&_h3]:text-foreground [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline">
          {/* 1 */}
          <section>
            <h2>1. Introduction</h2>
            <p className="mt-3">
              NewTools (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              operates the website located at{" "}
              <Link href={SITE_URL}>{SITE_URL}</Link> (the
              &quot;Service&quot;). This Privacy Policy explains what
              information we collect, how we use it, and the choices you have
              regarding your data.
            </p>
            <p className="mt-2">
              By accessing or using the Service, you acknowledge that you have
              read and understood this Privacy Policy. If you do not agree with
              the practices described herein, please do not use the Service.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2>2. Information We Collect</h2>

            <h3 className="mt-4">2.1 Information You Provide</h3>
            <p className="mt-2">
              All tools on NewTools operate entirely within your browser. We do{" "}
              <strong>not</strong> collect, transmit, or store any text, files,
              images, or other content you input into our tools. Your data never
              leaves your device.
            </p>

            <h3 className="mt-4">2.2 Automatically Collected Information</h3>
            <p className="mt-2">
              When you visit the Service, we may automatically collect certain
              technical information through third-party analytics services,
              including:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                <strong>Usage data</strong> — pages visited, time spent on
                pages, referral source, and general interaction patterns
              </li>
              <li>
                <strong>Device information</strong> — browser type and version,
                operating system, screen resolution, and device type
              </li>
              <li>
                <strong>Network information</strong> — anonymized IP address,
                approximate geographic location (country/region level only)
              </li>
            </ul>

            <h3 className="mt-4">2.3 Cookies and Similar Technologies</h3>
            <p className="mt-2">
              We use minimal, strictly necessary cookies and similar
              technologies. Our third-party analytics providers (see Section 4)
              may set their own cookies to collect aggregated usage statistics.
              We do <strong>not</strong> use cookies for advertising,
              retargeting, or user profiling.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2>3. How We Use Your Information</h2>
            <p className="mt-3">
              The limited information we collect is used exclusively for the
              following purposes:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                To understand how the Service is used and improve its
                functionality
              </li>
              <li>
                To monitor and analyze usage trends and technical performance
              </li>
              <li>
                To detect, prevent, and address technical issues or abuse
              </li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-2">
              We do <strong>not</strong> sell, rent, or trade your personal
              information to third parties for marketing or any other purpose.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2>4. Third-Party Services</h2>
            <p className="mt-3">
              We use the following third-party services to help operate and
              improve the Service:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                <strong>Google Analytics</strong> — web analytics service
                provided by Google LLC. Google Analytics uses cookies to collect
                aggregated, anonymized usage data. You can opt out by installing
                the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                . See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Vercel Analytics &amp; Speed Insights</strong> —
                performance monitoring services provided by Vercel Inc. These
                services collect anonymized performance metrics. See{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel&apos;s Privacy Policy
                </a>
                .
              </li>
            </ul>
            <p className="mt-2">
              Each third-party service operates under its own privacy policy. We
              encourage you to review their policies to understand how they
              handle your data.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2>5. Data Retention</h2>
            <p className="mt-3">
              Since we do not collect personal content or require user accounts,
              we retain minimal data. Aggregated analytics data is retained for
              up to 26 months in accordance with Google Analytics default
              settings. You may request deletion of any data associated with
              your visit by contacting us (see Section 10).
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2>6. Data Security</h2>
            <p className="mt-3">
              We implement reasonable technical and organizational measures to
              protect the limited data we collect. The Service is served over
              HTTPS, and we follow industry-standard security practices.
              However, no method of electronic transmission or storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2>7. Your Rights Under GDPR</h2>
            <p className="mt-3">
              If you are located in the European Economic Area (EEA), United
              Kingdom, or Switzerland, you have the following rights under the
              General Data Protection Regulation (GDPR):
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                <strong>Right of access</strong> — request a copy of the
                personal data we hold about you
              </li>
              <li>
                <strong>Right to rectification</strong> — request correction of
                inaccurate personal data
              </li>
              <li>
                <strong>Right to erasure</strong> — request deletion of your
                personal data
              </li>
              <li>
                <strong>Right to restrict processing</strong> — request that we
                limit how we use your data
              </li>
              <li>
                <strong>Right to data portability</strong> — request your data
                in a structured, machine-readable format
              </li>
              <li>
                <strong>Right to object</strong> — object to our processing of
                your personal data
              </li>
            </ul>
            <p className="mt-2">
              Our legal basis for processing data is legitimate interest in
              improving the Service. To exercise any of these rights, please
              contact us using the information in Section 10.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2>8. Your Rights Under CCPA</h2>
            <p className="mt-3">
              If you are a California resident, the California Consumer Privacy
              Act (CCPA) grants you the following rights:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                <strong>Right to know</strong> — request disclosure of the
                categories and specific pieces of personal information we have
                collected
              </li>
              <li>
                <strong>Right to delete</strong> — request deletion of personal
                information we have collected
              </li>
              <li>
                <strong>Right to opt-out</strong> — opt out of the sale of
                personal information (we do not sell personal information)
              </li>
              <li>
                <strong>Right to non-discrimination</strong> — we will not
                discriminate against you for exercising your CCPA rights
              </li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us using the
              information in Section 10.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2>9. Children&apos;s Privacy</h2>
            <p className="mt-3">
              The Service is not directed at children under the age of 13 (or
              the applicable age of consent in your jurisdiction). We do not
              knowingly collect personal information from children. If you
              believe that a child has provided us with personal information,
              please contact us and we will take steps to delete such
              information.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2>10. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, wish to
              exercise your data rights, or have concerns about how your
              information is handled, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@newtools.space">privacy@newtools.space</a>
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2>11. Changes to This Privacy Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable law. When we make material
              changes, we will update the &quot;Last updated&quot; date at the
              top of this page. We encourage you to review this Privacy Policy
              periodically. Your continued use of the Service after any changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Cross-link */}
          <section className="rounded-lg border p-4">
            <p>
              Please also review our{" "}
              <Link href="/terms">Terms of Service</Link> for the complete
              terms governing your use of NewTools.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}