import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],
  base: process.env.NODE_ENV === "production" ? "/zesty/" : "/",
  server: {
    historyApiFallback: true,
  },
});
