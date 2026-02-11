"use client";

import { useState, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Trash2,
  ClipboardPaste,
  WrapText,
  Minimize2,
  Check,
  AlertCircle,
} from "lucide-react";

export default function JsonFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [indentSize, setIndentSize] = useState(2);

  const formatJson = useCallback(
    (raw: string, spaces: number) => {
      if (!raw.trim()) {
        setOutput("");
        setError("");
        return;
      }
      try {
        const parsed = JSON.parse(raw);
        setOutput(JSON.stringify(parsed, null, spaces));
        setError("");
      } catch (e) {
        const msg = e instanceof SyntaxError ? e.message : "Invalid JSON";
        setError(msg);
        setOutput("");
      }
    },
    []
  );

  const handleInputChange = useCallback(
    (value: string) => {
      setInput(value);
      formatJson(value, indentSize);
    },
    [formatJson, indentSize]
  );

  const handleIndentChange = useCallback(
    (size: number) => {
      setIndentSize(size);
      formatJson(input, size);
    },
    [formatJson, input]
  );

  const handleMinify = useCallback(() => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      const msg = e instanceof SyntaxError ? e.message : "Invalid JSON";
      setError(msg);
      setOutput("");
    }
  }, [input]);

  const handleCopyOutput = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  const handlePaste = useCallback(async () => {
    const clipText = await navigator.clipboard.readText();
    const newValue = input + clipText;
    setInput(newValue);
    formatJson(newValue, indentSize);
  }, [input, formatJson, indentSize]);

  const handleClear = useCallback(() => {
    setInput("");
    setOutput("");
    setError("");
  }, []);

  const handleSample = useCallback(() => {
    const sample = JSON.stringify(
      {
        name: "Abhinandan",
        age: 20,
        email: "abhinandan@newtools.space",
        address: {
          street: "Sector 62",
          city: "Noida",
          country: "India",
        },
        hobbies: ["reading", "coding", "hiking"],
        active: true,
      }
    );
    setInput(sample);
    formatJson(sample, indentSize);
  }, [formatJson, indentSize]);

  return (
    <section className="min-h-screen">
      {/* Controls row */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span>Indent:</span>
          {[2, 4].map((size) => (
            <Button
              key={size}
              variant={indentSize === size ? "default" : "outline"}
              size="xs"
              onClick={() => handleIndentChange(size)}
            >
              {size}
            </Button>
          ))}
        </div>
        <Button variant="outline" size="xs" onClick={handleMinify} disabled={!input.trim()} className="gap-1">
          <Minimize2 className="h-3 w-3" />
          Minify
        </Button>
        <Button variant="outline" size="xs" onClick={handleSample} className="gap-1">
          <WrapText className="h-3 w-3" />
          Sample
        </Button>
      </div>

      {/* Editor panels */}
      <div className="grid gap-3 lg:grid-cols-2">
        {/* Input */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Input
          </label>
          <Textarea
            placeholder='Paste your JSON here, e.g. {"key": "value"}'
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            className="h-[420px] resize-y font-mono text-sm leading-relaxed"
            autoFocus
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Output
            </label>
            {error && (
              <span className="flex items-center gap-1 text-xs text-destructive">
                <AlertCircle className="h-3 w-3" />
                Invalid JSON
              </span>
            )}
            {output && !error && (
              <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                <Check className="h-3 w-3" />
                Valid JSON
              </span>
            )}
          </div>
          <Textarea
            placeholder="Formatted JSON will appear here..."
            value={error ? error : output}
            readOnly
            className={`h-[420px] resize-y font-mono text-sm leading-relaxed ${
              error ? "text-destructive" : ""
            }`}
            spellCheck={false}
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex w-full gap-1">
        <Button variant="outline" onClick={handlePaste} className="w-1/3">
          <ClipboardPaste className="h-3.5 w-3.5" />
          Paste
        </Button>
        <Button onClick={handleCopyOutput} disabled={!output} className="w-1/3">
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Copied!" : "Copy Output"}
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
