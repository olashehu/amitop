"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en-NG">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "24px",
          color: "#111827",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#0F172A" }}>
          Something went wrong.
        </h1>
        <p style={{ marginTop: "12px", color: "#6b7280", maxWidth: "360px" }}>
          A critical error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          style={{
            marginTop: "24px",
            padding: "12px 24px",
            borderRadius: "6px",
            background: "#2563EB",
            color: "white",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
