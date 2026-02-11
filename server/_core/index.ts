import "dotenv/config";
import express from "express";
import { createServer } from "http";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { registerOAuthRoutes } from "./oauth";
import { setupVite, serveStatic } from "./vite";

const isDev = process.env.NODE_ENV !== "production";

async function main() {
  const app = express();
  const server = createServer(app);

  // OAuth routes (must be before JSON body parser for callback)
  registerOAuthRoutes(app);

  // tRPC handler
  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  // Static files and SPA fallback
  if (isDev) {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

main().catch(console.error);
