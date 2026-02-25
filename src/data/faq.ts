export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "¿Cuántas sesiones voy a necesitar?",
    answer:
      "Depende del problema y tu evolución. En la valoración inicial te damos una estimación realista. La mayoría de procesos agudos mejoran en 4-8 sesiones; los crónicos suelen requerir más tiempo y continuidad."
  },
  {
    question: "¿La punción seca duele?",
    answer:
      "La aguja es muy fina y la sensación varía según la persona. Es habitual notar un espasmo muscular breve y algo de agujetas las 24-48h siguientes. Es parte normal del proceso de recuperación."
  },
  {
    question: "¿Qué debo llevar a la primera cita?",
    answer:
      "Ropa cómoda que permita acceder a la zona a tratar. Si tienes pruebas de imagen (resonancia, radiografía o informe médico), tráelas o envíalas por WhatsApp antes de la visita."
  },
  {
    question: "¿Trabajáis con mutuas o seguros médicos?",
    answer:
      "Actualmente no trabajamos con mutuas. Emitimos factura detallada para que puedas reclamarla a tu seguro si tu póliza cubre fisioterapia."
  },
  {
    question: "¿Atendéis lesiones deportivas de cualquier nivel?",
    answer:
      "Sí, desde el corredor amateur hasta el deportista de competición. Sara, nuestra especialista en readaptación, diseña el protocolo de vuelta al deporte según tu disciplina y objetivos concretos."
  },
  {
    question: "¿Qué pasa si necesito cancelar mi cita?",
    answer:
      "Puedes cancelar o reprogramar con al menos 24 horas de antelación sin ningún coste. Las cancelaciones con menos de 24h pueden aplicar un cargo por el tiempo reservado."
  }
];
