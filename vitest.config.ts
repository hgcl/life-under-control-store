import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    include: [
      "src/app/**/*.{test,spec}.{ts,tsx,js,jsx}",
      "src/components/**/*.{test,spec}.{ts,tsx,js,jsx}",
      "src/context/**/*.{test,spec}.{ts,tsx,js,jsx}",
    ],
    setupFiles: ["./vitest.setup.ts"],
    env: loadEnv(mode, process.cwd(), ""),
  },
}));
