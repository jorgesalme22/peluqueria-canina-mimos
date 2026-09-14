import type { Metadata } from "next";
import Reviews from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Opiniones",
  description:
    "4,9/5 en Google con más de 260 reseñas. Lee lo que cuentan los clientes de Peluquería Canina Mimos en Alcalá de Henares sobre sus perros.",
  alternates: { canonical: "/opiniones" },
};

export default function OpinionesPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 pt-8 md:pb-0">
      <Reviews />
    </main>
  );
}
