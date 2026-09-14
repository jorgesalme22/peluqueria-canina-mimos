import { StarIcon } from "./icons";
import { business } from "@/lib/business";

const reviews = [
  {
    name: "María de la Luz V.",
    time: "hace 8 meses",
    text: "Mi perro antes salía de otras peluquerías con mucha ansiedad, y ahora aquí sale muy tranquilo. Le llevo todos los meses y siempre sale con alguna sorpresa: una pajarita, una corbata o una pañoleta.",
  },
  {
    name: "Charo H.",
    time: "hace 7 meses",
    text: "Mi perro no ha podido quedar más guapo, ha salido hasta con una pajarita. Primera vez que lo llevaba y ha sido todo un acierto — volveremos seguro.",
  },
  {
    name: "Blanca G.",
    time: "hace 1 mes",
    text: "Fui sin cita a primera hora solo para cortarle las uñas a mi perrita, y la chica fue encantadora: me hizo el favor aunque ya estaban llegando otros perritos.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="size-4" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="opiniones" className="section-pad bg-surface">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Opiniones</span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Lo que cuentan quienes ya han venido
            </h2>
          </div>
          <div className="card flex shrink-0 items-center gap-4 px-6 py-4">
            <div>
              <p className="font-serif text-3xl font-semibold leading-none">
                {business.rating.value}
              </p>
              <Stars />
            </div>
            <div className="h-10 w-px bg-border" />
            <p className="text-sm text-foreground-soft">
              {business.rating.count} reseñas
              <br />
              en Google
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="card flex flex-col p-6">
              <Stars />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="text-foreground-soft">{r.time}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs text-foreground-soft">
          Reseñas públicas y reales publicadas en la ficha de Google de{" "}
          {business.name}, no verificadas por terceros. Mostradas con nombre
          abreviado por privacidad.
        </p>
      </div>
    </section>
  );
}
