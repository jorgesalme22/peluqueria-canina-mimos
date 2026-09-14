import Link from "next/link";
import Hero from "@/components/Hero";
import { services } from "@/components/Services";
import { reasons } from "@/components/WhyMimos";
import { reviews, Stars } from "@/components/Reviews";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { business, whatsappHref } from "@/lib/business";

export default function Home() {
  return (
    <main id="contenido" className="flex-1 pb-16 md:pb-0">
      <Hero />

      {/* Servicios — teaser */}
      <section className="section-pad">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Servicios</span>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Todo lo que tu perro necesita
              </h2>
            </div>
            <Link
              href="/servicios"
              className="focus-ring shrink-0 text-sm font-semibold text-terracotta-dark hover:underline"
            >
              Ver todos los servicios →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <div key={s.name} className="card p-6">
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
        </div>
      </section>

      {/* Por qué Mimos — teaser */}
      <section className="section-pad bg-surface">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Por qué Mimos</span>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                La tranquilidad de tu perro, primero
              </h2>
            </div>
            <Link
              href="/sobre-nosotros"
              className="focus-ring shrink-0 text-sm font-semibold text-terracotta-dark hover:underline"
            >
              Conócenos mejor →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {reasons.slice(0, 3).map((r) => (
              <div key={r.title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-terracotta-dark shadow-sm ring-1 ring-border">
                  <r.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground-soft">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opiniones — teaser */}
      <section className="section-pad">
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

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reviews.slice(0, 2).map((r) => (
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

          <div className="mt-6 text-center">
            <Link
              href="/opiniones"
              className="focus-ring text-sm font-semibold text-terracotta-dark hover:underline"
            >
              Ver todas las opiniones →
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram — teaser */}
      <section className="section-pad bg-surface">
        <div className="container-x">
          <div className="card flex flex-col items-center gap-5 p-10 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-terracotta-tint text-terracotta-dark">
              <InstagramIcon className="size-7" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold">
                Síguenos en Instagram
              </h2>
              <p className="mx-auto mt-2 max-w-md text-foreground-soft">
                Fotos y vídeos reales de los perritos que pasan por Mimos,
                directo desde {business.instagramHandle}.
              </p>
            </div>
            <Link href="/galeria" className="btn btn-primary focus-ring">
              Ver galería →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-pad">
        <div className="container-x">
          <div className="overflow-hidden rounded-[2rem] bg-[#2a2420] px-8 py-14 text-center text-[#f5ede4] sm:px-14">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              ¿Reservamos cita para tu perro?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/70">
              Respondemos por WhatsApp normalmente en el mismo día.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappHref(
                  "Hola, me gustaría pedir cita para mi perro 🐶"
                )}
                className="btn btn-primary focus-ring"
              >
                <WhatsAppIcon className="size-4.5" />
                Reservar por WhatsApp
              </a>
              <Link href="/contacto" className="btn btn-on-dark focus-ring">
                Ver todos los datos de contacto →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
