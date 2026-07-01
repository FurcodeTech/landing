import { buildGmailComposeUrl, contactEmail } from "../lib/contact";

const flowSteps = [
  {
    title: "Diagnóstico",
    description: "Entendemos el negocio, el proceso y dónde está la fricción real.",
  },
  {
    title: "Implementación",
    description: "Diseñamos una solución clara, mantenible y alineada a tu operación.",
  },
  {
    title: "Mejora continua",
    description: "Ajustamos con criterio para que el sistema siga siendo útil en el tiempo.",
  },
];

const trustPoints = [
  "Respuesta por mail con foco concreto",
  "Lenguaje claro, sin humo comercial",
  "Acompañamiento pensado para equipos reales",
];

const highlights = ["Software a medida", "Implementación IT", "Academia práctica"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#121212] text-white">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[45%_center] opacity-30 sm:object-center"
        style={{
          transform: "translate3d(0, calc(var(--scroll-y, 0px) * 0.08), 0) scale(1.08)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.28),transparent_32%),radial-gradient(circle_at_right,rgba(16,185,129,0.16),transparent_28%),linear-gradient(180deg,rgba(8,8,8,0.74),rgba(8,8,8,0.92))]"
        style={{
          transform: "translate3d(0, calc(var(--scroll-y, 0px) * 0.02), 0)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.05)_45%,transparent_62%)] opacity-60"
        style={{
          transform: "translate3d(0, calc(var(--scroll-y, 0px) * -0.02), 0)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col px-4 pt-4 pb-10 sm:px-6 sm:pt-5 sm:pb-12 lg:px-8 lg:pb-8">
        <header className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 sm:pb-5">
          <a href="/" className="flex items-center gap-3" aria-label="Furcode">
            <img
              src="/favicon.webp"
              alt=""
              className="h-9 w-9 shrink-0 rounded-xl bg-white object-cover p-1 shadow-sm"
            />
            <span className="text-sm font-semibold text-white">Furcode</span>
          </a>

          <nav
            className="hidden items-center gap-6 text-sm font-medium text-slate-300 sm:flex"
            aria-label="Navegacion principal"
          >
            <a className="transition hover:text-white" href="#nosotros">
              Proceso
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
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:border-amber-200/70 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#121212]"
          >
            Hablemos
          </a>
        </header>

        <div className="grid items-center gap-8 pt-10 sm:pt-12 lg:flex-1 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pt-0">
          <div>
            <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[0.68rem] font-semibold uppercase leading-none text-slate-100 backdrop-blur sm:text-xs">
              <span className="h-2 w-2 shrink-0 rounded-full bg-amber-300" />
              Software, implementación y formación
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-[4.4rem]">
              Furcode ordena procesos y convierte ideas en software que la gente
              realmente adopta.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
              Acompañamos negocios que necesitan una respuesta concreta: menos
              fricción operativa, más criterio técnico y una marca que se vea tan
              bien como trabaja.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href={buildGmailComposeUrl(
                  contactEmail,
                  "Consulta para Furcode",
                  "Hola Furcode,\n\nQuiero contarles un proceso que quiero ordenar y ver si encaja con lo que hacen.\n\nQuedo atento/a.",
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(251,191,36,0.22)] transition hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#121212]"
              >
                Escribir por mail
              </a>

              <a
                href="#nosotros"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/35 hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#121212]"
              >
                Ver como trabajamos
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-xs font-medium text-slate-100 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>

            <ul className="mt-7 space-y-3 text-sm text-slate-200 sm:mt-8">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-[1.5rem] border border-white/12 bg-white/8 p-4 text-white shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-5"
            aria-label="Sistema de trabajo de Furcode"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">furcode.system</p>
                <p className="mt-1 text-sm font-semibold">Mapa de trabajo</p>
              </div>
              <span className="shrink-0 rounded-full bg-emerald-300 px-2.5 py-1 text-xs font-semibold text-slate-950">
                Disponible
              </span>
            </div>

            <div className="mt-4 space-y-3 sm:mt-5">
              {flowSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-[1.1rem] border border-white/10 bg-black/15 p-3 sm:grid-cols-[2.75rem_1fr] sm:gap-4 sm:p-4"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-semibold text-slate-950 sm:h-11 sm:w-11">
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
              <div className="rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                <p className="text-slate-400">Enfoque</p>
                <p className="mt-1 font-semibold">Cercano y preciso</p>
              </div>
              <div className="rounded-[1.1rem] border border-amber-300/50 bg-amber-300/10 p-3 sm:p-4">
                <p className="text-slate-300">Resultado</p>
                <p className="mt-1 font-semibold text-amber-100">Menos ruido, más control</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-300 lg:flex">
          <span>Scroll suave y continuo</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-amber-300" />
            Siguiente: Nosotros
          </span>
        </div>
      </div>
    </section>
  );
}
