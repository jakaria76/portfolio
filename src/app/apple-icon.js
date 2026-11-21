import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

// Icon used when someone adds the site to an iPhone/iPad home screen.
// iOS rounds the corners itself, so this one stays square.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const ZOOM = 1.5;
const OFFSET_Y = -6;

export default async function AppleIcon() {
  const photo = await readFile(path.join(process.cwd(), "public", site.photo));
  const src = `data:image/png;base64,${photo.toString("base64")}`;
  const imgSize = Math.round(size.width * ZOOM);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#059669",
        }}
      >
        <img
          src={src}
          width={imgSize}
          height={imgSize}
          style={{
            position: "absolute",
            left: (size.width - imgSize) / 2,
            top: OFFSET_Y,
            objectFit: "cover",
          }}
        />
      </div>
    ),
    size
  );
}
