type OfferCardProps = {
  title: string;
  description: string;
  tag: string;
  items: string[];
  result: string;
};

const offers: OfferCardProps[] = [
  {
    tag: "Producto",
    title: "Software a medida",
    description:
      "Herramientas internas, portales y automatizaciones pensadas para la forma real de trabajar de tu negocio.",
    result: "Para ordenar tareas, datos y decisiones en un solo lugar.",
    items: ["Gestión", "Automatización", "Integraciones"],
  },
  {
    tag: "Servicio",
    title: "Implementación IT",
    description:
      "Acompañamiento para ordenar procesos, elegir herramientas y dejar sistemas funcionando sin ruido operativo.",
    result: "Para bajar fricción y ganar control sin sumar complejidad.",
    items: ["Diagnóstico", "Puesta en marcha", "Soporte"],
  },
  {
    tag: "Formación",
    title: "Academia práctica",
    description:
      "Capacitación directa para equipos y profesionales que necesitan usar tecnología con seguridad y autonomía.",
    result: "Para que el equipo use mejor la herramienta desde el día uno.",
    items: ["Equipos", "Procesos", "Criterio técnico"],
  },
];

function OfferCard({ title, description, tag, items, result }: OfferCardProps) {
  return (
    <article className="group h-full rounded-[1.4rem] border border-slate-200/80 bg-white/80 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)] sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {tag}
        </span>
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400 transition group-hover:bg-emerald-400" />
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950 sm:mt-5 sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

      <p className="mt-4 rounded-[1rem] border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-900">
        {result}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
          >
            {item}
          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        className="mt-6 inline-flex text-sm font-semibold text-slate-950 underline decoration-amber-300 underline-offset-4 transition hover:decoration-amber-500 sm:mt-7"
      >
        Consultar
      </a>
    </article>
  );
}

export default function Offer() {
  return (
    <section id="oferta" className="overflow-hidden bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-sm">
              Qué ofrecemos
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Tres formas de convertir tecnología en avance concreto.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:leading-8">
              Podés empezar por una solución puntual, una mejora operativa o una
              capacitación. El objetivo siempre es el mismo: claridad, control y
              resultados.
            </p>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:hidden">
            Deslizá para ver opciones
          </p>

          <div className="mt-3 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:mt-9 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>

          <div className="mt-8 rounded-[1.4rem] border border-slate-200 bg-white/70 px-5 py-4 text-sm text-slate-600 shadow-sm backdrop-blur sm:mt-10 sm:px-6">
            Si querés, arrancamos por una consulta por mail y te devolvemos una lectura
            concreta: qué conviene hacer ahora, qué puede esperar y cuál es el siguiente
            paso con mejor retorno.
          </div>
        </div>
      </div>
    </section>
  );
}
