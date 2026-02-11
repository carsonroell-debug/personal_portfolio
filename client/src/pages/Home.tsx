/**
 * Solo Indie Builder Portfolio - Home Page
 * Design: Neo-Brutalist Digital Workshop
 * Layout: Hero → Products → Work With Me → Contact Form
 * Typography: Space Grotesk (display) + IBM Plex Mono (body)
 * Colors: Black (#0a0a0a) + White (#fafafa) + Electric Lime (#d4ff00)
 * Positioning: Product portfolio for solo indie builder shipping micro-SaaS tools
 */

import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowDown, Wrench, Rocket } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Bold Statement */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="inline-block brutalist-border bg-[var(--lime)] px-6 py-3">
                  <span className="font-mono text-sm font-semibold text-black uppercase tracking-wider">
                    Indie Builder
                  </span>
                </div>
                
                <div className="font-mono text-sm text-muted-foreground">
                  <span className="text-[var(--lime)] font-semibold">Recent launches:</span> UTM Link Generator • JobUpdate (Early Access)
                </div>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
                I BUILD<br />
                <span className="text-[var(--lime)]">SMALL APPS</span><br />
                THAT SOLVE<br />
                REAL PROBLEMS
              </h1>
              
              <p className="text-lg sm:text-xl font-mono text-muted-foreground max-w-lg leading-relaxed">
                A growing collection of micro-SaaS tools and experiments built in public. Use them, subscribe to them, or hire me to build your next one.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('products')}
                  className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-base px-8 py-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  <ArrowDown className="mr-2 h-5 w-5" />
                  Explore the Tools
                </Button>

                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="brutalist-border bg-transparent text-foreground hover:bg-foreground hover:text-background font-mono font-semibold text-base px-8 py-6 transition-all"
                >
                  <Wrench className="mr-2 h-5 w-5" />
                  Work With Me
                </Button>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="brutalist-border brutalist-shadow-lime bg-card p-8 aspect-square flex items-center justify-center">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/fVUFuNLXvrYwJDOXRAbWxS/sandbox/ZW22vjidqX1VpSA7XdJHMP-img-1_1770817329000_na1fn_aGVyby1hYnN0cmFjdC1idWlsZGVy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZlZVRnVOTFh2cll3SkRPWFJBYld4Uy9zYW5kYm94L1pXMjJ2amlkcVgxVnBTQTdYZEpITVAtaW1nLTFfMTc3MDgxNzMyOTAwMF9uYTFmbl9hR1Z5YnkxaFluTjBjbUZqZEMxaWRXbHNaR1Z5LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cNw4WMKiJY5rfxLd8nb-O1iEUa7TuKeN-KWy8Px4xVWT3XkfqkuWAu0~DoL6ko6exHAd1sVLfQHlKyeIzYsW6dqjTkiHcmjeFJ9CKHzmd65xrn1towHKIr~h4DqHPwrHCdbYHm6cUK1HMuyPUMFGwnlHHr6UX5MaDmwPeAFYF4iztaZH1u~4t0sgnSLo44-Hv6SIDsqdVbyNxfkyzMMrcirijvfEviquMJPtNMYbAY57BxNz7U0xC3lbmh4r~Kj5BYfBXl418yAqMRPy7~eIWM6gqpUOk4UOK4VYsPV77m7OzZ1jf3Aa13ccw8VAxhrSyKkOFvUYPHSLj5N1LAqcKQ__"
                  alt="Abstract builder visual"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 border-t-4 border-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-6">
              <span className="text-[var(--lime)]">PRODUCTS</span>
            </h2>
            <p className="text-xl font-mono text-muted-foreground max-w-2xl mx-auto">
              Tools I've shipped. Some are free, some are paid. All solve real problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Product 1: UTM Link Generator */}
            <div className="brutalist-border brutalist-shadow-lime bg-card p-8 space-y-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <div className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <div className="inline-block brutalist-border bg-[var(--lime)] px-4 py-2">
                    <span className="font-mono text-sm font-black text-black">LIVE</span>
                  </div>
                  <div className="inline-block brutalist-border bg-muted px-4 py-2">
                    <span className="font-mono text-sm font-semibold text-muted-foreground">Free Marketing Utility</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-black">UTM Link Generator</h3>
                
                <p className="font-mono text-muted-foreground">
                  Generate clean, trackable marketing links in seconds.
                </p>
              </div>

              <Button 
                className="brutalist-border bg-foreground text-background hover:bg-[var(--lime)] hover:text-black font-mono font-semibold w-full transition-all"
                asChild
              >
                <a href="/utm-generator">
                  View Project
                </a>
              </Button>
            </div>

            {/* Product 2: JobUpdate */}
            <div className="brutalist-border brutalist-shadow-lime bg-card p-8 space-y-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <div className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <div className="inline-block brutalist-border bg-muted px-4 py-2">
                    <span className="font-mono text-sm font-black text-muted-foreground">COMING SOON</span>
                  </div>
                  <div className="inline-block brutalist-border bg-muted px-4 py-2">
                    <span className="font-mono text-sm font-semibold text-muted-foreground">Early Access Project</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-black">JobUpdate</h3>
                
                <p className="font-mono text-muted-foreground">
                  Client updates for contractors without the constant texts.
                </p>
              </div>

              <Button 
                className="brutalist-border bg-foreground text-background hover:bg-[var(--lime)] hover:text-black font-mono font-semibold w-full transition-all"
                asChild
              >
                <a href="/jobupdate">
                  View Project
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Building in Public Section */}
      <section className="py-32 border-t-4 border-white bg-muted/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-6">
              BUILDING IN<br />
              <span className="text-[var(--lime)]">PUBLIC</span>
            </h2>
            <p className="text-xl font-mono text-muted-foreground max-w-2xl mx-auto">
              What's coming next. Follow along as I ship more tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Upcoming Project 1 */}
            <div className="brutalist-border bg-card p-6 space-y-4">
              <div className="inline-block brutalist-border bg-muted px-3 py-1">
                <Rocket className="h-4 w-4 text-muted-foreground inline" />
              </div>
              
              <h3 className="text-xl font-black">Internal Tools for Small Teams</h3>
              
              <p className="font-mono text-sm text-muted-foreground">
                Exploring simple workflow apps for small businesses.
              </p>
            </div>

            {/* Upcoming Project 2 */}
            <div className="brutalist-border bg-card p-6 space-y-4">
              <div className="inline-block brutalist-border bg-muted px-3 py-1">
                <Rocket className="h-4 w-4 text-muted-foreground inline" />
              </div>
              
              <h3 className="text-xl font-black">AI-Assisted Micro SaaS Experiments</h3>
              
              <p className="font-mono text-sm text-muted-foreground">
                Testing rapid product development using AI tools.
              </p>
            </div>

            {/* Upcoming Project 3 */}
            <div className="brutalist-border bg-card p-6 space-y-4">
              <div className="inline-block brutalist-border bg-muted px-3 py-1">
                <Rocket className="h-4 w-4 text-muted-foreground inline" />
              </div>
              
              <h3 className="text-xl font-black">More Utilities for Marketers & Builders</h3>
              
              <p className="font-mono text-sm text-muted-foreground">
                Continuing to ship small tools that solve everyday problems.
              </p>
            </div>
          </div>

          <p className="text-center font-mono text-sm text-muted-foreground mt-12 mb-16">
            More tools launching soon.
          </p>

          <NewsletterSignup />
        </div>
      </section>

      {/* Work With Me Section */}
      <section className="py-32 border-t-4 border-white bg-muted/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none">
              NEED SOMETHING<br />
              <span className="text-[var(--lime)]">SIMILAR?</span>
            </h2>
            
            <p className="text-xl font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have an idea for an internal tool or micro-SaaS product? I build fast, lean apps for founders and small teams.
            </p>

            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-lg px-10 py-7 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <Wrench className="mr-2 h-6 w-6" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-32 border-t-4 border-white relative overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://private-us-east-1.manuscdn.com/sessionFile/fVUFuNLXvrYwJDOXRAbWxS/sandbox/ZW22vjidqX1VpSA7XdJHMP-img-3_1770817329000_na1fn_Y29kZS10ZXJtaW5hbC1hYnN0cmFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZlZVRnVOTFh2cll3SkRPWFJBYld4Uy9zYW5kYm94L1pXMjJ2amlkcVgxVnBTQTdYZEpITVAtaW1nLTNfMTc3MDgxNzMyOTAwMF9uYTFmbl9ZMjlrWlMxMFpYSnRhVzVoYkMxaFluTjBjbUZqZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cNw4WMKiJY5rfxLd8nb-O1iEUa7TuKeN-KWy8Px4xVWT3XkfqkuWAu0~DoL6ko6exHAd1sVLfQHlKyeIzYsW6dqjTkiHcmjeFJ9CKHzmd65xrn1towHKIr~h4DqHPwrHCdbYHm6cUK1HMuyPUMFGwnlHHr6UX5MaDmwPeAFYF4iztaZH1u~4t0sgnSLo44-Hv6SIDsqdVbyNxfkyzMMrcirijvfEviquMJPtNMYbAY57BxNz7U0xC3lbmh4r~Kj5BYfBXl418yAqMRPy7~eIWM6gqpUOk4UOK4VYsPV77m7OzZ1jf3Aa13ccw8VAxhrSyKkOFvUYPHSLj5N1LAqcKQ__"
            alt="Code terminal abstract"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
              LET'S<br />
              <span className="text-[var(--lime)]">CONNECT</span>
            </h2>
            
            <p className="text-xl font-mono text-muted-foreground max-w-2xl mx-auto">
              Got an idea but not sure where to start? Fill out the form below and I'll get back to you within 24 hours.
            </p>

            <div className="max-w-2xl mx-auto pt-8">
              <ContactForm />
            </div>

            <p className="font-mono text-sm text-muted-foreground pt-8">
              Or email directly: <a href="mailto:carson.roell@gmail.com" className="text-[var(--lime)] hover:underline">carson.roell@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-4 border-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="font-mono text-sm text-muted-foreground">
              © 2026 Solo Builder. Built with Manus.
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
                href="https://utm-qr-builder.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted-foreground hover:text-[var(--lime)] transition-colors"
              >
                UTM QR Builder
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
