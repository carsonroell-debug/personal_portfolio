import { Button } from "@/components/ui/button";
import { ArrowLeft, Wrench } from "lucide-react";
import { ContactFAB } from "@/components/ContactFAB";

const MAILTO_HREF = [
  "mailto:croell758@gmail.com",
  "?subject=CarsonLabs%20%E2%80%94%20Build%20Request",
  "&body=Hey%20Cars%2C%0A%0AI%27m%20interested%20in%20a%20lean%20internal%20tool%20%2F%20micro-SaaS.%0A%0AGoal%3A%0ATimeline%3A%0ABudget%3A%0ALinks%2Fexamples%3A%0A%E2%80%94",
].join("");

export default function WorkWithMe() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ContactFAB />

      {/* Back nav */}
      <div className="container pt-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-[var(--lime)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to CarsonLabs HQ
        </a>
      </div>

      {/* Hero CTA */}
      <section className="py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="inline-block brutalist-border bg-[var(--lime)] px-6 py-3">
              <span className="font-mono text-sm font-semibold text-black uppercase tracking-wider">
                Hire me
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
              WORK WITH<br />
              <span className="text-[var(--lime)]">ME</span>
            </h1>

            <p className="text-xl font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I build fast, lean tools for founders and small teams — internal dashboards, client portals, micro-SaaS MVPs, and automation. No bloat, no committees, just working software.
            </p>

            <Button
              size="lg"
              className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-lg px-10 py-7 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              asChild
            >
              <a href={MAILTO_HREF}>
                <Wrench className="mr-2 h-6 w-6" />
                Send a Build Request
              </a>
            </Button>

            <p className="font-mono text-sm text-muted-foreground">
              Opens your email client with a pre-filled template.
            </p>
          </div>
        </div>
      </section>

      {/* What I build */}
      <section className="py-24 border-t-4 border-white bg-muted/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center">
              WHAT I BUILD
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Internal Tools",
                  desc: "Dashboards, admin panels, and workflow apps that replace your spreadsheets.",
                },
                {
                  title: "Micro-SaaS MVPs",
                  desc: "Ship a working product in weeks, not months. Validate before you invest.",
                },
                {
                  title: "Client Portals",
                  desc: "Branded portals so your clients can track status, approve work, and pay online.",
                },
                {
                  title: "Automation Glue",
                  desc: "Connect your tools, automate the repetitive stuff, reclaim your time.",
                },
              ].map((item) => (
                <div key={item.title} className="brutalist-border bg-card p-6 space-y-3">
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <section className="py-32 border-t-4 border-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-black leading-none">
              READY TO <span className="text-[var(--lime)]">SHIP?</span>
            </h2>
            <p className="font-mono text-muted-foreground">
              Drop me a line. I respond within 24 hours.
            </p>
            <Button
              size="lg"
              className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-base px-8 py-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              asChild
            >
              <a href={MAILTO_HREF}>
                <Wrench className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <p className="font-mono text-sm text-muted-foreground">
              Or email directly:{" "}
              <a
                href="mailto:croell758@gmail.com"
                className="text-[var(--lime)] hover:underline"
              >
                croell758@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-4 border-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="font-mono text-sm text-muted-foreground">
              © 2026 CarsonLabs HQ
            </p>
            <a
              href="/"
              className="font-mono text-sm text-muted-foreground hover:text-[var(--lime)] transition-colors"
            >
              ← Back to all projects
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
