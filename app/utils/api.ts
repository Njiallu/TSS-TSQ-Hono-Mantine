import { hc } from "hono/client"
import type { AppType } from "../server"

export const apiClient = hc<AppType>(import.meta.env.VITE_API_URL, {
  init: { credentials: "include" },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
})
