import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://newtools.space";
const LAST_UPDATED = "February 15, 2025";

export const metadata: Metadata = {
  title: "Terms of Service — NewTools",
  description:
    "Terms of Service for NewTools. Read the terms and conditions governing your use of our free online tools.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <div className="prose-sm space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h3]:text-sm [&_h3]:font-medium [&_h3]:text-foreground [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline">
          {/* 1 */}
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using the website located at{" "}
              <Link href={SITE_URL}>{SITE_URL}</Link> (the
              &quot;Service&quot;), operated by NewTools (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;), you agree to be bound by
              these Terms of Service (&quot;Terms&quot;). If you do not agree to
              all of these Terms, you must not access or use the Service.
            </p>
            <p className="mt-2">
              We reserve the right to modify these Terms at any time. Material
              changes will be reflected by updating the &quot;Last updated&quot;
              date above. Your continued use of the Service after such changes
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2>2. Description of Service</h2>
            <p className="mt-3">
              NewTools provides a collection of free, browser-based online
              utilities including, but not limited to, text formatters, JSON
              formatters, URL parsers, image croppers, and word counters. All
              tools operate entirely within your web browser — no data is
              uploaded to or processed on our servers.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2>3. Eligibility</h2>
            <p className="mt-3">
              You must be at least 13 years of age (or the minimum age of
              digital consent in your jurisdiction) to use the Service. By using
              the Service, you represent and warrant that you meet this
              eligibility requirement.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2>4. User Conduct</h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                Use the Service for any unlawful purpose or in violation of any
                applicable local, national, or international law or regulation
              </li>
              <li>
                Attempt to interfere with, compromise, or disrupt the Service or
                its underlying infrastructure
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any part of the
                Service, except as permitted by applicable law
              </li>
              <li>
                Use automated scripts, bots, or scrapers to access the Service
                in a manner that degrades performance for other users
              </li>
              <li>
                Misrepresent your identity or affiliation with any person or
                entity
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                Service or any systems or networks connected to the Service
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2>5. Intellectual Property</h2>

            <h3 className="mt-4">5.1 Our Content</h3>
            <p className="mt-2">
              The Service, including its design, layout, text, graphics, logos,
              icons, and code, is owned by or licensed to NewTools and is
              protected by copyright, trademark, and other intellectual property
              laws. You may not reproduce, distribute, modify, or create
              derivative works from any part of the Service without our prior
              written consent.
            </p>

            <h3 className="mt-4">5.2 Open Source</h3>
            <p className="mt-2">
              Portions of the Service may be made available as open-source
              software. Such portions are governed by their respective
              open-source licenses, which take precedence over these Terms to
              the extent of any conflict.
            </p>

            <h3 className="mt-4">5.3 Your Content</h3>
            <p className="mt-2">
              Any text, files, images, or other content you input into the tools
              remains entirely yours. Since all processing occurs locally in
              your browser, we do not access, store, or claim any rights over
              your content.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2>6. Disclaimer of Warranties</h2>
            <p className="mt-3">
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
            </p>
            <p className="mt-2">
              We do not warrant that the Service will be uninterrupted,
              error-free, secure, or free of viruses or other harmful
              components. We do not warrant the accuracy, reliability, or
              completeness of any results produced by the tools.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2>7. Limitation of Liability</h2>
            <p className="mt-3">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL NEWTOOLS, ITS OWNERS, CONTRIBUTORS, OR AFFILIATES BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE,
              GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN
              CONNECTION WITH:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Your access to or use of (or inability to use) the Service</li>
              <li>
                Any conduct or content of any third party on or related to the
                Service
              </li>
              <li>
                Any content obtained from the Service, including any errors or
                omissions in tool output
              </li>
              <li>Unauthorized access, use, or alteration of your data</li>
            </ul>
            <p className="mt-2">
              This limitation applies regardless of the legal theory on which
              the claim is based, whether or not we have been advised of the
              possibility of such damages.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2>8. Indemnification</h2>
            <p className="mt-3">
              You agree to indemnify, defend, and hold harmless NewTools and its
              owners, contributors, and affiliates from and against any and all
              claims, liabilities, damages, losses, costs, and expenses
              (including reasonable attorneys&apos; fees) arising out of or in
              connection with your use of the Service or your violation of these
              Terms.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2>9. Third-Party Links and Services</h2>
            <p className="mt-3">
              The Service may contain links to third-party websites or services
              that are not owned or controlled by NewTools. We have no control
              over, and assume no responsibility for, the content, privacy
              policies, or practices of any third-party websites or services.
              You acknowledge and agree that we shall not be liable for any
              damage or loss caused by your use of any such third-party content
              or services.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2>10. Availability and Modifications</h2>
            <p className="mt-3">
              We reserve the right to modify, suspend, or discontinue the
              Service (or any part thereof) at any time, with or without notice.
              We shall not be liable to you or any third party for any
              modification, suspension, or discontinuation of the Service.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2>11. Governing Law and Dispute Resolution</h2>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to its conflict of law
              provisions. Any dispute arising out of or relating to these Terms
              or the Service shall first be attempted to be resolved through
              good-faith negotiation. If the dispute cannot be resolved
              informally, it shall be submitted to the exclusive jurisdiction of
              the courts located in New Delhi, India.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2>12. Severability</h2>
            <p className="mt-3">
              If any provision of these Terms is held to be invalid, illegal, or
              unenforceable by a court of competent jurisdiction, such provision
              shall be modified to the minimum extent necessary to make it
              valid, legal, and enforceable. If such modification is not
              possible, the provision shall be severed, and the remaining
              provisions shall continue in full force and effect.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2>13. Entire Agreement</h2>
            <p className="mt-3">
              These Terms, together with our{" "}
              <Link href="/privacy">Privacy Policy</Link>, constitute the
              entire agreement between you and NewTools regarding your use of
              the Service and supersede all prior agreements, understandings,
              and communications, whether written or oral.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2>14. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:legal@newtools.space">legal@newtools.space</a>
            </p>
          </section>

          {/* Cross-link */}
          <section className="rounded-lg border p-4">
            <p>
              Please also review our{" "}
              <Link href="/privacy">Privacy Policy</Link> to understand how we
              handle your data.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}