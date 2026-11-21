import { ImageResponse } from "next/og";

// Browser-tab and Google-search favicon. Google wants a square that is a multiple of 48px.
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 96,
          fontWeight: 800,
          letterSpacing: -4,
          borderRadius: 40,
        }}
      >
        MJ
      </div>
    ),
    size
  );
}
