// app.config.ts
import { defineConfig } from "@tanstack/start/config";
import * as process from "node:process";
import tsConfigPaths from "vite-tsconfig-paths";
var preset = process.env.PRODUCTION_PRESET || "bun";
var app_config_default = defineConfig({
  server: { preset },
  vite: {
    build: { minify: false },
    ssr: {
      noExternal: ["@mantine/*"]
    },
    plugins: [tsConfigPaths({ projects: ["./tsconfig.json"] })],
    // @ts-expect-error — it's removed only from the schema, but it's still available
    clearScreen: false
  }
});
export {
  app_config_default as default
};
