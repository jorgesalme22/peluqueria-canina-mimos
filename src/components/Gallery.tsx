import { InstagramIcon } from "./icons";
import { business } from "@/lib/business";
import InstagramEmbed from "./InstagramEmbed";

export default function Gallery() {
  return (
    <section id="galeria" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Galería</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Nuestro día a día, directo desde Instagram
          </h2>
          <p className="mt-4 text-lg text-foreground-soft">
            En vez de fotos de archivo, te enseñamos lo real: el feed de
            nuestro Instagram, donde compartimos el trabajo del día a día.
          </p>
        </div>

        <div className="mt-10 grid min-w-0 gap-6 lg:grid-cols-5 lg:items-stretch">
          <div className="flex min-w-0 justify-center lg:col-span-2">
            <div className="card w-full min-w-0 max-w-sm overflow-hidden p-2 sm:p-3">
              <InstagramEmbed permalink="https://www.instagram.com/p/DKzJHAEtlQd/" />
            </div>
          </div>

          <div className="card flex min-w-0 flex-col justify-center gap-5 p-8 text-center lg:col-span-3 lg:text-left">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-terracotta-tint text-terracotta-dark lg:mx-0">
              <InstagramIcon className="size-7" />
            </span>
            <div>
              <h3 className="text-xl font-semibold">
                {business.instagramHandle}
              </h3>
              <p className="mt-2 text-foreground-soft">
                Ahí publicamos las fotos y vídeos de los perritos que pasan
                por Mimos, sorteos y novedades de la tienda. Es la forma más
                fiel de ver el resultado real de nuestro trabajo antes de tu
                cita.
              </p>
            </div>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary focus-ring mx-auto lg:mx-0"
            >
              <InstagramIcon className="size-4.5" />
              Ver todas las fotos en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
