import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
    port: 3000,
  },
  integrations: [react()],
  vite: {
    optimizeDeps: {
      exclude: ["crypto"],
    },
  },
  adapter: netlify(),
});
