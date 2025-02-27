import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import "katex/dist/katex.min.css";

import { baseOptions } from "~/app/layout.config";
import { source } from "~/lib/source";
import Banner from "~/components/(auth)/banner/banner";


const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  sidebar: {
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node);
        if (!meta) return option;

        return {
          ...option,
          icon: (
            <div
              className="rounded-md border bg-gradient-to-t from-fd-background/80 p-1 shadow-md [&_svg]:size-5"
              style={{
                color: `var(--${meta.file.dirname}-color)`,
                backgroundColor: `color-mix(in oklab, var(--${meta.file.dirname}-color) 15%, transparent)`,
              }}
            >
              {node.icon}
            </div>
          ),
        };
      },
    },

    // TODO: add user banner
    banner: <Banner/>,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
