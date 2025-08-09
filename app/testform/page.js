"use client";

import { useState } from "react";

export default function TestFormPage() {
  const [value, setValue] = useState("");
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          background: "#fff",
          padding: 32,
          borderRadius: 12,
          boxShadow: "0 2px 8px #0001",
        }}
      >
        <label style={{ display: "block", marginBottom: 8 }}>
          Test Input:
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              marginLeft: 8,
              padding: 8,
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </label>
        <div style={{ fontSize: 12, color: "#888" }}>Value: {value}</div>
      </form>
    </main>
  );
}
