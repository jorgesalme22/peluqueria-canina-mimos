import { PawIcon, ScissorsIcon, BathIcon, SparkleIcon, HeartHandsIcon, StarIcon } from "./icons";

const placeholders = [
  { icon: ScissorsIcon, label: "Corte terminado", gradient: "from-[#e7b18c] to-[#bd5836]" },
  { icon: BathIcon, label: "Baño y spa", gradient: "from-[#c7d3bd] to-[#62735a]" },
  { icon: SparkleIcon, label: "Detalle final (pajarita)", gradient: "from-[#f0d9b5] to-[#c99a4a]" },
  { icon: PawIcon, label: "Interior del local", gradient: "from-[#ddc4b0] to-[#99432a]" },
  { icon: HeartHandsIcon, label: "Equipo Mimos", gradient: "from-[#cdd8c3] to-[#6e7f5c]" },
  { icon: StarIcon, label: "Antes / después", gradient: "from-[#ecd2c4] to-[#bd5836]" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-pad">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Galería</span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Nuestro trabajo, en fotos
            </h2>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {placeholders.map((p) => (
            <div
              key={p.label}
              className={`relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient} flex items-end p-4`}
            >
              <p.icon className="absolute top-4 left-4 size-6 text-white/80" />
              <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {p.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-dashed border-border bg-surface p-5">
          <span className="mt-0.5 text-lg" aria-hidden="true">
            📸
          </span>
          <p className="text-sm text-foreground-soft">
            <strong className="text-foreground">
              Galería pendiente de fotos reales.
            </strong>{" "}
            Estos espacios son marcadores de posición. Para completarla,
            Mimos puede aportar fotos propias de perros ya arreglados
            (con autorización de sus dueños), del interior del local y del
            equipo — o autorizar el uso de las fotos ya publicadas en su{" "}
            <a
              href="https://www.instagram.com/peluqueriacanina_mimos_alcala/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-terracotta underline-offset-2 hover:text-terracotta-dark"
            >
              perfil de Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
