import { defineConfig } from "@tanstack/react-start/config"
import * as process from "node:process"
import tsConfigPaths from "vite-tsconfig-paths"

const preset = process.env.PRODUCTION_PRESET || "bun"

export default defineConfig({
  server: { preset },
  vite: {
    build: { minify: false },
    ssr: {
      noExternal: ["@mantine/*"],
    },

    plugins: [tsConfigPaths({ projects: ["./tsconfig.json"] })],

    // @ts-expect-error — it's removed only from the schema, but it's still available
    clearScreen: false,
  },
})
