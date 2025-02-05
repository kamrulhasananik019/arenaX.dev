import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import * as fs from "node:fs";
import path from "node:path";

const font = fs.readFileSync(
  path.join(process.cwd(), "public", "fonts", "Geist-Regular.ttf")
);
const fontBold = fs.readFileSync(
  path.join(process.cwd(), "public", "fonts", "Geist-Bold.ttf")
);

const baseBrands = {
  html: {
    imagePath: path.join(
      process.cwd(),
      "public",
      "images",
      "brands",
      "html.png"
    ),
  },
  css: {
    imagePath: path.join(
      process.cwd(),
      "public",
      "images",
      "brands",
      "css.png"
    ),
  },
  javascript: {
    imagePath: path.join(
      process.cwd(),
      "public",
      "images",
      "brands",
      "javascript.png"
    ),
  },
  typescript: {
    imagePath: path.join(
      process.cwd(),
      "public",
      "images",
      "brands",
      "typescript.png"
    ),
  },
  python: {
    imagePath: path.join(
      process.cwd(),
      "public",
      "images",
      "brands",
      "python.png"
    ),
  },
  react: {
    imagePath: path.join(
      process.cwd(),
      "public",
      "images",
      "brands",
      "react.png"
    ),
  },
  nextjs: {
    imagePath: path.join(
      process.cwd(),
      "public",
      "images",
      "brands",
      "nextjs.png"
    ),
  },
  rust: {
    imagePath: path.join(
      process.cwd(),
      "public",
      "images",
      "brands",
      "rust.png"
    ),
  },
};

const brandAliases = {
  ts: baseBrands.typescript,
  js: baseBrands.javascript,
};

const brands = {
  ...baseBrands,
  ...brandAliases,
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const hasTitle = searchParams.has("title");

  const title = hasTitle ? searchParams.get("title") : "ArenaXdev";
  const description = searchParams.get("description");
  const brandName = searchParams.get("brand") ?? "";

  const brand = brands[brandName as keyof typeof brands];

  let brandImage: string | null = null;
  const ownerImageBuffer = fs.readFileSync(
    path.join(process.cwd(), "public", "images", "ahm0xc.png")
  );
  const bgImageBuffer = fs.readFileSync(
    path.join(process.cwd(), "public", "images", "og", "bg.png")
  );

  const ownerImage = ownerImageBuffer.toString("base64");
  const bgImage = bgImageBuffer.toString("base64");

  if (brand) {
    const brandImageBuffer = fs.readFileSync(brand.imagePath);
    brandImage = brandImageBuffer.toString("base64");
  }

  return new ImageResponse(
    (
      <div
        tw="w-full h-full flex [&_p]:my-0"
        style={{
          backgroundImage: `url(data:image/png;base64,${bgImage})`,
        }}
      >
        {/* <div
          tw="absolute w-full h-full flex bg-blend-multiply"
        /> */}
        <div tw="flex flex-col text-white justify-between w-full h-full">
          <div />
          <div tw="flex flex-col justify-center gap-4 p-12">
            {brandImage && (
              <img
                src={`data:image/png;base64,${brandImage}`}
                alt={brandName}
                tw="w-16 object-contain mb-4"
              />
            )}
            <p tw="text-6xl font-bold">{title}</p>
            <p tw="text-2xl text-white/80 mt-0">{description}</p>

            <div tw="flex items-center mt-20">
              <img
                src={`data:image/png;base64,${ownerImage}`}
                alt="owner"
                tw="w-14 h-14 rounded-full"
              />
              <p tw="text-white font-bold ml-2 text-2xl">@ahm0xc</p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: "twemoji",
      // debug: process.env.NODE_ENV === "development",
      fonts: [
        {
          name: "Geist",
          data: font,
          weight: 400,
        },
        {
          name: "Geist",
          data: fontBold,
          weight: 600,
        },
      ],
    }
  );
}
