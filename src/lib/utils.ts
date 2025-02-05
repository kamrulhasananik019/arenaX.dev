import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function INTERNAL__getBaseUrl() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl && process.env.NODE_ENV !== "development") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is not set in the environment variables"
    );
  }

  if (!siteUrl) siteUrl = "http://localhost:3000";

  return new URL(siteUrl);
}

export const baseUrl = INTERNAL__getBaseUrl();
