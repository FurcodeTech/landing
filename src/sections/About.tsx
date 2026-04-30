const principles = [
  "Entendemos el contexto antes de proponer tecnología.",
  "Construimos modular para crecer sin rehacer todo.",
  "Entregamos rápido, medimos y mejoramos con datos reales.",
];

export default function About() {
  return (
    <section id="nosotros" className="snap-section bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-10">
          <figure className="relative min-h-[300px] overflow-hidden rounded-lg border border-slate-200 bg-slate-900 sm:min-h-[360px]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              alt="Equipo trabajando en una solución digital"
              className="absolute inset-0 h-full w-full object-cover object-[42%_center] sm:object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent sm:from-slate-950/80 sm:via-slate-950/25" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <p className="text-xs font-semibold uppercase text-lime-300 sm:text-sm">
                Sobre nosotros
              </p>
              <h2 className="mt-2 max-w-md text-2xl font-semibold tracking-tight sm:mt-3 sm:text-4xl">
                Tecnología con criterio, no por moda.
              </h2>
            </figcaption>
          </figure>

          <div>
            <p className="text-base leading-7 text-slate-600 sm:leading-8">
              En Furcode trabajamos cerca de cada negocio para transformar
              procesos reales en herramientas útiles. Buscamos que la tecnología
              sea clara, mantenible y fácil de adoptar por el equipo.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:leading-8">
              La idea no es sumar complejidad: es ordenar lo que ya existe,
              automatizar donde tiene sentido y dejar una base preparada para
              seguir creciendo.
            </p>

            <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200 sm:mt-8">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="grid grid-cols-[1.75rem_1fr] gap-3 py-4 sm:grid-cols-[2rem_1fr] sm:gap-4"
                >
                  <span className="text-sm font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-medium leading-6 text-slate-800">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
