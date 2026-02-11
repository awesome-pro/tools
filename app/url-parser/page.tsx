import UrlParserTool from "./url-parser-tool";

export default function UrlParserPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-14">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight sm:text-3xl">
            URL Parser
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Paste a URL and instantly see every component broken down.
          </p>
        </div>

        <UrlParserTool />

        <section className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Free Online URL Parser &amp; Decoder
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              NewTools&apos;s URL parser breaks any URL into its individual
              components — protocol, hostname, port, path, query parameters,
              and hash fragment — instantly. No ads, no sign-up, no clutter.
              Just paste a URL and see every part clearly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              What This Tool Shows
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Protocol</strong> — the
                scheme such as https:, http:, or ftp:
              </li>
              <li>
                <strong className="text-foreground">Origin</strong> — the full
                origin including protocol, hostname, and port
              </li>
              <li>
                <strong className="text-foreground">Hostname</strong> — the
                domain name of the URL
              </li>
              <li>
                <strong className="text-foreground">Port</strong> — the port
                number if explicitly specified
              </li>
              <li>
                <strong className="text-foreground">Path</strong> — the
                pathname after the domain
              </li>
              <li>
                <strong className="text-foreground">Query Parameters</strong>{" "}
                — each key-value pair parsed individually
              </li>
              <li>
                <strong className="text-foreground">Hash / Fragment</strong> —
                the anchor portion of the URL
              </li>
              <li>
                <strong className="text-foreground">Username &amp; Password</strong>{" "}
                — credentials embedded in the URL, if any
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-3 space-y-4">
              <div>
                <h3 className="text-sm font-medium">
                  How does the URL parser work?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Paste any URL into the input field. The tool uses the
                  browser&apos;s built-in URL API to parse it in real-time and
                  displays every component — protocol, host, path, query
                  parameters, and more — in a clean, readable format.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Does the URL need to include https://?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes. A valid URL must include a protocol (e.g. https:// or
                  http://). Without it, the parser cannot determine the URL
                  structure.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Can I copy individual parts of the URL?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes. Every parsed field has a copy button next to it. You can
                  also use &quot;Copy All&quot; to copy the full breakdown to
                  your clipboard.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Is this URL parser free?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Completely free. No ads, no sign-up, no limits. Use it as
                  often as you need.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}