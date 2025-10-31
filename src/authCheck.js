// src/authCheck.js
export async function checkAuth() {
  const hostname = window.location.hostname;
  const isLocal = hostname.includes("localhost") || hostname.includes("127.");

  // 🧠 API base (Flask backend)
  const apiBase = isLocal
    ? "http://localhost:8000/api"
    : "https://api.thirdshiftmedia.agency/api";

  // 🧠 Main portal base for login
  const portalBase = isLocal
    ? "http://localhost:5173"
    : "https://www.thirdshiftmedia.agency"; // ✅ fixed with 'www'

  try {
    const res = await fetch(`${apiBase}/auth/me`, {
      credentials: "include", // ✅ include cookies for JWT
    });

    if (!res.ok) {
      const current = encodeURIComponent(window.location.href);
      // ✅ always redirect to the official sign-in page on 'www'
      window.location.href = `${portalBase}/signin?redirect=${current}`;
      return;
    }

    const user = await res.json();
    console.log("✅ Authenticated user:", user);
  } catch (err) {
    console.error("❌ Auth check failed:", err);
    const current = encodeURIComponent(window.location.href);
    window.location.href = `${portalBase}/signin?redirect=${current}`;
  }
}
