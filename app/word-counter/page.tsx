import WordCounterTool from "./word-counter-tool";

export default function WordCounterPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-14">
        {/* Header — SSR */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Word Counter
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Paste or type your text below to get instant stats.
          </p>
        </div>

        {/* Interactive Tool — Client Component */}
        <WordCounterTool />

        {/* SEO Content Section — SSR */}
        <section className="mt-14 space-y-8">
          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Free Online Word Counter
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              NewTools&apos;s word counter is a free, instant tool that counts
              words, characters, sentences, paragraphs, and estimates reading
              time as you type. No ads, no sign-up, no distractions — just
              paste your text and get results immediately. Perfect for
              students, writers, bloggers, and anyone who needs a quick and
              accurate word count.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              What This Tool Counts
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Words</strong> — total
                number of words in your text
              </li>
              <li>
                <strong className="text-foreground">Characters</strong> —
                total characters including spaces
              </li>
              <li>
                <strong className="text-foreground">
                  Characters (no spaces)
                </strong>{" "}
                — characters excluding all whitespace
              </li>
              <li>
                <strong className="text-foreground">Sentences</strong> —
                counted by periods, exclamation marks, and question marks
              </li>
              <li>
                <strong className="text-foreground">Paragraphs</strong> —
                blocks of text separated by blank lines
              </li>
              <li>
                <strong className="text-foreground">Reading time</strong> —
                estimated at 200 words per minute
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
                  How does the word counter work?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Simply paste or type your text into the text area above. The
                  tool instantly counts words, characters, sentences,
                  paragraphs, and estimates reading time in real-time — no
                  button clicks needed.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Is this word counter free to use?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes, this word counter is completely free with no ads, no
                  sign-up, and no limits. Use it as many times as you want.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  How is reading time calculated?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Reading time is estimated based on an average reading speed
                  of 200 words per minute, which is the standard for adult
                  readers.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Does this tool work on mobile?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes. The word counter is fully responsive and works on any
                  device — phone, tablet, or desktop.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}