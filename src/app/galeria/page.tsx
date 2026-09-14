import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Fotos y vídeos reales del trabajo de Peluquería Canina Mimos, directamente desde su Instagram (@peluqueriacanina_mimos_alcala).",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 pt-8 md:pb-0">
      <Gallery />
    </main>
  );
}
