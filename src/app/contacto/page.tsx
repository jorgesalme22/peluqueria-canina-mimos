import type { Metadata } from "next";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contacto y reserva",
  description:
    "Pide cita en Peluquería Canina Mimos, Calle de Gil de Andrade 3, Alcalá de Henares. WhatsApp, teléfono, horario y ubicación.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 pt-8 md:pb-0">
      <Location />
      <Contact />
    </main>
  );
}
