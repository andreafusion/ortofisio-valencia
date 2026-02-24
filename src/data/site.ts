export const site = {
  brand: "Mimas Iconic",
  tagline: "Manicura Natural y Elegante en Valencia",
  description:
    "Manicura natural y elegante en Valencia. Diseños delicados personalizados sin exagerar.",
  url: "https://mimas-iconic-astro.andreafusiondigital.workers.dev/",
  ogImage: "/assets/img/nails-05.webp",
  lang: "es",

  // ── Hero ────────────────────────────────────────────────────────────────
  hero: {
    title: "Manicura en Valencia.<br />Arte icónico.",
    subtitle:
      "De clean perfecto a diseños exclusivos: semipermanente, manicura rusa, soft gel y nail art personalizado.",
    image: "/assets/img/nails-05.webp",
    imageAlt: "Manicura elegante natural",
    clientCount: "Más de 120 clientas felices",
    ctaPrimary: "Reservar cita",
    ctaSecondary: "Ver diseños",
  },

  // ── Negocio ──────────────────────────────────────────────────────────────
  location: {
    street: "Calle Cuenca, 21, Extramurs",
    city: "46007 Valencia, España",
    mapsLink:
      "https://www.google.com/maps/place/HIPNOTIK+STUDIO+Tattoo+%26+Nail+Art/@39.4677338,-0.3851523,17z/data=!3m1!4b1!4m6!3m5!1s0xd604f7297d65c07:0xaf7f4299ff431af5!8m2!3d39.4677338!4d-0.3851523!16s%2Fg%2F11jr6fmjbk?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D",
    mapsEmbed:
      "https://maps.google.com/maps?q=39.4677338,-0.3851523&z=17&output=embed",
  },
  hours: [
    { days: "Lunes a Viernes", time: "10:00 – 20:00" },
    { days: "Sábado", time: "10:00 – 14:00" },
    { days: "Domingo", time: "Cerrado" },
  ],

  // ── CTA final ────────────────────────────────────────────────────────────
  cta: {
    heading: "¿Lista para reservar?",
    ctaPrimary: "Reservar cita",
    ctaSecondary: "WhatsApp",
  },

  // ── Contacto y reservas ──────────────────────────────────────────────────
  whatsapp: "https://wa.me/34696626435",
  instagram: "https://instagram.com/mimasiconic",
  instagramHandle: "@mimasiconic",
  bookingUrl: "/reservar",

  // ⚠️ Reemplaza con tu URL real de Calendly
  calendlyUrl:
    "https://calendly.com/andreafusiondigital/reservar-cita-mimasiconic?month=2026-02",
} as const;
