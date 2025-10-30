// src/authCheck.js
export async function checkAuth() {
  const hostname = window.location.hostname;
  const isLocal = hostname === "localhost" || hostname.startsWith("127.");

  // 🧠 Choose backend & portal base dynamically
  const apiBase = isLocal
    ? "http://localhost:8000/api"
    : "https://api.thirdshiftmedia.agency/api";

  const portalBase = isLocal
    ? "http://localhost:5173"
    : "https://portal.thirdshiftmedia.agency";

  try {
    const response = await fetch(`${apiBase}/auth/me`, {
      credentials: "include", // ✅ include cookies for JWT
    });

    if (!response.ok) {
      const current = encodeURIComponent(window.location.href);
      window.location.href = `${portalBase}/signin?redirect=${current}`;
      return;
    }

    const user = await response.json();
    console.log("Authenticated user:", user);
  } catch (err) {
    console.error("Auth check failed:", err);
    const current = encodeURIComponent(window.location.href);
    window.location.href = `${portalBase}/signin?redirect=${current}`;
  }
}
