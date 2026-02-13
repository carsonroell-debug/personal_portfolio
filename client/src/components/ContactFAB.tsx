/**
 * Get in Touch FAB - Floating action button opens brutalist contact form
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";

export function ContactFAB() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 brutalist-border brutalist-shadow-lime bg-[var(--lime)] text-black p-4 hover:bg-[var(--lime-dark)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lime)] focus-visible:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Get in Touch"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={true}
          className="brutalist-border bg-card p-0 gap-0 max-w-lg rounded-none"
        >
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-black">Get in Touch</DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <ContactForm onSuccess={() => setOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
