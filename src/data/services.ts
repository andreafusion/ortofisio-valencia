export interface Service {
  id: string;
  name: string;
  description: string;
  priceFrom: number;
  priceSuffix?: string;
  duration: string;
  image: string;
  featured: boolean;
}

export const services: Service[] = [
  {
    id: "valoracion",
    name: "Valoración inicial",
    description:
      "Exploración completa, diagnóstico fisioterapéutico y plan de tratamiento personalizado. Incluye primera sesión de tratamiento.",
    priceFrom: 55,
    duration: "60 min",
    image: "/assets/img/ortofisio/galeria-06.webp",
    featured: true
  },
  {
    id: "sesion-fisio",
    name: "Sesión de fisioterapia",
    description:
      "Terapia manual, movilización articular y técnicas específicas según tu evolución. Siempre 1 a 1, sin prisa.",
    priceFrom: 50,
    duration: "50 min",
    image: "/assets/img/ortofisio/galeria-01.webp",
    featured: true
  },
  {
    id: "puncion-seca",
    name: "Punción seca",
    description:
      "Técnica de fisioterapia invasiva para liberar puntos gatillo musculares. Muy efectiva en dolores crónicos y contracturas profundas.",
    priceFrom: 50,
    duration: "50 min",
    image: "/assets/img/ortofisio/galeria-05.webp",
    featured: true
  },
  {
    id: "masaje-deportivo",
    name: "Masaje deportivo",
    description:
      "Masaje de descarga muscular para deportistas. Ideal para recuperación post-competición o prevención de lesiones.",
    priceFrom: 45,
    duration: "45 min",
    image: "/assets/img/ortofisio/servicio-masaje.webp",
    featured: false
  },
  {
    id: "readaptacion",
    name: "Readaptación física",
    description:
      "Programa de ejercicio terapéutico supervisado para recuperar fuerza, movilidad y volver al deporte de forma segura.",
    priceFrom: 55,
    duration: "60 min",
    image: "/assets/img/ortofisio/servicio-readaptacion.jpg",
    featured: false
  },
  {
    id: "bono-sesiones",
    name: "Bono 5 sesiones",
    description:
      "Ahorra en tu tratamiento. Válido para fisioterapia, punción seca o readaptación. Sin caducidad.",
    priceFrom: 230,
    priceSuffix: "el bono",
    duration: "5 sesiones",
    image: "/assets/img/ortofisio/servicio-bono.jpg",
    featured: false
  }
];
