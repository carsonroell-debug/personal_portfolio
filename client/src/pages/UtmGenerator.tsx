/**
 * UTM Link Generator Product Page
 * Neo-Brutalist design matching homepage aesthetic
 * Sections: Hero, Problem, Who It's For, Use Cases, How It Works, CTA
 */

import { Button } from "@/components/ui/button";
import { ExternalLink, Target, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function UtmGenerator() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Simple Header */}
      <header className="border-b-4 border-white py-6">
        <div className="container">
          <Link href="/">
            <a className="inline-block brutalist-border bg-[var(--lime)] px-4 py-2 font-mono text-sm font-black text-black hover:translate-x-1 hover:translate-y-1 transition-transform">
              ← BACK TO HOME
            </a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 border-b-4 border-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block brutalist-border bg-[var(--lime)] px-6 py-3">
              <span className="font-mono text-sm font-black text-black uppercase tracking-wider">
                Free Marketing Utility
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
              UTM LINK<br />
              <span className="text-[var(--lime)]">GENERATOR</span>
            </h1>

            <p className="text-2xl font-mono text-muted-foreground max-w-2xl mx-auto">
              Generate clean, trackable marketing links in seconds.
            </p>

            <Button
              asChild
              size="lg"
              className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-lg px-8 py-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <a href="https://utm-qr-builder.vercel.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-6 w-6" />
                Open the Tool
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 border-b-4 border-white bg-muted/10">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                THE <span className="text-[var(--lime)]">PROBLEM</span>
              </h2>
            </div>

            <div className="brutalist-border bg-card p-8 space-y-6">
              <p className="font-mono text-lg text-muted-foreground leading-relaxed">
                Building UTM links manually is <span className="text-[var(--lime)] font-semibold">slow</span>, <span className="text-[var(--lime)] font-semibold">messy</span>, and <span className="text-[var(--lime)] font-semibold">error-prone</span>.
              </p>
              
              <p className="font-mono text-lg text-muted-foreground leading-relaxed">
                You're juggling campaign names, sources, mediums, and parameters—all while trying to keep your links clean and your tracking consistent.
              </p>

              <p className="font-mono text-lg text-muted-foreground leading-relaxed">
                This tool fixes that. It's a fast utility for marketers and builders who need clean tracking links without the headache.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-32 border-b-4 border-white">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                WHO IT'S <span className="text-[var(--lime)]">FOR</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Target, label: "Marketers" },
                { icon: Zap, label: "Indie hackers" },
                { icon: Users, label: "Founders" },
                { icon: ArrowRight, label: "Content creators" },
              ].map((item, index) => (
                <div key={index} className="brutalist-border bg-card p-6 flex items-center gap-4">
                  <div className="brutalist-border bg-[var(--lime)] p-3">
                    <item.icon className="h-6 w-6 text-black" />
                  </div>
                  <span className="font-mono text-xl font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 border-b-4 border-white bg-muted/10">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                USE <span className="text-[var(--lime)]">CASES</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                "Social media campaigns",
                "Email marketing",
                "Paid ads",
                "Affiliate tracking",
              ].map((useCase, index) => (
                <div key={index} className="brutalist-border bg-card p-6 flex items-center gap-4">
                  <div className="brutalist-border bg-muted px-4 py-2">
                    <span className="font-mono text-sm font-black text-muted-foreground">0{index + 1}</span>
                  </div>
                  <span className="font-mono text-lg">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 border-b-4 border-white">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                HOW IT <span className="text-[var(--lime)]">WORKS</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { step: "01", title: "Enter your URL", description: "Paste the link you want to track" },
                { step: "02", title: "Add campaign parameters", description: "Fill in source, medium, and campaign name" },
                { step: "03", title: "Copy your clean tracking link", description: "Get a formatted UTM link ready to use" },
              ].map((item, index) => (
                <div key={index} className="brutalist-border brutalist-shadow-lime bg-card p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="brutalist-border bg-[var(--lime)] px-6 py-3">
                      <span className="font-mono text-2xl font-black text-black">{item.step}</span>
                    </div>
                    <h3 className="text-2xl font-black">{item.title}</h3>
                  </div>
                  <p className="font-mono text-muted-foreground pl-20">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-5xl sm:text-6xl font-black">
              READY TO <span className="text-[var(--lime)]">START?</span>
            </h2>

            <Button
              asChild
              size="lg"
              className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-lg px-8 py-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <a href="https://utm-qr-builder.vercel.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-6 w-6" />
                Open the UTM Generator
              </a>
            </Button>

            <p className="font-mono text-sm text-muted-foreground">
              Follow the build to get updates when new tools launch.{" "}
              <Link href="/#newsletter">
                <a className="text-[var(--lime)] font-semibold hover:underline">
                  Join the list →
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-white py-8">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-sm text-muted-foreground">
              © 2026 Indie Builder. Built in public.
            </p>
            <Link href="/">
              <a className="font-mono text-sm text-[var(--lime)] hover:underline">
                ← Back to all products
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
