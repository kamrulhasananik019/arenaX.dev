import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <span className="font-medium [header_&]:text-[15px]">
          Arena
          <span className="text-[var(--color-fd-primary)] text-base">X</span>
          .dev
        </span>
      </>
    ),
    transparentMode: "top",
  },
  links: [],
};
