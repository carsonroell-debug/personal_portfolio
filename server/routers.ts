import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import { createContactSubmission, subscribeToNewsletter, getAllContactSubmissions, getAllNewsletterSubscribers } from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  newsletter: router({
    subscribe: publicProcedure
      .input(
        z.object({
          email: z.string().email("Valid email is required").max(320),
        })
      )
      .mutation(async ({ input }) => {
        // Subscribe to newsletter
        const success = await subscribeToNewsletter(input.email);
        
        if (!success) {
          return { 
            success: false, 
            message: "This email is already subscribed!" 
          };
        }

        // Send email notification to owner
        const emailContent = `
New Newsletter Subscription

Email: ${input.email}

---
Subscribed at: ${new Date().toLocaleString()}
        `.trim();

        await notifyOwner({
          title: `New Subscriber: ${input.email}`,
          content: emailContent,
        });

        return { success: true, message: "Successfully subscribed!" };
      }),
  }),

  admin: router({
    getNewsletterSubscribers: adminProcedure.query(async () => {
      const subscribers = await getAllNewsletterSubscribers();
      return subscribers;
    }),
    getContactSubmissions: adminProcedure.query(async () => {
      const submissions = await getAllContactSubmissions();
      return submissions;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required").max(255),
          email: z.string().email("Valid email is required").max(320),
          message: z.string().min(10, "Message must be at least 10 characters").max(5000),
        })
      )
      .mutation(async ({ input }) => {
        // Save to database
        await createContactSubmission({
          name: input.name,
          email: input.email,
          message: input.message,
        });

        // Send email notification to owner
        const emailContent = `
New Contact Form Submission

Name: ${input.name}
Email: ${input.email}

Message:
${input.message}

---
Submitted at: ${new Date().toLocaleString()}
        `.trim();

        await notifyOwner({
          title: `New Contact: ${input.name}`,
          content: emailContent,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
