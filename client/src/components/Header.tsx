/**
 * CarsonLabs HQ — Site Header
 * Compact sticky navigation bar with neon lime bottom border separator.
 */

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-[#d4ff00]/20">
      <div className="container flex items-center justify-between py-3">
        {/* Brand */}
        <a
          href="/"
          className="font-mono font-black text-sm uppercase tracking-widest hover:text-[var(--lime)] transition-colors"
        >
          <span className="text-[var(--lime)]">Carson</span>Labs HQ
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-5 sm:gap-6">
          <button
            onClick={() => scrollToId("projects")}
            className="font-mono text-xs font-semibold text-muted-foreground hover:text-[var(--lime)] transition-colors uppercase tracking-wider hidden sm:block"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToId("tools")}
            className="font-mono text-xs font-semibold text-muted-foreground hover:text-[var(--lime)] transition-colors uppercase tracking-wider hidden sm:block"
          >
            Tools
          </button>
          <a
            href="/work-with-me"
            className="font-mono text-xs font-semibold brutalist-border px-4 py-2 hover:bg-[var(--lime)] hover:text-black transition-all"
          >
            Work With Me
          </a>
        </nav>
      </div>
    </header>
  );
}
