import { defineConfig, defineWorkspace, mergeConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sharedConfig = defineConfig({
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    setupFiles: ["src/__tests__/setup.ts"],
  },
});

const browserConfig = defineConfig({
  plugins: [react()],
  test: {
    name: "browser",
    environment: "jsdom",
    include: ["src/**/*.browser.test.{ts,tsx}"],
  },
});

const nodeConfig = defineConfig({
  test: {
    name: "node",
    environment: "node",
    include: ["src/**/*.node.test.{ts,tsx}"],
  },
});

export default defineWorkspace([
  mergeConfig(sharedConfig, browserConfig),
  mergeConfig(sharedConfig, nodeConfig),
]);
