const principles = [
  {
    title: "Escuchamos primero",
    description: "Antes de hablar de herramientas, entendemos el proceso y la fricción real.",
  },
  {
    title: "Diseñamos con criterio",
    description: "La solución se arma para durar, no para verse bien solo el primer día.",
  },
  {
    title: "Acompañamos el uso",
    description: "La entrega incluye claridad operativa para que el equipo la adopte sin ruido.",
  },
];

const stats = [
  { value: "3", label: "etapas de trabajo" },
  { value: "1", label: "mensaje claro" },
  { value: "0", label: "complejidad gratuita" },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-10">
          <figure className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:min-h-[460px]">
            <img
              src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?auto=format&fit=crop&w=1400&q=80"
              alt="Equipo trabajando con una solucion digital"
              className="absolute inset-0 h-full w-full object-cover object-[42%_center] sm:object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_30%),linear-gradient(180deg,rgba(11,15,23,0.12),rgba(11,15,23,0.88))]" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300 sm:text-sm">
                Forma de trabajo
              </p>
              <h2 className="mt-2 max-w-md text-3xl font-semibold tracking-tight sm:mt-3 sm:text-4xl">
                Cercanía sin perder terminación premium.
              </h2>
            </figcaption>
          </figure>

          <div>
            <div className="max-w-2xl">
              <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                En Furcode trabajamos cerca de cada negocio para transformar procesos reales en
                herramientas útiles. Buscamos que la tecnología sea clara, mantenible y fácil de
                adoptar por el equipo.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:leading-8">
                La idea no es sumar complejidad: es ordenar lo que ya existe, automatizar donde
                tiene sentido y dejar una base preparada para seguir creciendo.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.25rem] border border-slate-200 bg-white/80 p-4 text-center shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur"
                >
                  <p className="text-3xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-3 rounded-[1.6rem] border border-slate-200 bg-white/[0.78] p-4 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur sm:mt-8 sm:p-5">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="grid grid-cols-[2.1rem_1fr] gap-3 rounded-[1.05rem] border border-transparent bg-white/50 p-3 first:mt-0 last:mb-0"
                >
                  <span className="text-sm font-semibold text-amber-700">0{index + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{principle.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
