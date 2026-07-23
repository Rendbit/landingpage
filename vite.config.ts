import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["rendbit-icon.svg", "rendbit-icon.png", "favicon.ico"],
      manifest: {
        name: "RendBit — Cross-border payments",
        short_name: "RendBit",
        description:
          "Send money across Africa in minutes on the Stellar network — deposit, convert, and withdraw in local currencies.",
        theme_color: "#0E7BB2",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/rendbit-icon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
          { src: "/rendbit-icon.png", sizes: "192x192", type: "image/png" },
          { src: "/rendbit-icon.png", sizes: "512x512", type: "image/png" },
        ],
      },
      workbox: {
        // Precache the app shell only — the marketing images are large (multi-MB
        // SVGs) so they're runtime-cached (below) instead of bloating the precache.
        globPatterns: ["**/*.{js,css,html,ico,woff2}"],
        navigateFallback: "/index.html",
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "rendbit-landing-images",
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
});
