/**
 * Linklytics Case Study Modal
 * Micro-SaaS style: Problem → Solution, tech stack, secure data handling
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Shield, Zap, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LinklyticsCaseStudyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DEMO_URL = "https://linklytics-mu.vercel.app/";

export function LinklyticsCaseStudy({ open, onOpenChange }: LinklyticsCaseStudyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyDemoUrl = async () => {
    try {
      await navigator.clipboard.writeText(DEMO_URL);
      setCopied(true);
      toast.success("Copied! Link is in your clipboard.");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={true}
        className="brutalist-border bg-card p-0 gap-0 max-w-2xl max-h-[90vh] overflow-y-auto rounded-none data-[state=open]:[animation-duration:350ms]"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="p-8 space-y-8"
        >
              {/* Header with screenshot */}
              <div className="space-y-4">
                <div className="brutalist-border overflow-hidden -mx-8 -mt-8">
                  <img
                    src="/linklytics-screenshot.png"
                    alt="Linklytics dashboard"
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                  />
                </div>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-black font-display">
                    Linklytics
                  </DialogTitle>
                  <p className="font-mono text-sm text-muted-foreground">
                    Smart link shortener with powerful analytics • Supabase • Drizzle • Vite
                  </p>
                </DialogHeader>
              </div>

              {/* Problem / Solution */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="brutalist-border bg-muted/30 p-6 space-y-3">
                  <h3 className="font-mono text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    The Problem
                  </h3>
                  <p className="font-mono text-sm text-foreground leading-relaxed">
                    Marketers and creators need to track link performance without losing data ownership or compromising user privacy. Generic analytics tools are either too complex or require third-party scripts that slow down pages.
                  </p>
                </div>
                <div className="brutalist-border bg-[var(--lime)]/10 p-6 space-y-3 dark:bg-[var(--lime)]/5">
                  <h3 className="font-mono text-sm font-semibold text-foreground uppercase tracking-wider">
                    The Solution
                  </h3>
                  <p className="font-mono text-sm text-foreground leading-relaxed">
                    A self-contained platform: create branded short links, track clicks in real-time, and get AI-powered insights—all with your data stored securely in your own Supabase project.
                  </p>
                </div>
              </div>

              {/* Secure Data Handling */}
              <div className="space-y-4">
                <h3 className="font-mono text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Secure Data Architecture
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex gap-4 p-4 brutalist-border bg-card">
                    <div className="shrink-0 brutalist-border bg-[var(--lime)] p-3">
                      <Database className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-mono font-semibold mb-1">Drizzle ORM</h4>
                      <p className="font-mono text-sm text-muted-foreground">
                        Type-safe queries, migrations, and schema validation. No raw SQL sprawl—everything is version-controlled and auditable.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 brutalist-border bg-card">
                    <div className="shrink-0 brutalist-border bg-[var(--lime)] p-3">
                      <Shield className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-mono font-semibold mb-1">Supabase</h4>
                      <p className="font-mono text-sm text-muted-foreground">
                        Row-level security, OAuth, and encrypted Postgres. Your analytics data stays in your tenant—no middleman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="font-mono text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Key Features
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {["Real-time click tracking", "OAuth integration", "Custom dashboard", "AI-powered insights", "Geographic heatmaps", "Branded short links"].map((feature) => (
                    <li
                      key={feature}
                      className="inline-block brutalist-border bg-muted px-3 py-1.5 font-mono text-sm"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  onClick={handleCopyDemoUrl}
                  className="brutalist-border bg-card hover:bg-muted font-mono font-semibold py-6 flex-1 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-5 w-5 text-emerald-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-5 w-5" />
                      Copy Demo URL
                    </>
                  )}
                </Button>
                <Button
                  className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold py-6 flex-1 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  asChild
                >
                  <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                    <Zap className="mr-2 h-5 w-5" />
                    Visit Live Site
                  </a>
                </Button>
              </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
