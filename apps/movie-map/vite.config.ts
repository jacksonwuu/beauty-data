import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "vite";

// `vite --mode public` (or VITE_PUBLIC_DATA=1): same app, but it reads the
// high-resolution tiled atlas instead of the low-res one, and the output goes
// to dist-public so a deploy can never pick up the local dev build.
const publicData = process.env.VITE_PUBLIC_DATA === "1";

// Shipped to everyone: code, poster art, the tiled atlas and the on-demand
// detail shards.
const PUBLIC_ASSETS = [
  "posters/**",
  "posters-web/**",
  "movie-details/**",
  "placeholder.svg",
  "preview.png"
];

export default defineConfig(({ mode }) => {
  const publicMode = publicData || mode === "public";

  if (publicMode) {
    process.env.VITE_PUBLIC_DATA = "1";
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      publicMode
        ? {
            name: "public-env",
            apply: "build",
            config() {
              return { define: { "import.meta.env.VITE_PUBLIC_DATA": "true" } };
            }
          }
        : null,
      publicMode
        ? {
            // Vite copies every file under `public/` into the output, so the
            // scraped posters would ship even though nothing references them.
            // Drop everything except the allow-listed directories.
            name: "public-assets-only",
            apply: "build",
            writeBundle(options) {
              const outDir = options.dir;

              if (!outDir) {
                return;
              }

              for (const entry of readdirSync(outDir, { withFileTypes: true })) {
                if (!entry.isDirectory() || entry.name === "assets") {
                  continue;
                }

                if (!PUBLIC_ASSETS.some((allowed) => allowed === entry.name || allowed.startsWith(`${entry.name}/`))) {
                  rmSync(join(outDir, entry.name), { recursive: true, force: true });
                }
              }
            }
          }
        : null
    ].filter(Boolean),
    server: {
      port: 5173
    },
    build: {
      emptyOutDir: !publicMode,
      outDir: publicMode ? "dist-public" : "dist",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/three") || id.includes("@react-three")) {
              return "globe-engine";
            }

            if (id.includes("react-dom") || id.includes("/react/")) {
              return "react";
            }

            if (id.includes("world-atlas") || id.includes("topojson")) {
              return "geo-data";
            }

            return undefined;
          }
        }
      }
    }
  };
});
