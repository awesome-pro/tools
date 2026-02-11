import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Braces,
  Link2,
  CircleDashed,
  ArrowRight,
  Zap,
  ShieldCheck,
  MonitorSmartphone,
  Globe,
  MousePointerClick,
  Download,
} from "lucide-react";
import CTA from "@/components/cta";
import Hero from "@/components/hero";

const tools = [
  {
    name: "Word Counter",
    description:
      "Count words, characters, sentences, paragraphs and estimate reading time.",
    href: "/word-counter",
    icon: FileText,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    name: "JSON Formatter",
    description:
      "Format, validate and minify JSON with real-time error detection.",
    href: "/json-formatter",
    icon: Braces,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    name: "URL Parser",
    description:
      "Break any URL into protocol, host, path, query params and more.",
    href: "/url-parser",
    icon: Link2,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    name: "Circular Crop",
    description:
      "Upload an image and crop it into a perfect circle with transparent background.",
    href: "/circular-crop",
    icon: CircleDashed,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/10",
  },
];

const steps = [
  {
    step: "1",
    icon: MousePointerClick,
    title: "Pick a tool",
    description: "Choose from our growing collection of free utilities.",
  },
  {
    step: "2",
    icon: Zap,
    title: "Use it instantly",
    description: "Paste, type, or upload — get results in real-time.",
  },
  {
    step: "3",
    icon: Download,
    title: "Copy or download",
    description: "Grab your result with one click. Done.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Every tool runs in real-time right in your browser. No loading spinners, no server round-trips.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Secure",
    description:
      "Your data never leaves your device. No uploads, no tracking, no cookies. Just tools.",
  },
  {
    icon: MonitorSmartphone,
    title: "Works Everywhere",
    description:
      "Fully responsive and touch-friendly. Desktop, tablet, or phone — same great experience.",
  },
  {
    icon: Globe,
    title: "No Sign-up Required",
    description:
      "No accounts, no paywalls, no limits. Open a tool and start using it immediately.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Tools Grid */}
      <section
        id="tools"
        className="border-t bg-muted/30 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Tools
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Pick a tool and get your result in seconds.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {tools.map(({ name, description, href, icon: Icon, color, bg }) => (
              <Link key={href} href={href} className="group">
                <Card className="flex h-full flex-col justify-between gap-4 rounded-2xl border p-6 shadow-sm transition-all duration-200 group-hover:border-primary/20 group-hover:shadow-md group-hover:-translate-y-0.5">
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${bg}`}
                      >
                        <Icon className={`h-5 w-5 ${color}`} />
                      </div>
                      <h3 className="text-base font-semibold">{name}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Open tool
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              How It Works
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Three steps. No friction.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map(({ step, icon: Icon, title, description }) => (
              <div key={step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Step {step}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NewTools */}
      <section className="border-t bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Why NewTools?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Built different. Built better.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border bg-background p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
