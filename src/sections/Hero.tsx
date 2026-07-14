import { buildGmailComposeUrl, contactEmail } from "../lib/contact";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function EcosystemPreview() {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] bg-[var(--color-night)] p-3 shadow-[0_34px_90px_rgba(23,35,29,0.24)] sm:p-5"
      aria-label="Vista conceptual de los productos Backoffice y Turnos de Furcode"
    >
      <div className="absolute -right-16 -top-20 size-64 rounded-full bg-[#5f8b72]/25 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 size-64 rounded-full bg-[#a66f48]/20 blur-3xl" />

      <div className="relative flex items-center justify-between border-b border-white/10 px-2 pb-3 text-white sm:px-1 sm:pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="grid size-7 place-items-center rounded-lg bg-white text-[var(--color-night)]">
            F
          </span>
          Furcode / productos
        </div>
        <div className="flex items-center gap-2 text-[0.65rem] font-semibold text-[#c4d8ca]">
          <span className="app-dot text-[#7fc59a]" />
          Ecosistema activo
        </div>
      </div>

      <div className="relative mt-4 grid gap-3 sm:mt-5 sm:grid-cols-[1.15fr_0.85fr]">
        <div className="app-window min-h-[19rem] sm:min-h-[24rem]">
          <div className="flex h-full">
            <div className="w-[26%] bg-[#202824] p-3 text-white sm:p-4">
              <div className="flex items-center gap-2 text-[0.6rem] font-bold sm:text-xs">
                <span className="size-5 rounded-md bg-[#d9b99f]" />
                <span className="hidden lg:inline">Backoffice</span>
              </div>
              <div className="mt-6 space-y-2.5">
                {["w-full", "w-4/5", "w-3/4", "w-5/6"].map((width, index) => (
                  <span
                    key={`${width}-${index}`}
                    className={`block h-1.5 ${width} rounded-full ${index === 0 ? "bg-white/70" : "bg-white/16"}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1 bg-[#f8f4ed] p-3 sm:p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="block h-2 w-20 rounded-full bg-[#1c2721]" />
                  <span className="mt-2 block h-1.5 w-12 rounded-full bg-[#a9afa9]" />
                </div>
                <span className="rounded-md bg-[#1c2721] px-2 py-1 text-[0.48rem] font-bold text-white sm:text-[0.58rem]">
                  Nuevo
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  ["#dfe9e1", "#3f6653"],
                  ["#f1dfd1", "#a66f48"],
                  ["#e4e8eb", "#315f75"],
                  ["#eee7d4", "#855613"],
                ].map(([background, color]) => (
                  <div key={background} className="rounded-xl p-2.5 sm:p-3" style={{ background }}>
                    <span className="block h-1.5 w-2/3 rounded-full opacity-40" style={{ background: color }} />
                    <span className="mt-3 block h-3 w-1/3 rounded-full" style={{ background: color }} />
                    <span className="mt-1 block h-1 w-1/2 rounded-full opacity-30" style={{ background: color }} />
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-[#ded9ce] bg-white p-3 sm:mt-4 sm:p-4">
                <div className="flex items-end gap-1.5">
                  {[34, 52, 43, 70, 58, 82, 68].map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="flex-1 rounded-t-sm bg-[#3f6653]"
                      style={{ height: `${height / 2.2}px`, opacity: 0.42 + index * 0.06 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-window self-end sm:-ml-10 sm:mt-16">
          <div className="bg-[#fffdf8] p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-[#d6d2c8] pb-3">
              <div>
                <p className="text-[0.55rem] font-extrabold uppercase tracking-[0.16em] text-[#3f6653]">
                  Turnos Furcode
                </p>
                <p className="mt-1 font-serif text-lg text-[#1c2721]">Tu agenda</p>
              </div>
              <span className="size-8 rounded-lg bg-[#dfe9e1]" />
            </div>
            <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[0.48rem] font-bold text-[#5d6b63]">
              {["L", "M", "X", "J", "V", "S", "D"].map((day) => (
                <span key={day}>{day}</span>
              ))}
              {Array.from({ length: 14 }, (_, index) => (
                <span
                  key={index}
                  className={`grid aspect-square place-items-center rounded-md ${index === 9 ? "bg-[#3f6653] text-white" : "bg-[#f4f0e7]"}`}
                >
                  {index + 8}
                </span>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-[#dfe9e1] p-3">
              <div className="flex items-center gap-2">
                <span className="app-dot text-[#3f6653]" />
                <span className="text-[0.65rem] font-bold text-[#284838]">Próximo turno · 10:30</span>
              </div>
              <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-[#3f6653]/20" />
            </div>
          </div>
        </div>
      </div>

      <p className="relative mt-4 px-1 text-xs leading-5 text-white/60">
        Dos productos, un mismo sistema visual: claridad operativa, calidez y foco.
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="section-shell">
        <header className="flex min-h-20 items-center justify-between gap-5 border-b border-[var(--color-line)]">
          <a href="/" className="flex min-h-11 items-center gap-3" aria-label="Furcode, inicio">
            <img
              src="/favicon.webp"
              alt=""
              className="size-9 rounded-xl border border-black/5 bg-white p-1 shadow-sm"
            />
            <span className="text-sm font-extrabold tracking-[-0.02em]">Furcode</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[var(--color-muted)] md:flex" aria-label="Navegación principal">
            <a className="transition hover:text-[var(--color-ink)]" href="#ecosistema">Ecosistema</a>
            <a className="transition hover:text-[var(--color-ink)]" href="#oferta">Qué hacemos</a>
            <a className="transition hover:text-[var(--color-ink)]" href="#contacto">Contacto</a>
          </nav>

          <a className="button-secondary !min-h-11 !w-auto !rounded-xl !px-4 !py-2" href="#contacto">
            Hablemos
          </a>
        </header>

        <div className="grid gap-12 py-14 sm:py-16 lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Tecnología que trabaja con vos</p>
            <h1 className="display-title mt-5 text-[clamp(3.25rem,7.5vw,6.7rem)] leading-[0.88] text-[var(--color-ink)]">
              Software claro para negocios reales.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
              Creamos productos e implementaciones que ordenan la operación sin sumar ruido.
              Backoffice, Turnos y cada solución Furcode comparten el mismo criterio: simple de
              entender, sólida para crecer.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="button-primary"
                href={buildGmailComposeUrl(
                  contactEmail,
                  "Consulta para Furcode",
                  "Hola Furcode,\n\nQuiero contarles un proceso que quiero ordenar y ver si encaja con lo que hacen.\n\nQuedo atento/a.",
                )}
                target="_blank"
                rel="noreferrer noopener"
              >
                Contanos qué necesitás
                <ArrowIcon />
              </a>
              <a className="button-secondary" href="#ecosistema">
                Conocer el ecosistema
              </a>
            </div>

            <dl className="mt-10 grid divide-y divide-[var(--color-line)] border-y border-[var(--color-line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-5">
              {[
                ["01", "Productos propios"],
                ["02", "Implementación"],
                ["03", "Acompañamiento"],
              ].map(([value, label]) => (
                <div key={value} className="grid grid-cols-[3rem_1fr] items-center gap-3 py-3 first:pt-4 last:pb-4 sm:block sm:px-5 sm:py-0 sm:first:pl-0 sm:last:pr-0">
                  <dt className="font-serif text-2xl text-[var(--color-accent)]">{value}</dt>
                  <dd className="text-[0.67rem] font-bold uppercase leading-4 tracking-[0.12em] text-[var(--color-muted)] sm:mt-1 sm:text-xs">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <EcosystemPreview />
        </div>
      </div>
    </section>
  );
}
