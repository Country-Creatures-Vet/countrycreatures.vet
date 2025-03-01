
import react from '@vitejs/plugin-react'
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "internal": path.resolve(__dirname, "src/internal"),
      "external": path.resolve(__dirname, "src/external"),
    }
  },
  server: {
    // port: 8080, // TODO make this configurable
    open: true,  // ✅ Automatically opens browser
    cors: true,
    proxy: {
      "/fonts.googleapis.com": {
        target: "https://fonts.googleapis.com",
        changeOrigin: true,
        secure: false,
      },
    }
  },
  optimizeDeps: {
    exclude: ['https://fonts.googleapis.com'],
  },
  plugins: [react(), tsconfigPaths()],
  base: 'https://country-creatures-vet.github.io/countrycreatures.vet/',
})

