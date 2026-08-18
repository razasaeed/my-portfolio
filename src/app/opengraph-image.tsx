import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { siteMeta } from "@/data/site";

export const alt = siteMeta.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070b14",
          padding: "72px 80px",
          color: "#eef3f8",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#5eead4",
            fontWeight: 600,
          }}
        >
          {profile.title}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 600,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#93a1b5",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            {profile.headline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#6b7a90",
          }}
        >
          Full-stack · Backend · Mobile · Architecture
        </div>
      </div>
    ),
    { ...size },
  );
}
