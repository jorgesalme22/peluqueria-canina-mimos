import {
  HeartHandsIcon,
  PawIcon,
  SparkleIcon,
  StarIcon,
  LeashIcon,
  CheckIcon,
} from "./icons";

const reasons = [
  {
    icon: HeartHandsIcon,
    title: "Perros tranquilos, no estresados",
    description:
      'Es lo que más repiten las familias en sus reseñas: perros que antes salían nerviosos de otras peluquerías, en Mimos salen relajados.',
  },
  {
    icon: SparkleIcon,
    title: "Un detalle final para cada perro",
    description:
      "Pajarita, corbata o pañoleta al terminar — un toque simpático que se nota en las fotos que comparten los clientes.",
  },
  {
    icon: StarIcon,
    title: "4,9/5 sostenido en el tiempo",
    description:
      "Más de 260 reseñas en Google con una valoración muy alta y mantenida, no puntual.",
  },
  {
    icon: PawIcon,
    title: "Trato cercano y flexible",
    description:
      "Negocio de trato familiar: atención personalizada y disposición a ayudar incluso fuera de cita cuando es posible.",
  },
  {
    icon: LeashIcon,
    title: "Peluquería y tienda en un mismo sitio",
    description:
      "Piensos, arneses, correas y juguetes disponibles en la misma visita, sin necesidad de ir a otro lugar.",
  },
  {
    icon: CheckIcon,
    title: "Negocio local de Alcalá de Henares",
    description:
      "Liderado por una mujer emprendedora del barrio, en el centro de la ciudad, fácil de visitar a pie.",
  },
];

export default function WhyMimos() {
  return (
    <section id="porque-mimos" className="section-pad bg-surface">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Por qué Mimos</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            La tranquilidad de tu perro, primero
          </h2>
          <p className="mt-4 text-lg text-foreground-soft">
            No es solo dejar a tu perro guapo — es que la experiencia sea
            buena para él. Esto es lo que más valoran quienes ya confían en
            nosotros.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
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
  );
}
