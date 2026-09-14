// Datos del negocio — todos verificados públicamente en Google Maps e Instagram
// el 14/09/2026. Si algún dato cambia (horario, teléfono, precios), actualízalo
// aquí: se propaga a toda la web (metadatos, JSON-LD, secciones, footer).

export const business = {
  name: "Peluquería Canina Mimos",
  shortName: "Mimos",
  tagline: "Peluquería canina en Alcalá de Henares",
  phoneDisplay: "643 19 13 67",
  phoneIntl: "+34643191367",
  whatsappNumber: "34643191367",
  address: {
    street: "Calle de Gil de Andrade, 3",
    postalCode: "28804",
    city: "Alcalá de Henares",
    province: "Madrid",
    country: "ES",
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Peluquer%C3%ADa+Canina+Mimos+Calle+de+Gil+de+Andrade+3+Alcal%C3%A1+de+Henares",
  googleMapsReviewsUrl: "https://g.co/kgs/PwWyJZ",
  googleMapsEmbedSrc:
    "https://www.google.com/maps?q=Peluquer%C3%ADa+Canina+Mimos,+Calle+de+Gil+de+Andrade+3,+28804+Alcal%C3%A1+de+Henares&output=embed",
  instagramUrl: "https://www.instagram.com/peluqueriacanina_mimos_alcala/",
  instagramHandle: "@peluqueriacanina_mimos_alcala",
  rating: {
    value: 4.9,
    count: 269,
    source: "Google",
  },
  hours: [
    { day: "Lunes", hours: "9:30 – 18:00" },
    { day: "Martes", hours: "9:30 – 18:00" },
    { day: "Miércoles", hours: "9:30 – 18:00" },
    { day: "Jueves", hours: "9:30 – 18:00" },
    { day: "Viernes", hours: "9:30 – 13:30" },
    { day: "Sábado", hours: "9:30 – 13:30" },
    { day: "Domingo", hours: "Cerrado" },
  ],
  // Formato ISO 8601 para Schema.org (lunes-jueves, viernes-sábado)
  openingHoursSpecification: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:30", closes: "18:00" },
    { days: ["Friday", "Saturday"], opens: "09:30", closes: "13:30" },
  ],
} as const;

export const whatsappHref = (message: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const telHref = `tel:${business.phoneIntl}`;

export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city}, ${business.address.province}`;
