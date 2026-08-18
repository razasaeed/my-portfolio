import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          background: "#0b1220",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#5eead4",
          letterSpacing: "-0.06em",
        }}
      >
        RS
      </div>
    ),
    { ...size },
  );
}
