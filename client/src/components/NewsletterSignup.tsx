import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const subscribe = trpc.newsletter.subscribe.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      const result = await subscribe.mutateAsync({ email });
      
      if (result.success) {
        toast.success("You're in! Check your email for confirmation.");
        setEmail(""); // Clear the form
      } else {
        toast.error(result.message || "This email is already subscribed!");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="brutalist-border brutalist-shadow-lime bg-card p-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-3xl font-black">Follow the Build</h3>
          <p className="font-mono text-muted-foreground">
            Get updates when new tools launch and experiments go live. No spam. Just new products.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={subscribe.isPending}
            className="brutalist-border bg-background font-mono flex-1"
          />
          <Button
            type="submit"
            disabled={subscribe.isPending}
            className="brutalist-border bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <Mail className="mr-2 h-5 w-5" />
            {subscribe.isPending ? "Joining..." : "Join the list"}
          </Button>
        </form>
      </div>
    </div>
  );
}
