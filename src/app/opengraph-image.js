import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

// The preview card shown when the link is shared on LinkedIn, Facebook, WhatsApp, X, etc.
export const alt = `${site.name} | ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(path.join(process.cwd(), "public", site.photo));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          background: "linear-gradient(135deg, #0b0f19 0%, #0f2a24 100%)",
          color: "#ffffff",
        }}
      >
        <img
          src={photoSrc}
          width={340}
          height={340}
          style={{ borderRadius: 40, objectFit: "cover", border: "6px solid #10b981" }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, color: "#34d399", fontWeight: 600 }}>Portfolio</div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, marginTop: 12 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 38, color: "#cbd5e1", marginTop: 20 }}>{site.title}</div>
          <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 28 }}>
            Flutter · ASP.NET Core · Laravel · React
          </div>
          <div style={{ fontSize: 26, color: "#34d399", marginTop: 36 }}>
            {site.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}
