import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
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
      <div className="flex items-center gap-2">
       <div>
       <span className="font-medium [header_&]:text-[15px]">
          Arena
          <span className="text-[var(--color-fd-primary)] text-base">X</span>
          .dev
        </span>   
        </div>
        <div>
        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
      </div>
    ),
    transparentMode: "top",
  },
  links: [],
};
