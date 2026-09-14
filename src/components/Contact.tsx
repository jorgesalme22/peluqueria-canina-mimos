import {
  ClockIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "./icons";
import { business, fullAddress, telHref, whatsappHref } from "@/lib/business";

const channels = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: business.phoneDisplay,
    href: whatsappHref("Hola, me gustaría pedir cita para mi perro 🐶"),
    primary: true,
    cta: "Escribir ahora",
  },
  {
    icon: PhoneIcon,
    label: "Teléfono",
    value: business.phoneDisplay,
    href: telHref,
    cta: "Llamar",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: business.instagramHandle,
    href: business.instagramUrl,
    external: true,
    cta: "Ver perfil",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="section-pad">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] bg-[#2a2420] text-[#f5ede4]">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-14">
            <div className="min-w-0">
              <span className="eyebrow !text-[#e7b18c]">Contacto y reserva</span>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Pide cita para tu perro
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                Respondemos por WhatsApp normalmente en el mismo día. Si
                prefieres, también puedes llamarnos o escribirnos por
                Instagram.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <div className="flex min-w-0 items-start gap-3">
                  <PinIcon className="mt-0.5 size-5 shrink-0 text-[#e7b18c]" />
                  <span className="min-w-0 text-white/80">{fullAddress}</span>
                </div>
                <div className="flex min-w-0 items-start gap-3">
                  <ClockIcon className="mt-0.5 size-5 shrink-0 text-[#e7b18c]" />
                  <span className="min-w-0 text-white/80">
                    Lun–Jue 9:30–18:00 · Vie–Sáb 9:30–13:30 · Dom cerrado
                  </span>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className={`focus-ring flex min-w-0 flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl border px-5 py-4 transition-colors ${
                    c.primary
                      ? "border-terracotta bg-terracotta hover:bg-terracotta-dark"
                      : "border-white/15 hover:bg-white/5"
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                        c.primary ? "bg-white/20" : "bg-white/10"
                      }`}
                    >
                      <c.icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-white/60">
                        {c.label}
                      </span>
                      <span className="block truncate font-medium">{c.value}</span>
                    </span>
                  </span>
                  <span className="shrink-0 text-sm font-semibold">{c.cta} →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
