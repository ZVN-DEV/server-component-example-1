"use client";

import { useState } from "react";

export default function Client({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);

  const pageStyle = {
    backgroundColor: "black",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const buttonStyle = {
    padding: "8px",
    backgroundColor: "#BC359C",
    color: "white",
    cursor: "pointer",
    border: "none",
    fontSize: "1.5rem",
    borderRadius: "6px",
    marginBottom: "10px",
  };

  const contentStyle = {
    padding: "5px",
    display: 'block',
    transition: "opacity 0.5s ease-in-out",
    opacity: showContent ? 1 : 0,
  };

  return (
    <div style={pageStyle}>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => setShowContent(!showContent)}
          style={buttonStyle}
        >
          Toggle Content
        </button>
        <div style={contentStyle}>{showContent && <div>{children}</div>}</div>
      </div>
    </div>
  );
}
