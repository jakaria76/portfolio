import { ImageResponse } from "next/og";

// Icon used when someone adds the site to an iPhone/iPad home screen
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #059669, #0891b2)",
          color: "#ffffff",
          fontSize: 88,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        MJ
      </div>
    ),
    size
  );
}
