/**
 * CarsonLabs HQ — Home Page
 * Design: Neo-Brutalist Digital Workshop
 * Layout: Hero → Featured Project → Core Projects → Free Tools → Contact
 * Typography: Space Grotesk (display) + IBM Plex Mono (body)
 * Colors: Black (#0a0a0a) + White (#fafafa) + Electric Lime (#d4ff00)
 */

import { ArrowDown, ExternalLink, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactFAB } from "@/components/ContactFAB";
import { ContactForm } from "@/components/ContactForm";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { projects, tools } from "@/data/projects";

const featuredProject = projects.find((p) => p.featured)!;
const coreProjects = projects.filter((p) => !p.featured);

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ContactFAB />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Bold Statement */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="inline-block brutalist-border bg-[var(--lime)] px-6 py-3">
                  <span className="font-mono text-sm font-semibold text-black uppercase tracking-wider">
                    CarsonLabs HQ
                  </span>
                </div>

                <div className="font-mono text-sm text-muted-foreground">
                  <span className="text-[var(--lime)] font-semibold">
                    Recent launches:
                  </span>{" "}
                  LinkRescue • BigFlightDeals • TravelPackAI • UpdateMate
                </div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
                I BUILD<br />
                <span className="text-[var(--lime)]">SMALL APPS</span><br />
                THAT SOLVE<br />
                REAL PROBLEMS
              </h1>

              <p className="text-lg sm:text-xl font-mono text-muted-foreground max-w-lg leading-relaxed">
                A growing collection of micro-SaaS tools and experiments built
                in public. Use them, subscribe to them, or hire me to build your
                next one.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-base px-8 py-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  <ArrowDown className="mr-2 h-5 w-5" />
                  Explore the Projects
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="brutalist-border bg-transparent text-foreground hover:bg-foreground hover:text-background font-mono font-semibold text-base px-8 py-6 transition-all"
                  asChild
                >
                  <a href="/work-with-me">
                    <Wrench className="mr-2 h-5 w-5" />
                    Work With Me
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="brutalist-border brutalist-shadow-lime bg-card p-8 aspect-square flex items-center justify-center">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/fVUFuNLXvrYwJDOXRAbWxS/sandbox/ZW22vjidqX1VpSA7XdJHMP-img-1_1770817329000_na1fn_aGVyby1hYnN0cmFjdC1idWlsZGVy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZlZVRnVOTFh2cll3SkRPWFJBYld4Uy9zYW5kYm94L1pXMjJ2amlkcVgxVnBTQTdYZEpITVAtaW1nLTFfMTc3MDgxNzMyOTAwMF9uYTFmbl9hR1Z5YnkxaFluTjBjbUZqZEMxaWRXbHNaR1Z5LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cNw4WMKiJY5rfxLd8nb-O1iEUa7TuKeN-KWy8Px4xVWT3XkfqkuWAu0~DoL6ko6exHAd1sVLfQHlKyeIzYsW6dqjTkiHcmjeFJ9CKHzmd65xrn1towHKIr~h4DqHPwrHCdbYHm6cUK1HMuyPUMFGwnlHHr6UX5MaDmwPeAFYF4iztaZH1u~0sgnSLo44-Hv6SIDsqdVbyNxfkyzMMrcirijvfEviquMJPtNMYbAY57BxNz7U0xC3lbmh4r~Kj5BYfBXl418yAqMRPy7~eIWM6gqpUOk4UOK4VYsPV77m7OzZ1jf3Aa13ccw8VAxhrSyKkOFvUYPHSLj5N1LAqcKQ__"
                  alt="Abstract builder visual"
                  className="w-full h-full object-contain"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>

        <TechStackMarquee />
      </section>

      {/* ── Featured Project ── */}
      <section id="projects" className="py-32 border-t-4 border-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-4">
              <span className="text-[var(--lime)]">PROJECTS</span>
            </h2>
            <p className="text-xl font-mono text-muted-foreground max-w-2xl">
              Tools I've shipped. Real products, real users.
            </p>
          </div>

          {/* Featured card */}
          <div className="mb-12 max-w-6xl mx-auto">
            <div className="inline-block brutalist-border bg-[var(--lime)] px-4 py-2 mb-6">
              <span className="font-mono text-xs font-black text-black uppercase tracking-wider">
                Featured
              </span>
            </div>

            <a
              href={featuredProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block brutalist-border brutalist-shadow-lime bg-card transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Thumbnail */}
                <div className="overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-white">
                  <img
                    src={featuredProject.thumbnail}
                    alt={`${featuredProject.name} thumbnail`}
                    className="w-full h-full object-cover aspect-video lg:aspect-auto"
                    loading="eager"
                  />
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="font-mono text-xs font-semibold text-emerald-400">
                      Live
                    </span>
                  </div>

                  <h3 className="text-4xl sm:text-5xl font-black">
                    {featuredProject.name}
                  </h3>

                  <p className="font-mono text-lg text-muted-foreground leading-relaxed">
                    {featuredProject.one_liner}
                  </p>

                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[var(--lime)] group-hover:underline">
                    Visit Site
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Core projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreProjects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group brutalist-border brutalist-shadow-lime bg-card transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none flex flex-col"
              >
                {/* Thumbnail */}
                <div className="overflow-hidden border-b-4 border-white">
                  <img
                    src={project.thumbnail}
                    alt={`${project.name} thumbnail`}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="font-mono text-xs font-semibold text-emerald-400">
                      Live
                    </span>
                  </div>

                  <h3 className="text-2xl font-black">{project.name}</h3>

                  <p className="font-mono text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.one_liner}
                  </p>

                  <div className="flex items-center gap-1 font-mono text-xs font-semibold text-[var(--lime)] group-hover:underline mt-auto pt-2">
                    Visit Site
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free Tools ── */}
      <section className="py-32 border-t-4 border-white bg-muted/10">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-5xl sm:text-6xl font-black leading-none mb-4">
              FREE <span className="text-[var(--lime)]">TOOLS</span>
            </h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl">
              Open-access utilities. No login required.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group brutalist-border bg-card p-6 space-y-4 transition-all hover:translate-x-1 hover:translate-y-1 hover:brutalist-shadow-lime flex flex-col"
              >
                {/* Thumbnail (smaller) */}
                <div className="overflow-hidden border-2 border-white/20">
                  <img
                    src={tool.thumbnail}
                    alt={`${tool.name} thumbnail`}
                    className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-black">{tool.name}</h3>

                <p className="font-mono text-sm text-muted-foreground leading-relaxed flex-1">
                  {tool.one_liner}
                </p>

                <div className="flex items-center gap-1 font-mono text-xs font-semibold text-[var(--lime)] group-hover:underline">
                  Try it free
                  <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subtle Work With Me link ── */}
      <section className="py-20 border-t-4 border-white text-center">
        <div className="container">
          <p className="font-mono text-muted-foreground mb-4">
            Have an idea for an internal tool or micro-SaaS?
          </p>
          <a
            href="/work-with-me"
            className="inline-flex items-center gap-2 font-mono text-lg font-semibold text-[var(--lime)] hover:underline transition-colors"
          >
            Work With Me →
          </a>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-32 border-t-4 border-white relative overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/fVUFuNLXvrYwJDOXRAbWxS/sandbox/ZW22vjidqX1VpSA7XdJHMP-img-3_1770817329000_na1fn_Y29kZS10ZXJtaW5hbC1hYnN0cmFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZlZVRnVOTFh2cll3SkRPWFJBYld4Uy9zYW5kYm94L1pXMjJ2amlkcVgxVnBTQTdYZEpITVAtaW1nLTNfMTc3MDgxNzMyOTAwMF9uYTFmbl9ZMjlrWlMxMFpYSnRhVzVoYkMxaFluTjBjbUZqZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cNw4WMKiJY5rfxLd8nb-O1iEUa7TuKeN-KWy8Px4xVWT3XkfqkuWAu0~DoL6ko6exHAd1sVLfQHlKyeIzYsW6dqjTkiHcmjeFJ9CKHzmd65xrn1towHKIr~h4DqHPwrHCdbYHm6cUK1HMuyPUMFGwnlHHr6UX5MaDmwPeAFYF4iztaZH1u~0sgnSLo44-Hv6SIDsqdVbyNxfkyzMMrcirijvfEviquMJPtNMYbAY57BxNz7U0xC3lbmh4r~Kj5BYfBXl418yAqMRPy7~eIWM6gqpUOk4UOK4VYsPV77m7OzZ1jf3Aa13ccw8VAxhrSyKkOFvUYPHSLj5N1LAqcKQ__"
            alt="Code terminal abstract"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
              LET'S<br />
              <span className="text-[var(--lime)]">CONNECT</span>
            </h2>

            <p className="text-xl font-mono text-muted-foreground max-w-2xl mx-auto">
              Got an idea but not sure where to start? Fill out the form below
              and I'll get back to you within 24 hours.
            </p>

            <div className="max-w-2xl mx-auto pt-8">
              <ContactForm />
            </div>

            <p className="font-mono text-sm text-muted-foreground pt-8">
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

      {/* ── Footer ── */}
      <footer className="py-12 border-t-4 border-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="font-mono text-sm text-muted-foreground">
              © 2026 CarsonLabs HQ
            </p>

            <div className="flex gap-6">
              <a
                href="https://www.carsonr.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted-foreground hover:text-[var(--lime)] transition-colors"
              >
                Professional Portfolio
              </a>
              <a
                href="/work-with-me"
                className="font-mono text-sm text-muted-foreground hover:text-[var(--lime)] transition-colors"
              >
                Work With Me
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
