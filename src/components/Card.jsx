import React, { useCallback } from "react";


function Card({ title, bgColor = "#f0f0f0", icon, pill, children }) {
  return (
    <div
      style={{
        width: 240,
        borderRadius: 14,
        overflow: "hidden",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)",
        fontFamily: "'DM Sans', sans-serif",
        background: "#fff",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: bgColor,
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 16 }}>{icon}</span>
        <span
          style={{
            fontWeight: 700,
            fontSize: 14,
            color: "#1a1a1a",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "12px 14px", background: "#fff" }}>
        {children}
      </div>
    </div>
  );
}

export default Card;