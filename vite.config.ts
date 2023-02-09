import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: "Space Grotesk",
            local: "Space Grotesk",
            src: "./src/SpaceGrotesk.ttf",
          },
        ],
        display: "block",
        preload: true,
        
      },
    }),
  ],
});
