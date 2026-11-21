import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

// Browser-tab and Google-search favicon, made from your photo.
// Google wants a square that is a multiple of 48px.
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

// How much to zoom into the photo and where, so the face fills the small icon.
// Increase ZOOM to show the face bigger; change OFFSET_Y to move it up/down.
const ZOOM = 1.7;
const OFFSET_Y = -12;

export default async function Icon() {
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
          borderRadius: "50%",
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
