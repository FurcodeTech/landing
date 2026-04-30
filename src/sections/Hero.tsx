const metrics = [
  { label: "diagnóstico", value: "01" },
  { label: "implementación", value: "02" },
  { label: "mejora continua", value: "03" },
];

const flowSteps = [
  {
    title: "Procesos",
    description: "Detectamos tareas repetidas y puntos de fricción.",
  },
  {
    title: "Software",
    description: "Construimos herramientas simples, medibles y escalables.",
  },
  {
    title: "Equipo",
    description: "Capacitamos para que la solución se use todos los días.",
  },
];

export default function Hero() {
  return (
    <section className="snap-section relative overflow-hidden bg-slate-950 text-white">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2200&q=80"
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[35%_center] blur-[2px] sm:object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60 sm:bg-black/45" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pt-4 pb-10 sm:px-6 sm:pt-5 sm:pb-12 lg:h-dvh lg:px-8 lg:pb-8">
        <header className="flex items-center justify-between gap-3 border-b border-white/15 pb-4 sm:pb-5">
          <a href="/" className="flex items-center gap-3" aria-label="Furcode">
            <img
              src="/favicon.webp"
              alt=""
              className="h-9 w-9 shrink-0 rounded-lg bg-white object-cover p-1 shadow-sm"
            />
            <span className="text-sm font-semibold text-white">Furcode</span>
          </a>

          <nav
            className="hidden items-center gap-6 text-sm font-medium text-slate-300 sm:flex"
            aria-label="Navegación principal"
          >
            <a className="transition hover:text-white" href="#nosotros">
              Nosotros
            </a>
            <a className="transition hover:text-white" href="#oferta">
              Oferta
            </a>
            <a className="transition hover:text-white" href="#contacto">
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="inline-flex shrink-0 items-center justify-center rounded-md border border-white/25 bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-lime-300/70 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Hablemos
          </a>
        </header>

        <div className="grid items-center gap-8 pt-10 sm:pt-12 lg:flex-1 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-0">
          <div>
            <p className="inline-flex max-w-full items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase leading-none text-slate-100 backdrop-blur sm:text-xs">
              <span className="h-2 w-2 shrink-0 rounded-full bg-lime-400" />
              Software, servicios y academia
            </p>

            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-[3.5rem]">
              Furcode crea software claro para negocios reales.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:mt-5 sm:text-lg sm:leading-8">
              Diseñamos soluciones digitales, automatizaciones y formación para
              que cada equipo trabaje con menos fricción y más control.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href="#oferta"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-lime-100 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Ver qué hacemos
              </a>

              <a
                href="#nosotros"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-lime-300/70 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Cómo trabajamos
              </a>
            </div>

            <dl className="mt-8 hidden max-w-xl grid-cols-3 divide-x divide-white/10 border-y border-white/15 text-sm sm:mt-10 sm:grid">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="px-4 py-4 first:pl-0"
                >
                  <dt className="text-xs uppercase text-slate-300">{metric.label}</dt>
                  <dd className="mt-1 text-lg font-semibold text-white">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="rounded-lg border border-white/15 bg-slate-950/55 p-3 text-white shadow-2xl shadow-black/20 backdrop-blur-md sm:p-4"
            aria-label="Sistema de trabajo de Furcode"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase text-slate-400">furcode.system</p>
                <p className="mt-1 text-sm font-semibold">Mapa de solución</p>
              </div>
              <span className="shrink-0 rounded-md bg-lime-300 px-2 py-1 text-xs font-semibold text-slate-950">
                Activo
              </span>
            </div>

            <div className="mt-4 space-y-3 sm:mt-5">
              {flowSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid grid-cols-[2rem_1fr] gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-3 sm:grid-cols-[2.5rem_1fr] sm:gap-4 sm:p-4"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-white text-sm font-semibold text-slate-950 sm:h-10 sm:w-10">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300 sm:max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:mt-5 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                <p className="text-slate-400">Enfoque</p>
                <p className="mt-1 font-semibold">Simple y medible</p>
              </div>
              <div className="rounded-lg border border-lime-300/50 bg-lime-300/10 p-3 sm:p-4">
                <p className="text-slate-300">Resultado</p>
                <p className="mt-1 font-semibold text-lime-200">Menos fricción</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
