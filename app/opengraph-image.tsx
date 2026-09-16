import { ImageResponse } from "next/og";
export const alt = "Latte Lab — Coffee tastes better together.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#f8f5ed",
        color: "#30241e",
        padding: "70px",
      }}
    >
      <div style={{ fontSize: 28, color: "#345744", letterSpacing: 5 }}>
        LATTE LAB · MIT
      </div>
      <div
        style={{
          fontSize: 95,
          fontWeight: 700,
          lineHeight: 1.05,
          marginTop: 32,
        }}
      >
        Coffee tastes better together.
      </div>
      <div style={{ fontSize: 28, marginTop: 38 }}>
        Good coffee. Great company.
      </div>
    </div>,
    size,
  );
}
