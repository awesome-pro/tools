import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  FileText,
  Zap,
  ShieldOff,
  ArrowRight,
  MonitorSmartphone,
} from "lucide-react";

const tools = [
  {
    name: "Word Counter",
    description:
      "Count words, characters, sentences, paragraphs and estimate reading time — instantly.",
    href: "/word-counter",
    icon: FileText,
  },
];

const values = [
  {
    icon: Zap,
    title: "Instant Results",
    description: "Every tool works in real-time. No loading, no waiting.",
  },
  {
    icon: ShieldOff,
    title: "No Ads. No Clutter.",
    description: "Just the tool you need. Nothing else in the way.",
  },
  {
    icon: MonitorSmartphone,
    title: "Works Everywhere",
    description: "Fully responsive. Desktop, tablet, or phone.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pt-20 pb-16 text-center sm:pt-28 sm:pb-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Online tools,
          <br />
          <span className="text-muted-foreground">without the noise.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
          Free, fast, and ad-free utilities built for people who just want to
          get things done.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="gap-2">
            <Link href="#tools">
              Browse Tools
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl" />

      {/* Tools Grid */}
      <section
        id="tools"
        className="mx-auto max-w-3xl px-4 py-16 sm:py-20"
      >
        <h2 className="text-center text-lg font-semibold tracking-tight sm:text-xl">
          Tools
        </h2>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Pick a tool and get your result in seconds.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {tools.map(({ name, description, href, icon: Icon }) => (
            <Link key={href} href={href} className="group">
              <Card className="flex h-full flex-col gap-3 rounded-xl border p-5 shadow-sm transition-colors group-hover:border-primary/30 group-hover:bg-accent/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-medium">{name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl" />

      {/* Value Props */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <h2 className="text-center text-lg font-semibold tracking-tight sm:text-xl">
          Why NewTools?
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-sm font-medium">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl" />

      {/* Footer */}
      <footer className="mx-auto max-w-3xl px-4 py-10 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} NewTools &mdash; Free tools, no
          nonsense.
        </p>
      </footer>
    </div>
  );
}
