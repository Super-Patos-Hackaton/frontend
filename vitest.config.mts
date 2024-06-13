import react from "@vitejs/plugin-react"

import { loadEnv } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    coverage: {
      include: ["src/**/*"],
      exclude: ["**/*.d.ts"],
      reporter: ["test-coverage-results"]
    },
    environmentMatchGlobs: [["**/*.test.tsx", "jsdom"]],
    setupFiles: ["./test/vitest-setup.ts"],
    env: loadEnv("", process.cwd(), "")
  }
})
