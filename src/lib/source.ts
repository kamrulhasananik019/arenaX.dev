import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";

import { docs, meta } from "~/../.source";
import { icons } from "~/components/icons";

export const source = loader({
  baseUrl: "/course",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
