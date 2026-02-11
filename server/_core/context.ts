import type { Request, Response } from "express";
import type { User } from "../../drizzle/schema";
import { sdk } from "./sdk";

export type TrpcContext = {
  user: User | null;
  req: Request;
  res: Response;
};

export async function createContext(opts: {
  req: Request;
  res: Response;
}): Promise<TrpcContext> {
  const { req, res } = opts;
  let user: User | null = null;

  try {
    user = await sdk.authenticateRequest(req);
  } catch {
    // Invalid or missing session - user stays null for public procedures
  }

  return {
    user,
    req,
    res,
  };
}
