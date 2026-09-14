import { PhoneIcon, WhatsAppIcon } from "./icons";
import { business, telHref, whatsappHref } from "@/lib/business";

export default function StickyMobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={telHref}
        className="btn btn-secondary focus-ring flex-1 !bg-white"
        aria-label={`Llamar a ${business.name}`}
      >
        <PhoneIcon className="size-4" />
        Llamar
      </a>
      <a
        href={whatsappHref("Hola, me gustaría pedir cita para mi perro 🐶")}
        className="btn btn-primary focus-ring flex-1"
        aria-label={`Escribir por WhatsApp a ${business.name}`}
      >
        <WhatsAppIcon className="size-4" />
        WhatsApp
      </a>
    </div>
  );
}
