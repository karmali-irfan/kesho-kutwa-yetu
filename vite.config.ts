import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace this with your GitHub repo name
const repoName = "kesho-kutwa-yetu";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`, // 👈 This fixes the blank page issue
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
