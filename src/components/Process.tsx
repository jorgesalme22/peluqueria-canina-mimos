import { ChatIcon, CalendarIcon, PawIcon, HeartHandsIcon } from "./icons";

const steps = [
  {
    icon: ChatIcon,
    title: "Contacta",
    description: "Escríbenos por WhatsApp, Instagram o llama por teléfono.",
  },
  {
    icon: CalendarIcon,
    title: "Reserva tu cita",
    description:
      "Cuéntanos la raza y el tipo de pelo de tu perro y te decimos el mejor servicio y hueco disponible.",
  },
  {
    icon: PawIcon,
    title: "Trae a tu perro",
    description:
      "Le recibimos con calma en nuestro local del centro de Alcalá de Henares.",
  },
  {
    icon: HeartHandsIcon,
    title: "Recógelo guapísimo",
    description:
      "Limpio, relajado y con su detalle final — listo para la foto.",
  },
];

export default function Process() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Cómo funciona</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Pedir cita es así de sencillo
          </h2>
        </div>

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-terracotta text-white">
                  <s.icon className="size-5" />
                </span>
                <span className="font-serif text-2xl text-border" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground-soft">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
