export const site = {
  brand: "OrtoFisio Valencia",
  tagline: "Fisioterapia 1 a 1 en Benimaclet",
  description:
    "Fisioterapia en Valencia para dolor lumbar, cervical y lesiones deportivas.",
  url: "https://ortofisio-valencia.vercel.app,",
  ogImage: "/assets/img/og/og-image.png",
  lang: "es",
  // ── Tipografía ───────────────────────────────────────────────────────────
  // Cambia las URLs y nombres para usar otras fuentes de Google Fonts
  fonts: {
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;600;700;800&display=swap"
  },

  // ── Firma visual ─────────────────────────────────────────────────────────
  // 'method' activa la sección Método con tarjetas numeradas grandes
  // '' desactiva la sección completamente
  signature: "method",

  // ── Hero ────────────────────────────────────────────────────────────────
  hero: {
    title: "Volver a moverte<br />sin miedo.",
    subtitle:
      "Dolor lumbar, cervical y lesiones deportivas. Valoración + tratamiento + plan desde la primera sesión.",
    image: "/assets/img/ortofisio/hero.webp",
    imageAlt: "Fisioterapeuta realizando tratamiento en OrtoFisio Valencia",
    clientCount: "Más de 200 pacientes recuperados",
    ctaPrimary: "Pedir cita por WhatsApp",
    ctaSecondary: "Elegir hueco en agenda"
  },

  // ── Método (firma visual — solo activo si signature === 'method') ─────────
  howItWorks: {
    heading: "Nuestro método",
    steps: [
      {
        number: "01",
        title: "Valoramos",
        description:
          "Primera sesión de 60 min. Exploramos el origen del problema, no solo el síntoma."
      },
      {
        number: "02",
        title: "Tratamos",
        description:
          "Fisioterapia manual, punción seca o readaptación. Siempre 1 a 1, sin compartir sala."
      },
      {
        number: "03",
        title: "Te acompañamos",
        description:
          "Plan de ejercicios y seguimiento hasta que vuelvas a moverte sin limitaciones."
      }
    ]
  },

  // ── About + Equipo ────────────────────────────────────────────────────────
  about: {
    heading: "Equipo OrtoFisio",
    paragraphs: [
      "Somos una clínica pequeña por elección. Cada paciente trabaja directamente con su profesional, sin rotaciones ni asistentes.",
      "Combinamos fisioterapia clínica y readaptación física en el mismo espacio para que tu recuperación sea completa: desde aliviar el dolor hasta volver a moverte al 100%."
    ],
    team: [
      {
        name: "Alejandro Ruiz",
        role: "Fisioterapeuta Colegiado",
        college: "Nº Col. CV-4821",
        bio: "Especialista en fisioterapia musculoesquelética y deportiva. Más de 8 años trabajando con deportistas y pacientes con dolor crónico. Formado en punción seca, terapia manual y neurología.",
        image: "/assets/img/ortofisio/team-alejandro.webp",
        imageAlt:
          "Alejandro Ruiz, fisioterapeuta colegiado en OrtoFisio Valencia"
      },
      {
        name: "Sara Molina",
        role: "Especialista en Readaptación Física",
        college: "COLEF CV-2034",
        bio: "Graduada en Ciencias de la Actividad Física y el Deporte. Especializada en readaptación tras lesión y vuelta al deporte. Diseña los planes de ejercicio terapéutico adaptados a cada paciente.",
        image: "/assets/img/ortofisio/team-sara.webp",
        imageAlt:
          "Sara Molina, especialista en readaptación física en OrtoFisio Valencia"
      }
    ]
  },

  // ── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading: "¿Tienes dolor o una lesión que no mejora?",
    ctaPrimary: "Pedir cita por WhatsApp",
    ctaSecondary: "Elegir hueco en agenda"
  },

  // ── Negocio ───────────────────────────────────────────────────────────────
  location: {
    street: "Calle Murcia, 12, Benimaclet",
    city: "46020 Valencia, España",
    mapsLink: "https://www.google.com/maps/search/Benimaclet+Valencia",
    mapsEmbed:
      "https://maps.google.com/maps?q=Benimaclet,Valencia&z=15&output=embed"
  },
  hours: [
    { days: "Lunes a Viernes", time: "09:00 – 20:00" },
    { days: "Sábado", time: "09:00 – 13:00" },
    { days: "Domingo", time: "Cerrado" }
  ],
  themeColor: "#2A7F8F",

  // ── Contacto ──────────────────────────────────────────────────────────────
  // Mensaje prefill de WhatsApp incluido en la URL
  whatsapp:
    "https://wa.me/346000000045?text=Hola%2C%20tengo%20dolor%20en%20(zona)%20desde%20(tiempo).%20Objetivo%3A%20(quitar%20dolor%2Fvolver%20a%20entrenar).%20%C2%BFTen%C3%A9is%20hueco%20esta%20semana%3F",
  email: "hola@ortofisiovalencia.com",
  instagram: "https://instagram.com/ortofisiovalencia",
  instagramHandle: "@ortofisiovalencia",
  bookingUrl: "https://calendly.com/TU-USUARIO/ortofisio-cita",

  // ── Newsletter — desactivada para este cliente ────────────────────────────
  newsletter: {
    enabled: false,
    title: "",
    subtitle: "",
    description: "",
    placeholder: "",
    legal: "",
    successMsg: ""
  }
} as const;
