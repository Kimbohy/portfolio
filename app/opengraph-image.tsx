import { ImageResponse } from "next/og";

export const alt = "Finoana Lovtiana Rabarijaona — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "#f8fafc",
      }}
    >
      <div style={{ fontSize: 28, color: "#94a3b8", letterSpacing: 4 }}>
        PORTFOLIO
      </div>
      <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24 }}>
        Finoana Lovtiana Rabarijaona
      </div>
      <div style={{ fontSize: 36, color: "#8b5cf6", marginTop: 24 }}>
        Software Engineer · AI Enthusiast
      </div>
      <div style={{ fontSize: 26, color: "#94a3b8", marginTop: 48 }}>
        lova.is-a.dev
      </div>
    </div>,
    size,
  );
}
