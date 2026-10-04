import { ImageResponse } from "next/og";

export const alt = "Nexa Solutions – Digitale Lösungen für ein smarteres Morgen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 55%, #7c3aed 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, opacity: 0.85 }}>Nexa Solutions</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1, marginTop: 24, maxWidth: 1000 }}>
          Digitale Lösungen für ein smarteres Morgen
        </div>
        <div style={{ fontSize: 34, marginTop: 36, opacity: 0.9 }}>
          Websites · Mobile Apps · KI-Automatisierung
        </div>
      </div>
    ),
    size,
  );
}
