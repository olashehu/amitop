import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #2563EB 75%, #06B6D4 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "rgba(255,255,255,0.15)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ⚡
          </div>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 800, marginTop: 32, maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 26, opacity: 0.75, marginTop: 24 }}>
          Solar &middot; Fiber Optic &middot; Structured Cabling &middot; Network &middot; IT Infrastructure
        </div>
      </div>
    ),
    { ...size }
  );
}
