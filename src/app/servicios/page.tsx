import type { Metadata } from "next";
import Services from "@/components/Services";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Baño y spa, corte de pelo, deslanado (stripping) y corte de uñas para perros en Alcalá de Henares. Adaptamos cada servicio a la raza y el tipo de pelo de tu perro.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 pt-8 md:pb-0">
      <Services />
      <Process />
    </main>
  );
}
