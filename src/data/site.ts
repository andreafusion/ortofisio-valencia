export const site = {
  brand:       'Mimas Iconic',
  tagline:     'Manicura Natural y Elegante en Valencia',
  description: 'Manicura natural y elegante en Valencia. Diseños delicados personalizados sin exagerar.',
  url:         'https://mimas-iconic-n6hi.vercel.app',
  ogImage:     '/assets/img/nails-05.webp',
  lang:        'es',

  location: {
    street: 'Calle Cuenca, 21, Extramurs',
    city:   '46007 Valencia, España',
  },

  hours: [
    { days: 'Lunes a Viernes', time: '10:00 – 20:00' },
    { days: 'Sábado',          time: '10:00 – 14:00' },
    { days: 'Domingo',         time: 'Cerrado'        },
  ],

  whatsapp:        'https://wa.me/34696626435',
  instagram:       'https://instagram.com/mimasiconic',
  instagramHandle: '@mimasiconic',
  bookingUrl:      '/reservar',

  // ⚠️ Reemplaza con tu URL real de Calendly
  calendlyUrl: 'https://calendly.com/andreafusiondigital/reservar-cita-mimasiconic?month=2026-02',
} as const;
