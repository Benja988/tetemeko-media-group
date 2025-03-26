export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const apiRequest = async (url: string, method = "GET", body: any = null, token: string | null = null) => {
  let authToken = token || localStorage.getItem("token"); // ✅ Ensure token retrieval

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  const response = await fetch(`${API_BASE_URL}${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  // Handle token expiration (401 response)
  if (response.status === 401) {
    console.warn("Unauthorized request: Possible token expiry. Logging out...");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    throw new Error("Session expired. Please log in again.");
  }

  if (!response.ok) {
    throw new Error(`Request failed: ${response.statusText}`);
  }

  return await response.json();
};
