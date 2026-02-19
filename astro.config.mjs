import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://mimas-iconic-n6hi.vercel.app', //Cambiar al desplegar y cuando tenga dominio//
  output: 'hybrid',
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
});