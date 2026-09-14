import Link from "next/link";
import { PhoneIcon, PawIcon } from "./icons";
import { business, telHref } from "@/lib/business";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#porque-mimos", label: "Por qué Mimos" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link
          href="#top"
          className="focus-ring flex items-center gap-2 rounded-full"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-terracotta text-white">
            <PawIcon className="size-5" />
          </span>
          <span className="font-serif text-lg font-semibold leading-none md:text-xl">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded text-sm font-medium text-foreground-soft transition-colors hover:text-terracotta-dark"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={telHref}
            className="focus-ring flex items-center gap-2 rounded-full text-sm font-semibold text-foreground-soft hover:text-terracotta-dark"
          >
            <PhoneIcon className="size-4" />
            {business.phoneDisplay}
          </a>
          <a href="#contacto" className="btn btn-primary focus-ring">
            Reservar cita
          </a>
        </div>

        <a href="#contacto" className="btn btn-primary focus-ring md:hidden !px-4 !py-2 !text-sm">
          Reservar
        </a>
      </div>
    </header>
  );
}
