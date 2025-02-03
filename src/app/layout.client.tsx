"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Banner } from "fumadocs-ui/components/banner";

import { cn } from "~/lib/utils";

export function Body({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const mode = useMode();

  return (
    <body className={cn(mode, "relative flex min-h-screen flex-col")}>
      <Banner variant="rainbow" id="dummy-promo">
        Get a 33% discount on all courses with the code &quot;PROXARENA&quot;
      </Banner>
      {children}
    </body>
  );
}

export function useMode(): string | undefined {
  const { slug } = useParams();
  return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}
