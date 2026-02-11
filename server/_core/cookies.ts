import type { Request } from "express";

/**
 * Returns base cookie options for the session cookie.
 * Callers add maxAge: ONE_YEAR_MS for setting, or maxAge: -1 for clearing.
 */
export function getSessionCookieOptions(req: Request): {
  secure: boolean;
  sameSite: "none" | "lax" | "strict";
  httpOnly: boolean;
  path: string;
} {
  const isSecure = req.protocol === "https" || req.get("x-forwarded-proto") === "https";
  return {
    secure: isSecure,
    sameSite: isSecure ? "none" : "lax",
    httpOnly: true,
    path: "/",
  };
}
