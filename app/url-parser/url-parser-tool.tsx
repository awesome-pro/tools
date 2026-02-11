"use client";

import { useState, useCallback, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Copy,
  Trash2,
  ClipboardPaste,
  Check,
  AlertCircle,
  WrapText,
} from "lucide-react";

interface ParsedUrl {
  protocol: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  origin: string;
  username: string;
  password: string;
  queryParams: [string, string][];
}

function parseUrl(raw: string): { data: ParsedUrl | null; error: string } {
  if (!raw.trim()) return { data: null, error: "" };

  try {
    const url = new URL(raw);
    return {
      data: {
        protocol: url.protocol,
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
        search: url.search,
        hash: url.hash,
        origin: url.origin,
        username: url.username,
        password: url.password,
        queryParams: Array.from(url.searchParams.entries()),
      },
      error: "",
    };
  } catch {
    return { data: null, error: "Invalid URL" };
  }
}

function FieldRow({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }, [value]);

  if (!value) return null;

  return (
    <div className="flex items-start justify-between gap-3 py-2.5">
      <div className="min-w-0 flex-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
        <p
          className={`mt-0.5 break-all text-sm ${
            mono ? "font-mono" : ""
          }`}
        >
          {value}
        </p>
      </div>
      <Button
        variant="ghost"
        size="icon-xs"
        onClick={handleCopy}
        className="mt-3 shrink-0"
      >
        {copied ? (
          <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
        ) : (
          <Copy className="h-3 w-3" />
        )}
      </Button>
    </div>
  );
}

export default function UrlParserTool() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const { data, error } = useMemo(() => parseUrl(input), [input]);

  const handlePaste = useCallback(async () => {
    const clipText = await navigator.clipboard.readText();
    setInput(clipText);
  }, []);

  const handleClear = useCallback(() => {
    setInput("");
  }, []);

  const handleSample = useCallback(() => {
    setInput(
      "https://user:pass@www.example.com:8080/path/to/page?name=John&age=30&city=New+York#section-2"
    );
  }, []);

  const handleCopyAll = useCallback(async () => {
    if (!data) return;
    const lines = [
      `Protocol: ${data.protocol}`,
      `Origin: ${data.origin}`,
      `Hostname: ${data.hostname}`,
      data.port ? `Port: ${data.port}` : "",
      data.username ? `Username: ${data.username}` : "",
      data.password ? `Password: ${data.password}` : "",
      `Path: ${data.pathname}`,
      data.search ? `Query String: ${data.search}` : "",
      data.hash ? `Hash: ${data.hash}` : "",
      data.queryParams.length > 0
        ? `\nQuery Parameters:\n${data.queryParams
            .map(([k, v]) => `  ${k} = ${v}`)
            .join("\n")}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");
    await navigator.clipboard.writeText(lines);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [data]);

  return (
    <section className="min-h-screen">
      {/* Input */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Paste a URL here, e.g. https://example.com/path?key=value#hash"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="h-12 pr-10 font-mono text-sm"
          autoFocus
          spellCheck={false}
        />
        {input && !error && data && (
          <Check className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-600 dark:text-emerald-400" />
        )}
        {error && (
          <AlertCircle className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-destructive" />
        )}
      </div>

      {/* Status */}
      {error && (
        <p className="mt-2 flex items-center gap-1 text-xs text-destructive">
          <AlertCircle className="h-3 w-3" />
          {error} — make sure the URL includes a protocol (e.g. https://)
        </p>
      )}

      {/* Action buttons */}
      <div className="mt-3 flex w-full gap-1">
        <Button variant="outline" onClick={handlePaste} className="w-1/4">
          <ClipboardPaste className="h-3.5 w-3.5" />
          Paste
        </Button>
        <Button variant="outline" onClick={handleSample} className="w-1/4">
          <WrapText className="h-3.5 w-3.5" />
          Sample
        </Button>
        <Button onClick={handleCopyAll} disabled={!data} className="w-1/4">
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Copied!" : "Copy All"}
        </Button>
        <Button
          variant="destructive"
          onClick={handleClear}
          disabled={!input}
          className="w-1/4"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Clear
        </Button>
      </div>

      {/* Parsed results */}
      {data && (
        <div className="mt-6 space-y-4">
          {/* Main fields */}
          <Card className="divide-y rounded-xl border px-5 py-0">
            <FieldRow label="Protocol" value={data.protocol} mono />
            <FieldRow label="Origin" value={data.origin} mono />
            <FieldRow label="Hostname" value={data.hostname} mono />
            {data.port && <FieldRow label="Port" value={data.port} mono />}
            {data.username && (
              <FieldRow label="Username" value={data.username} mono />
            )}
            {data.password && (
              <FieldRow label="Password" value={data.password} mono />
            )}
            <FieldRow label="Path" value={data.pathname} mono />
            {data.search && (
              <FieldRow label="Query String" value={data.search} mono />
            )}
            {data.hash && <FieldRow label="Hash / Fragment" value={data.hash} mono />}
          </Card>

          {/* Query parameters */}
          {data.queryParams.length > 0 && (
            <div>
              <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Query Parameters
              </h3>
              <Card className="divide-y rounded-xl border px-5 py-0">
                {data.queryParams.map(([key, value], i) => (
                  <div
                    key={`${key}-${i}`}
                    className="flex items-center justify-between gap-3 py-2.5"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-sm font-medium">
                        {key}
                      </span>
                      <span className="mx-2 text-muted-foreground">=</span>
                      <span className="break-all font-mono text-sm text-muted-foreground">
                        {value}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      onClick={async () => {
                        await navigator.clipboard.writeText(value);
                      }}
                      className="shrink-0"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </Card>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
