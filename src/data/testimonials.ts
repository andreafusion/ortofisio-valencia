export interface Testimonial {
  id:     string;
  quote:  string;
  author: string;
}

export const testimonials: Testimonial[] = [
  { id: 't1', quote: 'Duran semanas y siguen viéndose perfectas.',    author: 'Laura' },
  { id: 't2', quote: 'Siempre salgo con las uñas perfectas y relajada.',   author: 'Marta' },
];
