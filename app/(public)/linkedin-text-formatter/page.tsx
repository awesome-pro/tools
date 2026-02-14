import LinkedInTextFormatterTool from "./linkedin-text-formatter-tool";

export default function LinkedInTextFormatterPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:py-14">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight sm:text-3xl">
            LinkedIn Text Formatter
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Format your text with bold, italic, underline &amp; more — then
            paste it straight into LinkedIn.
          </p>
        </div>

        <LinkedInTextFormatterTool />

        <section className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Free LinkedIn Text Formatter — Bold, Italic, Underline &amp; More
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              LinkedIn doesn&apos;t support rich text formatting in posts and
              comments. This tool uses special Unicode characters to let you
              write in <strong className="text-foreground">𝗯𝗼𝗹𝗱</strong>,{" "}
              <strong className="text-foreground">𝘪𝘵𝘢𝘭𝘪𝘤</strong>,{" "}
              <strong className="text-foreground">𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘</strong>,{" "}
              <strong className="text-foreground">U̲n̲d̲e̲r̲l̲i̲n̲e̲</strong>,{" "}
              <strong className="text-foreground">S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶</strong>,
              and{" "}
              <strong className="text-foreground">𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎</strong> — then
              copy and paste directly into any LinkedIn post, comment, or
              message. No ads, no sign-up, completely free.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              How to Use
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Choose a style</strong> —
                pick from Bold, Italic, Bold Italic, Underline, Strikethrough,
                or Monospace
              </li>
              <li>
                <strong className="text-foreground">Type or paste</strong> —
                enter your text in the input area
              </li>
              <li>
                <strong className="text-foreground">See the result</strong> —
                formatted text appears instantly on the right
              </li>
              <li>
                <strong className="text-foreground">Preview</strong> — see
                exactly how it will look on LinkedIn
              </li>
              <li>
                <strong className="text-foreground">Copy &amp; paste</strong> —
                one click to copy, then paste into LinkedIn
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Supported Formatting Styles
            </h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border p-3">
                <p className="text-sm font-medium">𝗕𝗼𝗹𝗱</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Make your text stand out in LinkedIn posts and headlines.
                </p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-sm font-medium">𝘐𝘵𝘢𝘭𝘪𝘤</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Add emphasis or highlight quotes and key phrases.
                </p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-sm font-medium">𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Combine bold and italic for maximum emphasis.
                </p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-sm font-medium">U̲n̲d̲e̲r̲l̲i̲n̲e̲</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Draw attention to important words or links.
                </p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-sm font-medium">S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Show corrections or create a dramatic effect.
                </p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-sm font-medium">𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Perfect for code snippets or technical terms.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-3 space-y-4">
              <div>
                <h3 className="text-sm font-medium">
                  How does LinkedIn text formatting work?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  LinkedIn doesn&apos;t support native rich text in posts and
                  comments. This tool converts your regular text into special
                  Unicode characters that look like bold, italic, underline, etc.
                  These characters are part of the Unicode standard and display
                  correctly on all devices and platforms.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Will this work on LinkedIn posts, comments, and messages?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes. The formatted text uses Unicode characters that work
                  everywhere text is accepted — LinkedIn posts, comments,
                  messages, and even your profile headline and summary.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Does this work on other platforms too?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes. The Unicode formatted text works on Twitter/X, Facebook,
                  Instagram bios, WhatsApp, Telegram, and any platform that
                  supports Unicode text.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Is this LinkedIn text formatter free?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Completely free. No ads, no sign-up, no limits. Use it as
                  often as you need.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Is there a Chrome extension?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes! We also offer a free Chrome extension that lets you
                  format text directly while writing on LinkedIn — without
                  leaving the page.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}