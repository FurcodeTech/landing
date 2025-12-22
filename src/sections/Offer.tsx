type OfferCardProps = {
  title: string;
  desc: string;
  tag: string;
};

function OfferCard({ title, desc, tag }: OfferCardProps) {
  return (
    <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
          {tag}
        </span>
        <span className="h-2 w-2 rounded-full bg-lime-400" />
      </div>

      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>

      <div className="mt-5">
        <a
          href="#contacto"
          className="inline-flex items-center text-sm font-semibold text-slate-900 underline decoration-lime-300 underline-offset-4 hover:decoration-lime-400"
        >
          Hablemos
        </a>
      </div>
    </div>
  );
}

export default function Offer() {
  return (
    <section id="oferta" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Qué ofrecemos
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Tres caminos, un objetivo: mejorar eficiencia, control y resultados.
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2"
          >
            Pedir propuesta
          </a>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <OfferCard
            tag="Producto"
            title="Softwares"
            desc="Soluciones modulares para automatizar tareas, mejorar la gestión y adaptarse a tu forma de trabajar."
          />
          <OfferCard
            tag="Servicio"
            title="Servicios"
            desc="Consultoría e implementación orientada a resultados. Analizamos, optimizamos y dejamos todo funcionando."
          />
          <OfferCard
            tag="Formación"
            title="Academia"
            desc="Capacitación práctica para equipos y profesionales que quieren usar tecnología sin vueltas."
          />
        </div>
      </div>
    </section>
  );
}
