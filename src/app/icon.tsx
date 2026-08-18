import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          background: "#0b1220",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#5eead4",
          letterSpacing: "-0.04em",
        }}
      >
        RS
      </div>
    ),
    { ...size },
  );
}
