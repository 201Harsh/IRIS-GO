import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  root: path.resolve(process.cwd(), "src/surface"),
  server: {
    middlewareMode: true,
  },
  appType: "spa",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: path.resolve(process.cwd(), "dist/surface"),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(process.cwd(), "src/surface/index.html"),
    },
  },
});
