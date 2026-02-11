import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Error Badge */}
          <div className="inline-block brutalist-border bg-[var(--lime)] px-6 py-3">
            <span className="font-mono text-sm font-semibold text-black uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Error 404
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black leading-none">
            PAGE<br />
            <span className="text-[var(--lime)]">NOT FOUND</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl font-mono text-muted-foreground max-w-lg mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Button */}
          <div id="not-found-button-group" className="pt-4">
            <Button
              size="lg"
              onClick={handleGoHome}
              className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-base px-8 py-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
