import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Cultus Education – Bridging Talent To Tomorrow";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #091b3d 0%, #0f2d5c 40%, #1B4580 100%)",
          position: "relative",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#E8B931",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#E8B931",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Cultus Education
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Bridging Talent To Tomorrow
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            Transforming learners into job-ready talent across 11 Asian countries
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(255,255,255,0.4)",
            fontSize: 16,
          }}
        >
          cultusedu.com
        </div>
      </div>
    ),
    { ...size }
  );
}
