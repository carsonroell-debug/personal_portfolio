/**
 * JobUpdate Product Page
 * Neo-Brutalist design with early-stage SaaS positioning
 * Sections: Hero, Problem, Who It's For, How It Works, Early Access, CTA
 */

import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Upload, Bell } from "lucide-react";
import { Link } from "wouter";

export default function JobUpdate() {
  const scrollToContact = () => {
    // Scroll to contact form on homepage
    window.location.href = "/#contact";
  };

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
            <div className="inline-block brutalist-border bg-muted px-6 py-3">
              <span className="font-mono text-sm font-black text-muted-foreground uppercase tracking-wider">
                Early Access Project
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
              JOB<span className="text-[var(--lime)]">UPDATE</span>
            </h1>

            <p className="text-2xl font-mono text-muted-foreground max-w-2xl mx-auto">
              Client updates without the constant texts.
            </p>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-lg px-8 py-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <Bell className="mr-2 h-6 w-6" />
              Join Early Access
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
                Contractors are drowning in update requests. Every client wants to know:
              </p>
              
              <div className="space-y-3 pl-6">
                <p className="font-mono text-lg text-[var(--lime)] font-semibold">
                  "Any updates?"
                </p>
                <p className="font-mono text-lg text-[var(--lime)] font-semibold">
                  "Did you finish?"
                </p>
                <p className="font-mono text-lg text-[var(--lime)] font-semibold">
                  "Can you send photos?"
                </p>
              </div>

              <p className="font-mono text-lg text-muted-foreground leading-relaxed">
                Phone chaos = lost time. Texts get buried. Photos get lost. Updates get repeated.
              </p>

              <p className="font-mono text-lg text-muted-foreground leading-relaxed">
                JobUpdate fixes this. One place for job photos, progress updates, and client communication.
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
                { icon: Users, label: "Painters" },
                { icon: Users, label: "Contractors" },
                { icon: Users, label: "Small crews" },
                { icon: Users, label: "Home service businesses" },
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

      {/* How It Works Section */}
      <section className="py-32 border-b-4 border-white bg-muted/10">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                HOW IT <span className="text-[var(--lime)]">WORKS</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { 
                  step: "01", 
                  icon: Upload,
                  title: "Upload job photos once", 
                  description: "Take photos on-site and upload them to the job page" 
                },
                { 
                  step: "02", 
                  icon: Bell,
                  title: "Client sees progress automatically", 
                  description: "They get notified and can view updates anytime" 
                },
                { 
                  step: "03", 
                  icon: MessageSquare,
                  title: "Replies stay organized", 
                  description: "All communication in one place, no more text chaos" 
                },
              ].map((item, index) => (
                <div key={index} className="brutalist-border brutalist-shadow-lime bg-card p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="brutalist-border bg-[var(--lime)] px-6 py-3">
                      <span className="font-mono text-2xl font-black text-black">{item.step}</span>
                    </div>
                    <div className="brutalist-border bg-muted p-3">
                      <item.icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-black flex-1">{item.title}</h3>
                  </div>
                  <p className="font-mono text-muted-foreground pl-32">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Mockups Section */}
      <section className="py-32 border-b-4 border-white">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Mockup 1: Contractor Dashboard */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-4xl sm:text-5xl font-black mb-4">
                  UPLOAD JOB UPDATES IN <span className="text-[var(--lime)]">SECONDS</span>
                </h3>
              </div>
              <div className="brutalist-border brutalist-shadow-lime bg-card p-4 sm:p-8">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663254494827/IejiyXXmRfllKLsJ.png"
                  alt="JobUpdate contractor dashboard showing job photo upload interface"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* Mockup 2: Client View */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-4xl sm:text-5xl font-black mb-4">
                  CLIENTS SEE PROGRESS <span className="text-[var(--lime)]">WITHOUT TEXTING YOU</span>
                </h3>
              </div>
              <div className="brutalist-border brutalist-shadow-lime bg-card p-4 sm:p-8 flex justify-center">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663254494827/VEbKTvXHrhfevosu.png"
                  alt="JobUpdate client mobile view showing project progress timeline"
                  className="w-full max-w-md h-auto rounded"
                />
              </div>
            </div>

            {/* Mockup 3: Messages Timeline */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-4xl sm:text-5xl font-black mb-4">
                  ALL COMMUNICATION IN <span className="text-[var(--lime)]">ONE ORGANIZED THREAD</span>
                </h3>
              </div>
              <div className="brutalist-border brutalist-shadow-lime bg-card p-4 sm:p-8">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663254494827/rWpkZXROUdqRZaiW.png"
                  alt="JobUpdate messaging timeline showing contractor-client conversation"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-32 border-b-4 border-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="brutalist-border brutalist-shadow-lime bg-card p-12 space-y-8 text-center">
              <div className="inline-block brutalist-border bg-[var(--lime)] px-6 py-3">
                <span className="font-mono text-sm font-black text-black uppercase tracking-wider">
                  Currently in Early Access
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black">
                BUILDING WITH <span className="text-[var(--lime)]">REAL USERS</span>
              </h2>

              <p className="font-mono text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                JobUpdate is in active development. We're gathering feedback from contractors and small crews to build exactly what they need. Join early access to shape the product and get priority access when we launch.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="brutalist-border bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-lg px-8 py-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  <Bell className="mr-2 h-6 w-6" />
                  Request Early Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-5xl sm:text-6xl font-black">
              READY TO <span className="text-[var(--lime)]">JOIN?</span>
            </h2>

            <p className="font-mono text-lg text-muted-foreground">
              Get early access and help shape the future of contractor-client communication.
            </p>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-lg px-8 py-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <Bell className="mr-2 h-6 w-6" />
              Join Early Access
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
