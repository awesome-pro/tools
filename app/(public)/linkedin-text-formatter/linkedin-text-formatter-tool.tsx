"use client";

import { useState, useCallback, useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Copy,
  Trash2,
  ClipboardPaste,
  Check,
} from "lucide-react";
import { formatText, type FormatType } from "@/lib/text-formatter";

const formats: { value: FormatType; label: string; preview: string }[] = [
  { value: "bold", label: "Bold", preview: "𝗕𝗼𝗹𝗱" },
  { value: "italic", label: "Italic", preview: "𝘐𝘵𝘢𝘭𝘪𝘤" },
  { value: "boldItalic", label: "Bold Italic", preview: "𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘" },
  { value: "underline", label: "Underline", preview: "U̲n̲d̲e̲r̲l̲i̲n̲e̲" },
  { value: "strikethrough", label: "Strikethrough", preview: "S̶t̶r̶i̶k̶e̶" },
  { value: "monospace", label: "Monospace", preview: "𝙼𝚘𝚗𝚘" },
];

export default function LinkedInTextFormatterTool() {
  const [input, setInput] = useState("");
  const [selectedFormat, setSelectedFormat] = useState<FormatType>("bold");
  const [copied, setCopied] = useState(false);

  const formattedText = useMemo(
    () => (input ? formatText(input, selectedFormat) : ""),
    [input, selectedFormat]
  );

  const handleCopy = useCallback(async () => {
    if (!formattedText) return;
    await navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [formattedText]);

  const handlePaste = useCallback(async () => {
    const clipText = await navigator.clipboard.readText();
    setInput((prev) => prev + clipText);
  }, []);

  const handleClear = useCallback(() => {
    setInput("");
    setCopied(false);
  }, []);

  return (
    <section className="min-h-screen">
      {/* Format selector */}
      <div className="mb-4">
        <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Choose style
        </label>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {formats.map((fmt) => (
            <button
              key={fmt.value}
              onClick={() => setSelectedFormat(fmt.value)}
              className={`flex flex-col items-center gap-1 rounded-xl border px-3 py-3 text-center transition-all ${
                selectedFormat === fmt.value
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border bg-card hover:border-primary/30 hover:bg-accent/50"
              }`}
            >
              <span className="text-base leading-none">{fmt.preview}</span>
              <span className="text-[10px]">
                {fmt.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Input / Output panels */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Input */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Your text
          </label>
          <Textarea
            placeholder="Type or paste your text here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-[260px] resize-y text-sm leading-relaxed"
            autoFocus
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Formatted output
          </label>
          <Textarea
            placeholder="Formatted text will appear here..."
            value={formattedText}
            readOnly
            className="h-[260px] resize-y text-sm leading-relaxed"
            spellCheck={false}
          />
        </div>
      </div>

      {/* Live preview card */}
      {formattedText && (
        <Card className="mt-4 rounded-xl border p-4">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Preview — how it looks on LinkedIn
          </label>
          <p className="whitespace-pre-wrap wrap-break-word text-sm leading-relaxed">
            {formattedText}
          </p>
        </Card>
      )}

      {/* Action buttons */}
      <div className="mt-4 flex w-full gap-1">
        <Button variant="outline" onClick={handlePaste} className="w-1/3">
          <ClipboardPaste className="h-3.5 w-3.5" />
          Paste
        </Button>
        <Button
          onClick={handleCopy}
          disabled={!formattedText}
          className="w-1/3"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </Button>
        <Button
          variant="destructive"
          onClick={handleClear}
          disabled={!input}
          className="w-1/3"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Clear
        </Button>
      </div>
    </section>
  );
}
