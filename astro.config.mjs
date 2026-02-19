import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

import cloudflare from '@astrojs/cloudflare';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  //Cambiar al desplegar y cuando tenga dominio//
  site: 'https://mimas-iconic-n6hi.vercel.app',

  output: 'static',
  compressHTML: true,

  vite: {
    resolve: {
      alias: {
        '@data':       path.resolve(__dirname, 'src/data'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts':    path.resolve(__dirname, 'src/layouts'),
      },
    },
  },

  adapter: cloudflare(),
});