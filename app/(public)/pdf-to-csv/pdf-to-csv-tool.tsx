"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/components/auth/auth-provider";
import { createClient } from "@/lib/supabase/client";
import {
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  Download,
  Sparkles,
} from "lucide-react";

type Mode = "free" | "pro";
type ToolState = "idle" | "converting" | "success" | "error";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export default function PdfToCsvTool() {
  const [mode, setMode] = useState<Mode>("free");
  const [state, setState] = useState<ToolState>("idle");
  const [file, setFile] = useState<File | null>(null);
  const [csvUrl, setCsvUrl] = useState<string | null>(null);
  const [csvFilename, setCsvFilename] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [progressMessage, setProgressMessage] = useState("");
  const [progressValue, setProgressValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user, openAuthModal } = useAuth();

  function handleFile(f: File) {
    if (f.type !== "application/pdf") {
      setErrorMessage("Please upload a PDF file.");
      setState("error");
      return;
    }
    setFile(f);
    setState("idle");
    setCsvUrl(null);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }

  async function handleConvert() {
    if (!file) return;

    if (mode === "pro" && !user) {
      openAuthModal();
      return;
    }

    setState("converting");
    setErrorMessage("");
    setProgressMessage(mode === "pro" ? "Preparing upload…" : "Extracting data…");
    setProgressValue(mode === "pro" ? 5 : 0);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const headers: HeadersInit = {};
      if (mode === "pro" && user) {
        const supabase = createClient();
        const { data } = await supabase.auth.getSession();
        if (data.session?.access_token) {
          headers["Authorization"] = `Bearer ${data.session.access_token}`;
        }
      }

      if (mode === "pro") {
        // ── SSE streaming path ─────────────────────────────────
        const res = await fetch(`${API_URL}/api/pdf/convert-to-csv-pro`, {
          method: "POST",
          headers,
          body: formData,
        });

        if (!res.ok) {
          if (res.status === 401) throw new Error("Session expired. Please sign in again.");
          const err = await res.json().catch(() => ({ detail: "Conversion failed." }));
          throw new Error(err.detail || `Error ${res.status}`);
        }

        const reader = res.body!.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        outer: while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const parts = buffer.split("\n\n");
          buffer = parts.pop() ?? "";

          for (const part of parts) {
            if (!part.startsWith("data: ")) continue;
            const data = JSON.parse(part.slice(6)) as {
              stage: string;
              message?: string;
              progress?: number;
              csv?: string;
            };

            if (data.stage === "error") throw new Error(data.message ?? "Conversion failed.");

            if (data.stage === "complete") {
              const blob = new Blob([data.csv!], { type: "text/csv;charset=utf-8;" });
              if (csvUrl) URL.revokeObjectURL(csvUrl);
              setCsvUrl(URL.createObjectURL(blob));
              setCsvFilename(file.name.replace(/\.pdf$/i, ".csv"));
              setProgressValue(100);
              setState("success");
              break outer;
            }

            if (data.message) setProgressMessage(data.message);
            if (data.progress != null) setProgressValue(data.progress);
          }
        }
      } else {
        // ── Simple fetch path (free) ───────────────────────────
        const res = await fetch(`${API_URL}/api/pdf/convert-to-csv`, {
          method: "POST",
          headers,
          body: formData,
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({ detail: "Conversion failed." }));
          throw new Error(err.detail || `Error ${res.status}`);
        }

        const blob = await res.blob();
        if (csvUrl) URL.revokeObjectURL(csvUrl);
        setCsvUrl(URL.createObjectURL(blob));
        setCsvFilename(file.name.replace(/\.pdf$/i, ".csv"));
        setState("success");
      }
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : "Conversion failed.");
      setState("error");
    }
  }

  function reset() {
    if (csvUrl) URL.revokeObjectURL(csvUrl);
    setFile(null);
    setCsvUrl(null);
    setCsvFilename("");
    setErrorMessage("");
    setProgressMessage("");
    setProgressValue(0);
    setState("idle");
  }

  return (
    <div className="space-y-6">
      {/* Mode selector */}
      <div className="flex gap-2 rounded-xl border bg-muted/40 p-1">
        <button
          onClick={() => setMode("free")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            mode === "free"
              ? "bg-background shadow-sm text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Standard
          <Badge variant="secondary" className="text-xs">Free</Badge>
        </button>
        <button
          onClick={() => setMode("pro")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
            mode === "pro"
              ? "bg-background shadow-sm text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          NewTools AI
          <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs border-0">Pro</Badge>
        </button>
      </div>

      {/* Mode description */}
      <p className="text-xs text-muted-foreground text-center">
        {mode === "free"
          ? "Extracts tables and structured text from digital PDFs. Fast and free. Scanned PDFs not supported."
          : "High-accuracy extraction powered by NewTools AI. Handles tables, forms, and scanned PDFs. Requires sign-in."}
      </p>

      {/* Drop zone / file state */}
      {!file ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/30"
          }`}
        >
          <Upload className="h-8 w-8 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Drop a PDF here or click to browse</p>
            <p className="mt-1 text-xs text-muted-foreground">Max 20 MB</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
          />
        </div>
      ) : state === "success" ? (
        <Card className="flex flex-col items-center gap-4 rounded-2xl border p-8 text-center">
          <CheckCircle2 className="h-10 w-10 text-emerald-500" />
          <div>
            <p className="font-semibold">Conversion complete!</p>
            <p className="mt-1 text-sm text-muted-foreground">{csvFilename}</p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <a href={csvUrl!} download={csvFilename}>
                <Download className="mr-2 h-4 w-4" />
                Download CSV
              </a>
            </Button>
            <Button variant="outline" onClick={reset}>Convert another</Button>
          </div>
        </Card>
      ) : (
        <Card className="rounded-2xl border p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
              <FileText className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={reset} className="shrink-0">
              Remove
            </Button>
          </div>

          {state === "converting" ? (
            <div className="mt-5 space-y-2">
              <Progress
                className="h-1.5"
                value={mode === "pro" ? progressValue : undefined}
              />
              <p className="text-center text-xs text-muted-foreground">{progressMessage}</p>
            </div>
          ) : (
            <div className="mt-5">
              {state === "error" && (
                <div className="mb-4 flex items-start gap-2 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
              <Button className="w-full" onClick={handleConvert}>
                {mode === "pro" && !user ? "Sign in for NewTools AI" : "Convert to CSV"}
              </Button>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
