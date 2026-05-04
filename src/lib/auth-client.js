import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "https://b13-assignment-08-tiles-gallery.vercel.app",

  // baseURL: "http://localhost:3000",
});

export const { signIn, signUp, useSession } = createAuthClient();
