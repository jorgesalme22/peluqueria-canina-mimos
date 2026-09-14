import type { SVGProps } from "react";
import {
  BathIcon,
  BrushIcon,
  LeashIcon,
  ScissorsIcon,
  SparkleIcon,
} from "./icons";
import { whatsappHref } from "@/lib/business";

export const services = [
  {
    icon: BathIcon,
    name: "Baño y spa",
    description:
      "Baño relajante adaptado al tipo de pelo de tu perro, secado y cepillado final para que salga suave y con buen olor.",
  },
  {
    icon: ScissorsIcon,
    name: "Corte de pelo",
    description:
      "Corte a tijera o máquina según raza y preferencia: mantenimiento, corte de raza o el estilo que más le favorezca.",
  },
  {
    icon: SparkleIcon,
    name: "Deslanado (stripping)",
    description:
      "Técnica especializada para razas de pelo duro, cuidando la piel y respetando los tiempos de cada perro.",
  },
  {
    icon: BrushIcon,
    name: "Cepillado y desenredado",
    description:
      "Eliminamos nudos y pelo muerto con calma, sin tirones, antes del baño y el corte.",
  },
  {
    icon: PawTrim,
    name: "Corte de uñas",
    description:
      "Corte y limado de uñas de forma rápida y segura, también como servicio suelto si tu perro solo lo necesita.",
  },
  {
    icon: LeashIcon,
    name: "Tienda para tu mascota",
    description:
      "Piensos (Gosbi, Nature's Greatness), arneses, correas y juguetes — todo en la misma visita.",
  },
];

function PawTrim(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="15.2" r="3.6" />
      <path d="M6.2 8.7v3.6M17.8 8.7v3.6M8.7 4.7v3.6M15.3 4.7v3.6" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Servicios</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Todo lo que tu perro necesita, en una sola visita
          </h2>
          <p className="mt-4 text-lg text-foreground-soft">
            Adaptamos cada servicio a la raza, el tipo de pelo y el carácter
            de tu perro. Los precios varían según tamaño y estado del pelo —
            consúltalos sin compromiso por WhatsApp o teléfono.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="card group p-6 transition-shadow hover:shadow-lg">
              <span className="flex size-12 items-center justify-center rounded-xl bg-terracotta-tint text-terracotta-dark">
                <s.icon className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-soft">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center">
          <p className="text-sm text-foreground-soft">
            ¿No sabes qué servicio necesita tu perro? Cuéntanos su raza y tipo
            de pelo y te recomendamos lo mejor.
          </p>
          <a
            href={whatsappHref(
              "Hola, tengo un perro y quiero saber qué servicio le recomendáis. ¿Me ayudáis?"
            )}
            className="btn btn-primary focus-ring shrink-0"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
