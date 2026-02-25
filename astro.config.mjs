import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import path from "path";
// import cloudflare from '@astrojs/cloudflare'; // (FUTURO: si reactivas SSR/API)

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // site: 'https://tu-dominio-final.com', // (opcional para estático; útil cuando tengas dominio real)
  output: "static",
  compressHTML: true,

  // (FUTURO: si reactivas endpoints tipo /api/newsletter)
  // output: 'server',
  // adapter: cloudflare(),

  vite: {
    resolve: {
      alias: {
        "@data": path.resolve(__dirname, "src/data"),
        "@components": path.resolve(__dirname, "src/components"),
        "@layouts": path.resolve(__dirname, "src/layouts")
      }
    }
  }
});
