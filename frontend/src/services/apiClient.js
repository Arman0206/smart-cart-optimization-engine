import axios from "axios";

export const coreApi = axios.create({
  baseURL: import.meta.env.VITE_CORE_SERVICE_URL,
  headers: { "Content-Type": "application/json" },
});

export const recommendationApi = axios.create({
  baseURL: import.meta.env.VITE_RECOMMENDATION_SERVICE_URL,
  headers: { "Content-Type": "application/json" },
});

// Temporary stand-in until real auth exists
export const DEMO_USER_ID = "guest-user";