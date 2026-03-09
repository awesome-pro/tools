import PdfToCsvTool from "./pdf-to-csv-tool";

export default function PdfToCsvPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-14">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight md:text-5xl sm:text-3xl">
            PDF to CSV
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Extract tables and structured data from any PDF into a clean CSV file.
          </p>
        </div>

        <PdfToCsvTool />

        <section className="mt-14 space-y-8">
          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Free PDF to CSV Converter
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Upload a PDF and get a clean CSV file in seconds. The Standard (free) tier uses
              pdfplumber to extract tables and structured text from digital PDFs — no sign-in
              needed, no limits, nothing uploaded to a third party.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Standard vs AI-Powered
            </h2>
            <div className="mt-3 overflow-hidden rounded-xl border text-sm">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold"></th>
                    <th className="px-4 py-2 text-left font-semibold">Standard</th>
                    <th className="px-4 py-2 text-left font-semibold">AI-Powered</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-2 text-muted-foreground">Engine</td>
                    <td className="px-4 py-2">pdfplumber</td>
                    <td className="px-4 py-2">NewTools AI</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-muted-foreground">Digital PDFs</td>
                    <td className="px-4 py-2">✓</td>
                    <td className="px-4 py-2">✓</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-muted-foreground">Scanned PDFs</td>
                    <td className="px-4 py-2">✗</td>
                    <td className="px-4 py-2">✓</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-muted-foreground">Sign-in required</td>
                    <td className="px-4 py-2">No</td>
                    <td className="px-4 py-2">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              How It Works
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Upload</strong> — drag &amp; drop or click
                to pick a PDF (up to 20 MB)
              </li>
              <li>
                <strong className="text-foreground">Choose mode</strong> — Standard for digital
                PDFs; AI-Powered for scanned or complex documents
              </li>
              <li>
                <strong className="text-foreground">Convert</strong> — click the button and wait
                a moment
              </li>
              <li>
                <strong className="text-foreground">Download</strong> — save the CSV and open it
                in Excel, Google Sheets, or any spreadsheet app
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-3 space-y-4">
              <div>
                <h3 className="text-sm font-medium">Is my PDF sent to a server?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  The Standard (free) tier sends your PDF to our backend for pdfplumber
                  processing, but we do not store it. The AI-Powered tier sends the PDF to
                  our NewTools AI backend for extraction.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">What kinds of PDFs work best?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Standard mode works best with digitally-created PDFs (exported from Word,
                  Excel, etc.) that contain actual text. For scanned documents or photos of
                  tables, use AI-Powered mode.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">What is the file size limit?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Up to 20 MB per file for both tiers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
