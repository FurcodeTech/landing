import ArrowIcon from "../components/ArrowIcon";

const services = [
  {
    number: "01",
    title: "Implementación IT",
    description: "Ordenamos procesos, elegimos herramientas y dejamos sistemas funcionando con un criterio común.",
  },
  {
    number: "02",
    title: "Software a medida",
    description: "Construimos la pieza que falta cuando una solución existente no alcanza para tu forma de trabajar.",
  },
  {
    number: "03",
    title: "Academia práctica",
    description: "Acompañamos a equipos para que usen la tecnología con más seguridad, criterio y autonomía.",
  },
];

function BackofficePreview() {
  return (
    <div className="relative overflow-hidden rounded-[1.4rem] bg-[#202824] p-4 text-white sm:p-5" aria-hidden="true">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold">
          <span className="size-5 rounded-md bg-[#d9b99f]" />
          Backoffice
        </div>
        <span className="rounded-md bg-white/10 px-2 py-1 text-[0.58rem] font-semibold text-white/70">
          Gestión diaria
        </span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          ["Ventas", "#dfe9e1", "#3f6653"],
          ["Stock", "#f1dfd1", "#a66f48"],
          ["Compras", "#e4e8eb", "#315f75"],
          ["Proveedores", "#eee7d4", "#855613"],
        ].map(([label, background, color]) => (
          <div key={label} className="rounded-xl p-3" style={{ background }}>
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.1em]" style={{ color }}>
              {label}
            </span>
            <span className="mt-5 block h-2 w-1/2 rounded-full" style={{ background: color }} />
            <span className="mt-2 block h-1.5 w-4/5 rounded-full opacity-25" style={{ background: color }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Offer() {
  return (
    <section id="ecosistema" aria-labelledby="ecosistema-title">
      <div className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">Más soluciones Furcode</p>
            <h2 id="ecosistema-title" className="display-title mt-4 max-w-xl text-4xl leading-[0.98] sm:text-5xl">
              El resto del ecosistema, cuando lo necesitás.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            Turnos es hoy la puerta de entrada principal. También resolvemos gestión interna,
            implementaciones y necesidades que requieren una solución propia.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <article className="surface overflow-hidden p-4 sm:p-5">
            <BackofficePreview />
            <div className="px-1 pb-1 pt-5 sm:px-2">
              <p className="eyebrow !tracking-[0.14em]">Gestión para comercios</p>
              <h3 className="display-title mt-3 text-3xl sm:text-4xl">Backoffice</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Ventas, stock, compras y proveedores en un espacio simple para todo tu equipo.
              </p>
              <a className="button-secondary mt-5 sm:w-auto" href="https://backoffice-furcode.vercel.app">
                Probar Backoffice
                <ArrowIcon />
              </a>
            </div>
          </article>

          <div className="border-t border-[var(--color-line)]">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid gap-3 border-b border-[var(--color-line)] py-6 sm:grid-cols-[3.5rem_0.75fr_1.25fr] sm:items-start sm:gap-6 sm:py-7"
              >
                <span className="font-serif text-xl text-[var(--color-accent)]">{service.number}</span>
                <h3 className="font-serif text-xl leading-tight sm:text-2xl">{service.title}</h3>
                <p className="text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>
              </article>
            ))}
            <a className="button-primary mt-7 sm:w-auto" href="#contacto">
              Contanos qué necesitás
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
