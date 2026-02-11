/**
 * Server environment configuration.
 * Variables are read from process.env at startup.
 */
function env(key: string): string {
  const value = process.env[key];
  return typeof value === "string" ? value : "";
}

export const ENV = {
  appId: env("APP_ID") || env("VITE_APP_ID"),
  oAuthServerUrl: env("OAUTH_SERVER_URL"),
  cookieSecret: env("COOKIE_SECRET"),
  ownerOpenId: env("OWNER_OPEN_ID"),
  forgeApiUrl: env("BUILT_IN_FORGE_API_URL"),
  forgeApiKey: env("BUILT_IN_FORGE_API_KEY"),
} as const;
