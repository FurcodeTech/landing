type OfferCardProps = {
  title: string;
  description: string;
  tag: string;
  items: string[];
};

const offers: OfferCardProps[] = [
  {
    tag: "Producto",
    title: "Software a medida",
    description:
      "Herramientas internas, portales y automatizaciones pensadas para la forma real de trabajar de tu negocio.",
    items: ["Gestión", "Automatización", "Integraciones"],
  },
  {
    tag: "Servicio",
    title: "Implementación IT",
    description:
      "Acompañamiento para ordenar procesos, elegir herramientas y dejar sistemas funcionando sin ruido operativo.",
    items: ["Diagnóstico", "Puesta en marcha", "Soporte"],
  },
  {
    tag: "Formación",
    title: "Academia práctica",
    description:
      "Capacitación directa para equipos y profesionales que necesitan usar tecnología con seguridad y autonomía.",
    items: ["Equipos", "Procesos", "Criterio técnico"],
  },
];

function OfferCard({ title, description, tag, items }: OfferCardProps) {
  return (
    <article className="h-full rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase text-slate-500">{tag}</span>
        <span className="h-2 w-2 rounded-full bg-lime-400" />
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950 sm:mt-5 sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
          >
            {item}
          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        className="mt-6 inline-flex text-sm font-semibold text-slate-950 underline decoration-lime-300 underline-offset-4 transition hover:decoration-lime-500 sm:mt-7"
      >
        Consultar
      </a>
    </article>
  );
}

export default function Offer() {
  return (
    <section id="oferta" className="snap-section overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase text-slate-500 sm:text-sm">
            Qué ofrecemos
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Tres formas de convertir tecnología en avance concreto.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:leading-8">
            Podés empezar por una solución puntual, una mejora operativa o una
            capacitación. El objetivo siempre es el mismo: claridad, control y
            resultados.
          </p>
        </div>

        <p className="mt-6 text-xs font-semibold uppercase text-slate-400 sm:hidden">
          Deslizá para ver opciones
        </p>

        <div className="no-scrollbar mt-3 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:mt-8 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-9 lg:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.title} className="min-w-[82%] snap-center sm:min-w-0">
              <OfferCard {...offer} />
            </div>
          ))}
        </div>

        <div className="mt-1 flex gap-2 sm:hidden" aria-hidden="true">
          {offers.map((offer) => (
            <span key={offer.title} className="h-1.5 w-6 rounded-full bg-slate-300" />
          ))}
        </div>
      </div>
    </section>
  );
}
