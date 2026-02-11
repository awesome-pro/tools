"use client";

import { useState, useMemo, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Trash2,
  ClipboardPaste,
  Type,
  FileText,
  AlignLeft,
  Pilcrow,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";

function analyzeText(text: string) {
  const trimmed = text.trim();

  if (!trimmed) {
    return {
      characters: 0,
      charactersNoSpaces: 0,
      words: 0,
      sentences: 0,
      paragraphs: 0,
      readingTime: "0 sec",
    };
  }

  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const words = trimmed.split(/\s+/).filter(Boolean).length;
  const sentences = trimmed
    .split(/[.!?]+/)
    .filter((s) => s.trim().length > 0).length;
  const paragraphs = trimmed
    .split(/\n\s*\n/)
    .filter((p) => p.trim().length > 0).length;

  const minutes = Math.floor(words / 200);
  const seconds = Math.round((words % 200) / (200 / 60));
  let readingTime = "";
  if (minutes > 0) readingTime += `${minutes} min `;
  if (seconds > 0 || minutes === 0) readingTime += `${seconds} sec`;

  return {
    characters,
    charactersNoSpaces,
    words,
    sentences,
    paragraphs,
    readingTime: readingTime.trim(),
  };
}

export default function WordCounterTool() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => analyzeText(text), [text]);

  const handleCopy = useCallback(async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [text]);

  const handlePaste = useCallback(async () => {
    const clipText = await navigator.clipboard.readText();
    setText((prev) => prev + clipText);
  }, []);

  const handleClear = useCallback(() => {
    setText("");
  }, []);

  const statCards = [
    { label: "Words", value: stats.words, icon: FileText },
    { label: "Characters", value: stats.characters, icon: Type },
    { label: "Sentences", value: stats.sentences, icon: AlignLeft },
    { label: "Paragraphs", value: stats.paragraphs, icon: Pilcrow },
  ];

  return (
    <section className="min-h-screen">
      {/* Stat Cards */}
      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {statCards.map(({ label, value, icon: Icon }) => (
          <Card
            key={label}
            className="flex flex-col items-center gap-1 rounded-xl border bg-card p-4 shadow-sm transition-colors"
          >
            <Icon className="h-4 w-4 text-muted-foreground" />
            <span className="text-2xl md:text-5xl font-semibold tabular-nums">
              {value}
            </span>
            <span className="text-xs text-muted-foreground">{label}</span>
          </Card>
        ))}
      </div>

      {/* Secondary stats row */}
      <div className="mb-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          Reading time: <strong className="text-foreground">{stats.readingTime}</strong>
        </span>
        <span>
          Characters (no spaces):{" "}
          <strong className="text-foreground">{stats.charactersNoSpaces}</strong>
        </span>
      </div>

      {/* Textarea */}
      <Textarea
        placeholder="Start typing or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="h-[370px] resize-y text-base leading-relaxed sm:text-base"
        autoFocus
      />

      {/* Action buttons */}
      <div className="mt-4 flex w-full gap-1">
        <Button
          variant="outline"
          onClick={handlePaste}
          className="w-1/3"
        >
          <ClipboardPaste className="h-3.5 w-3.5" />
          Paste
        </Button>
        <Button
          onClick={handleCopy}
          disabled={!text}
          className="w-1/3"
        >
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Copied!" : "Copy"}
        </Button>
        <Button
          variant="destructive"
          onClick={handleClear}
          disabled={!text}
          className="w-1/3"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Clear
        </Button>
      </div>
    </section>
  );
}
