import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://xarena.vercel.app",
      images: "/banner.png",
      siteName: "ArenaXdev",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@ahm0xc",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/banner.png",
      ...override.twitter,
    },
  };
}
