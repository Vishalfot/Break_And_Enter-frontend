export const API_URL = "http://localhost:5000";

export async function apiFetch(endpoint, options = {}) {
  return fetch(API_URL + endpoint, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
}
