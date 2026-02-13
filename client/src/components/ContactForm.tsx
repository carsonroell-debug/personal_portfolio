import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps = {}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Message sent! I'll get back to you soon.");
      onSuccess?.();
      // Reset form after 3 seconds
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setSubmitted(false);
      }, 3000);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to send message. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({ name, email, message });
  };

  if (submitted) {
    return (
      <div className="brutalist-border bg-card p-8 text-center space-y-4">
        <CheckCircle2 className="h-16 w-16 text-[var(--lime)] mx-auto" />
        <h3 className="text-2xl font-black">Message Sent!</h3>
        <p className="font-mono text-muted-foreground">
          Thanks for reaching out. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="brutalist-border bg-card p-8 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-mono font-semibold">
          Your Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="brutalist-border bg-background font-mono"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="font-mono font-semibold">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="brutalist-border bg-background font-mono"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-mono font-semibold">
          Tell Me About Your Idea
        </Label>
        <Textarea
          id="message"
          placeholder="I have an idea for..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className="brutalist-border bg-background font-mono resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={submitMutation.isPending}
        className="brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black hover:bg-[var(--lime-dark)] font-mono font-semibold text-base px-8 py-6 w-full transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
      >
        {submitMutation.isPending ? (
          <>Sending...</>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
