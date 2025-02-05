import type { ReactNode } from "react";
import { Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { RootProvider } from "fumadocs-ui/provider";

import { Body } from "./layout.client";
import { createMetadata } from "~/lib/metadata";
import { baseUrl } from "~/lib/utils";

import "./global.css";
import "katex/dist/katex.min.css";

export const metadata = createMetadata({
  title: {
    template: "%s | ArenaX.dev",
    default: "ArenaX.dev",
  },
  description: "",
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <Body>
        <RootProvider>{children}</RootProvider>
      </Body>
    </html>
  );
}
