export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Me explicó el porqué del dolor, no solo me trató. En dos semanas mejoré más que en meses con otros profesionales.",
    author: "J. M. — Benimaclet"
  },
  {
    id: "t2",
    quote:
      "Volví a correr sin molestias. El plan de readaptación de Sara fue clave para hacerlo bien y sin recaídas.",
    author: "C. S. — Corredor amateur"
  },
  {
    id: "t3",
    quote:
      "Cero prisas, todo medido. Cada sesión tenía un objetivo claro y me lo explicaban sin tecnicismos.",
    author: "P. G. — Valencia"
  },
  {
    id: "t4",
    quote:
      "Plan claro desde el primer día y seguimiento real. Sabía exactamente en qué punto estaba cada semana.",
    author: "M. T. — Paciente con lumbalgia crónica"
  }
];
