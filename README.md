# full-web-template

Plantilla Astro para webs de negocios locales enfocadas en reservas por móvil.  
Incluye SEO local, WhatsApp/Calendly, cookie consent, newsletter y páginas legales.

## Stack

- [Astro](https://astro.build) — generador estático, zero JS por defecto
- TypeScript — tipado en archivos de datos
- CSS custom properties — theming rápido por cliente
- Cloudflare Workers — deploy (opcional, también funciona en Vercel)

---

## 🚀 Nuevo cliente en 30 minutos

### 1. Copia el repositorio

```bash
git clone https://github.com/andreafusion/full-web-template.git nombre-cliente
cd nombre-cliente
npm install
```

### 2. Edita los datos del negocio

Todo está centralizado en **un solo archivo**:

```
src/data/site.ts
```

Campos que cambiar obligatoriamente:

| Campo          | Qué es                                                 |
| -------------- | ------------------------------------------------------ |
| `brand`        | Nombre del negocio                                     |
| `tagline`      | Especialidad + ciudad                                  |
| `description`  | Meta description (SEO)                                 |
| `url`          | URL de producción                                      |
| `ogImage`      | Imagen para redes sociales                             |
| `hero.*`       | Título, subtítulo e imagen principal                   |
| `location.*`   | Dirección y URLs de Google Maps                        |
| `hours`        | Horarios de apertura                                   |
| `whatsapp`     | Enlace `wa.me/34XXXXXXXXX`                             |
| `instagram`    | URL y handle de Instagram                              |
| `bookingUrl`   | `/reservar` o URL externa                              |
| `calendlyUrl`  | URL de Calendly del cliente                            |
| `about.*`      | Imagen, nombre y texto de presentación                 |
| `howItWorks.*` | Pasos del proceso                                      |
| `cta.*`        | Textos del bloque de llamada a la acción               |
| `newsletter.*` | Título, textos y `enabled: false` si no usa newsletter |

### 3. Edita los servicios

```
src/data/services.ts     ← nombre, precio, duración, imagen, featured
src/data/faq.ts          ← preguntas frecuentes
src/data/testimonials.ts ← reseñas de clientes
src/data/gallery.ts      ← imágenes de galería
```

### 4. Sustituye las imágenes

Coloca las imágenes del cliente en:

```
public/assets/img/
```

Actualiza las rutas en `site.ts` y en los archivos de `src/data/`.

### 5. Actualiza las páginas legales

```
src/pages/legal/privacidad.astro
src/pages/legal/cookies.astro
src/pages/legal/aviso.astro
src/pages/legal/cancelacion.astro
```

Busca y reemplaza el nombre del negocio y los datos de contacto en cada una.

### 6. Cambia el nombre en Cloudflare (si usas Workers)

En `wrangler.jsonc`, cambia `"name"` por el identificador del proyecto del cliente:

```jsonc
"name": "nombre-cliente"
```

### 7. Arranca el servidor local

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321)

---

## 🎨 Theming — cambiar colores y tipografía

Todas las variables de diseño están en `src/styles/global.css` bajo `:root`.  
Cambia estos valores para adaptar la paleta al cliente:

```css
:root {
  --rose: #e8c4c4; /* Color primario */
  --rose-deep: #c49090; /* Hover / acento */
  --cream: #faf7f4; /* Fondo claro */
  --charcoal: #2c2c2c; /* Texto principal */
}
```

---

## 📦 Deploy

### Vercel (recomendado para clientes nuevos)

```bash
npm run build
# Conectar repo en vercel.com → deploy automático
```

### Cloudflare Workers

```bash
npm run build
npx wrangler deploy
```

---

## 📁 Estructura del proyecto

```
src/
├── data/
│   ├── site.ts          ← ⭐ Config principal del negocio
│   ├── services.ts      ← Servicios y precios
│   ├── faq.ts           ← Preguntas frecuentes
│   ├── testimonials.ts  ← Reseñas
│   └── gallery.ts       ← Galería de imágenes
├── components/          ← Un componente por sección
├── layouts/
│   └── Base.astro       ← HTML base, SEO, fonts
├── pages/
│   ├── index.astro      ← Ensambla los componentes
│   ├── reservar.astro   ← Página de reserva (Calendly)
│   ├── servicios.astro  ← Lista completa de servicios
│   └── legal/           ← Privacidad, cookies, aviso, cancelación
└── styles/
    └── global.css       ← Variables CSS y estilos base
```

---

## ✅ Checklist de entrega por cliente

- [ ] `site.ts` completado con datos reales
- [ ] Imágenes del cliente en `public/assets/img/`
- [ ] Servicios, FAQ y testimonios actualizados
- [ ] Páginas legales con datos del negocio
- [ ] URL de producción en `site.url`
- [ ] `wrangler.jsonc` con nombre único (si usa Cloudflare)
- [ ] Test en móvil antes de entregar
- [ ] Google Maps con coordenadas correctas
