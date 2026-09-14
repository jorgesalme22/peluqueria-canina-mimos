import { PhoneIcon, StarIcon, WhatsAppIcon } from "./icons";
import { business, telHref, whatsappHref } from "@/lib/business";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 85% 10%, rgba(189,88,54,0.12), transparent), radial-gradient(50% 45% at 5% 95%, rgba(98,115,90,0.14), transparent)",
        }}
      />
      <div className="container-x grid gap-12 pt-10 pb-16 md:grid-cols-2 md:items-center md:pt-16 md:pb-24">
        <div>
          <div className="eyebrow">
            <StarIcon className="size-3.5 text-gold" />
            {business.rating.value}/5 en Google · {business.rating.count} reseñas
          </div>

          <h1 className="mt-4 text-4xl leading-[1.08] font-semibold text-foreground sm:text-5xl lg:text-[3.4rem]">
            Que tu perro salga feliz de la peluquería,{" "}
            <span className="text-terracotta-dark">no nervioso.</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg text-foreground-soft">
            En Mimos cuidamos a tu perro con calma, cariño y sin prisas: baño,
            corte, deslanado y uñas en pleno centro de{" "}
            {business.address.city}. Así lo cuentan las familias que ya
            confían en nosotros cada mes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref("Hola, me gustaría pedir cita para mi perro 🐶")}
              className="btn btn-primary focus-ring"
            >
              <WhatsAppIcon className="size-4.5" />
              Reservar por WhatsApp
            </a>
            <a href={telHref} className="btn btn-secondary focus-ring">
              <PhoneIcon className="size-4.5" />
              Llamar: {business.phoneDisplay}
            </a>
          </div>

          <p className="mt-5 text-sm text-foreground-soft">
            {business.address.street}, {business.address.city} · Abierto de
            lunes a sábado
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="card relative aspect-[4/5] overflow-hidden !rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(42,36,32,0.35)]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #e9c9ae 0%, #d98f66 45%, #bd5836 100%)",
              }}
            />
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 h-full w-full opacity-90"
              aria-hidden="true"
            >
              <circle cx="330" cy="60" r="90" fill="#f4e2d9" opacity="0.25" />
              <circle cx="40" cy="460" r="120" fill="#62735a" opacity="0.2" />
              <g fill="#fff8f3" opacity="0.95">
                <circle cx="200" cy="290" r="58" />
                <circle cx="140" cy="210" r="26" />
                <circle cx="260" cy="210" r="26" />
                <circle cx="165" cy="150" r="22" />
                <circle cx="235" cy="150" r="22" />
              </g>
            </svg>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-6 pt-16">
              <p className="text-sm font-medium text-white/90">
                Galería con fotos reales — próximamente
              </p>
            </div>
          </div>

          <div className="card absolute -left-4 top-6 flex items-center gap-2 !rounded-2xl px-4 py-3 shadow-lg sm:-left-8">
            <span className="flex size-9 items-center justify-center rounded-full bg-sage-tint text-sage">
              <StarIcon className="size-4.5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold">{business.rating.value}/5</p>
              <p className="text-xs text-foreground-soft">
                {business.rating.count} reseñas Google
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
