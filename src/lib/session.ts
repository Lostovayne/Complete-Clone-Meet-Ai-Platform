import "server-only";
import { cache } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getCachedSession = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
});
