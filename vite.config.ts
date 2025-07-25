import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { securityHeaders } from "./src/lib/content-security-policy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add security headers for development
    headers: mode === 'development' ? {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    } : {},
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Security improvements for production build
    rollupOptions: {
      output: {
        // Prevent code injection through chunk names
        sanitizeFileName: (name) => {
          return name.replace(/[<>:"/\\|?*]/g, '_');
        }
      }
    }
  }
}));
