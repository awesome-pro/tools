import JsonFormatterTool from "./json-formatter-tool";

export default function JsonFormatterPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:py-14">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight sm:text-3xl">
            JSON Formatter
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Paste your JSON and get it formatted instantly.
          </p>
        </div>

        <JsonFormatterTool />

        <section className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Free Online JSON Formatter &amp; Validator
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              NewTools&apos;s JSON formatter lets you paste raw or minified JSON
              and instantly get a beautifully formatted, readable output. It also
              validates your JSON in real-time and highlights errors so you can
              fix them fast. No ads, no sign-up — just paste and format.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              What This Tool Does
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Format JSON</strong> —
                pretty-print with 2 or 4 space indentation
              </li>
              <li>
                <strong className="text-foreground">Minify JSON</strong> —
                compress to a single line for APIs and storage
              </li>
              <li>
                <strong className="text-foreground">Validate JSON</strong> —
                instantly detect and display syntax errors
              </li>
              <li>
                <strong className="text-foreground">Copy output</strong> —
                one-click copy of the formatted or minified result
              </li>
              <li>
                <strong className="text-foreground">Paste &amp; go</strong> —
                paste from clipboard and see results immediately
              </li>
              <li>
                <strong className="text-foreground">Sample JSON</strong> —
                load example data to see the tool in action
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
                  How does the JSON formatter work?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Paste your JSON into the input panel on the left. The tool
                  parses it in real-time and displays the formatted output on the
                  right. If there&apos;s a syntax error, it will show you the
                  exact error message.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Can I minify JSON with this tool?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes. Click the &quot;Minify&quot; button to compress your JSON
                  into a single line with no whitespace — perfect for API
                  payloads and config files.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Does this tool validate my JSON?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes. The formatter validates your JSON as you type. Valid JSON
                  shows a green checkmark; invalid JSON shows the error message
                  so you can fix it immediately.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Is this JSON formatter free?
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