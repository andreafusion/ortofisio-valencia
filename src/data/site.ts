export const site = {
  brand: "Mimas Iconic",
  tagline: "Manicura Natural y Elegante en Valencia",
  description:
    "Manicura natural y elegante en Valencia. Diseños delicados personalizados sin exagerar.",
  url: "https://mimas-iconic-astro.andreafusiondigital.workers.dev/",
  ogImage: "/assets/img/nails-05.webp",
  lang: "es",
  // ── Tipografía ───────────────────────────────────────────────────────────
  // Cambia las URLs y nombres para usar otras fuentes de Google Fonts
  fonts: {
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400;500;600&display=swap"
  },

  // ── Hero ────────────────────────────────────────────────────────────────
  hero: {
    title: "Manicura en Valencia.<br />Arte icónico.",
    subtitle:
      "De clean perfecto a diseños exclusivos: semipermanente, manicura rusa, soft gel y nail art personalizado.",
    image: "/assets/img/nails-05.webp",
    imageAlt: "Manicura elegante natural",
    clientCount: "Más de 120 clientas felices",
    ctaPrimary: "Reservar cita",
    ctaSecondary: "Ver diseños"
  },

  // ── Negocio ──────────────────────────────────────────────────────────────
  location: {
    street: "Calle Cuenca, 21, Extramurs",
    city: "46007 Valencia, España",
    mapsLink:
      "https://www.google.com/maps/place/HIPNOTIK+STUDIO+Tattoo+%26+Nail+Art/@39.4677338,-0.3851523,17z/data=!3m1!4b1!4m6!3m5!1s0xd604f7297d65c07:0xaf7f4299ff431af5!8m2!3d39.4677338!4d-0.3851523!16s%2Fg%2F11jr6fmjbk?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D",
    mapsEmbed:
      "https://maps.google.com/maps?q=39.4677338,-0.3851523&z=17&output=embed"
  },
  hours: [
    { days: "Lunes a Viernes", time: "10:00 – 20:00" },
    { days: "Sábado", time: "10:00 – 14:00" },
    { days: "Domingo", time: "Cerrado" }
  ],

  // ── CTA final ────────────────────────────────────────────────────────────
  cta: {
    heading: "¿Lista para reservar?",
    ctaPrimary: "Reservar cita",
    ctaSecondary: "WhatsApp"
  },

  // ── Contacto y reservas ──────────────────────────────────────────────────
  whatsapp: "https://wa.me/34696626435",
  instagram: "https://instagram.com/mimasiconic",
  instagramHandle: "@mimasiconic",
  bookingUrl: "/reservar",

  // ⚠️ Reemplaza con tu URL real de Calendly
  calendlyUrl:
    "https://calendly.com/andreafusiondigital/reservar-cita-mimasiconic?month=2026-02",

  // ── Sobre mí ─────────────────────────────────────────────────────────────
  about: {
    image: "/assets/img/mimas-iconic-about.webp",
    imageAlt: "Profesional trabajando",
    heading: "Mimas", // El nombre que aparece en el h2
    paragraphs: [
      'Me encantan las uñas con detalle. Las que cuando las miras dices: "sí, soy yo".',
      "Trabajo forma, estructura y acabado para que se vean bonitas desde el primer día… y también la semana tres.",
      "Puedes venir por algo minimal o por algo icónico. Mi trabajo es que te quede perfecto, sin que pierda tu esencia.",
      "Aquí no vienes solo a hacerte las uñas.\nVienes a desconectar un rato."
    ]
  },

  // ── Cómo funciona ────────────────────────────────────────────────────────
  howItWorks: {
    heading: "Cómo funciona",
    steps: [
      {
        number: "1",
        title: "Reservas online",
        description: "Elige el día y hora que mejor te venga"
      },
      {
        number: "2",
        title: "Diseñamos juntas",
        description: "Hablamos de lo que quieres y buscamos el mejor resultado"
      },
      {
        number: "3",
        title: "Sales feliz",
        description: "Con resultados que duran y se ven increíbles"
      }
    ]
  },

  // ── Newsletter modal ─────────────────────────────────────────────────────
  newsletter: {
    enabled: true, // false = el modal no aparece
    title: "Iconic Duality",
    subtitle: "Dos estilos. Una newsletter.",
    description:
      "Cada mes recibirás inspiración, tendencias y ofertas exclusivas.",
    placeholder: "Tu correo electrónico",
    legal:
      "Al suscribirte, aceptas recibir emails con novedades y ofertas. Puedes darte de baja cuando quieras.",
    successMsg: "¡Bienvenida! Revisa tu email."
  }
} as const;
