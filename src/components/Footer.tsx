import Link from "next/link";
import { InstagramIcon, PawIcon, PhoneIcon, PinIcon } from "./icons";
import { business, fullAddress, telHref } from "@/lib/business";

const siteLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Por qué Mimos" },
  { href: "/galeria", label: "Galería" },
  { href: "/opiniones", label: "Opiniones" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-terracotta text-white">
              <PawIcon className="size-4" />
            </span>
            <span className="font-serif text-lg font-semibold">
              {business.name}
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-foreground-soft">
            Peluquería canina y tienda para mascotas en el centro de{" "}
            {business.address.city}.
          </p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground-soft hover:text-terracotta-dark"
          >
            <InstagramIcon className="size-4" />
            {business.instagramHandle}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navegación</h3>
          <ul className="mt-3 space-y-2 text-sm text-foreground-soft">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="focus-ring hover:text-terracotta-dark"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contacto</h3>
          <ul className="mt-3 space-y-2.5 text-sm text-foreground-soft">
            <li className="flex items-start gap-2">
              <PinIcon className="mt-0.5 size-4 shrink-0" />
              {fullAddress}
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="size-4 shrink-0" />
              <a href={telHref} className="focus-ring hover:text-terracotta-dark">
                {business.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Horario</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-foreground-soft">
            <li className="flex justify-between gap-6">
              <span>Lunes – Jueves</span>
              <span>9:30–18:00</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Viernes – Sábado</span>
              <span>9:30–13:30</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Domingo</span>
              <span>Cerrado</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="container-x flex flex-col gap-2 text-xs text-foreground-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. Todos los derechos
            reservados.
          </p>
          <p>
            Datos verificados en Google Maps e Instagram · Sitio en revisión,
            pendiente de validación por la propietaria.
          </p>
        </div>
      </div>
    </footer>
  );
}
