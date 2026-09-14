import type { Metadata } from "next";
import Link from "next/link";
import WhyMimos from "@/components/WhyMimos";

export const metadata: Metadata = {
  title: "Por qué Mimos",
  description:
    "Peluquería canina en Alcalá de Henares gestionada por una mujer emprendedora del barrio. 4,9/5 en Google con más de 260 reseñas: perros tranquilos, trato cercano y un detalle final en cada visita.",
  alternates: { canonical: "/sobre-nosotros" },
};

export default function SobreNosotrosPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 pt-8 md:pb-0">
      <WhyMimos />
      <div className="container-x pb-20 text-center">
        <Link
          href="/opiniones"
          className="btn btn-secondary focus-ring"
        >
          Leer todas las opiniones →
        </Link>
      </div>
    </main>
  );
}
