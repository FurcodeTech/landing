import { buildGmailComposeUrl, contactEmail } from "../lib/contact";

type ProductPreviewProps = {
  variant: "backoffice" | "turnos";
};

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

function ProductPreview({ variant }: ProductPreviewProps) {
  if (variant === "turnos") {
    return (
      <div className="relative min-h-[20rem] overflow-hidden bg-[#dfe9e1] p-4 sm:min-h-[24rem] sm:p-7" aria-hidden="true">
        <div className="absolute -right-16 -top-12 size-56 rounded-full bg-white/70 blur-3xl" />
        <div className="relative mx-auto max-w-sm rounded-[1.35rem] border border-[#b9c8be] bg-[#fffdf8] p-4 shadow-[0_24px_60px_rgba(40,72,56,0.18)] sm:p-5">
          <div className="flex items-start justify-between border-b border-[#d6d2c8] pb-4">
            <div>
              <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.15em] text-[#3f6653]">Turnos Furcode</p>
              <p className="mt-1 font-serif text-xl text-[#1c2721]">Agenda de hoy</p>
            </div>
            <span className="rounded-lg bg-[#3f6653] px-2.5 py-1.5 text-[0.55rem] font-bold text-white">+ Turno</span>
          </div>
          <div className="mt-4 space-y-2.5">
            {[
              ["09:00", "Confirmado", "#dfe9e1", "#284838"],
              ["10:30", "Próximo", "#f1dfd1", "#7a4e32"],
              ["12:00", "Disponible", "#eee9df", "#5d6b63"],
              ["15:30", "Confirmado", "#dfe9e1", "#284838"],
            ].map(([time, status, background, color]) => (
              <div key={time} className="grid grid-cols-[3.2rem_1fr_auto] items-center gap-3 rounded-xl border border-[#e5e0d7] bg-white p-3">
                <span className="text-xs font-extrabold text-[#1c2721]">{time}</span>
                <span className="h-1.5 rounded-full bg-[#1c2721]/12" />
                <span className="rounded-md px-2 py-1 text-[0.55rem] font-bold" style={{ background, color }}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[20rem] overflow-hidden bg-[#202824] p-4 sm:min-h-[24rem] sm:p-7" aria-hidden="true">
      <div className="absolute -left-20 -top-16 size-64 rounded-full bg-[#a66f48]/20 blur-3xl" />
      <div className="relative mx-auto flex max-w-lg overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#f8f4ed] shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
        <aside className="w-[25%] bg-[#17231d] p-3 sm:p-4">
          <div className="size-7 rounded-lg bg-[#d9b99f]" />
          <div className="mt-6 space-y-3">
            {["w-full", "w-4/5", "w-3/4", "w-full", "w-2/3"].map((width, index) => (
              <span key={`${width}-${index}`} className={`block h-1.5 ${width} rounded-full ${index === 0 ? "bg-white/65" : "bg-white/14"}`} />
            ))}
          </div>
        </aside>
        <div className="flex-1 p-3 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="block h-2 w-24 rounded-full bg-[#1c2721]" />
              <span className="mt-2 block h-1.5 w-14 rounded-full bg-[#aab0aa]" />
            </div>
            <span className="rounded-md bg-[#1c2721] px-2 py-1 text-[0.55rem] font-bold text-white">Nuevo</span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              ["#dfe9e1", "#3f6653"],
              ["#f1dfd1", "#a66f48"],
              ["#e2e8e8", "#315f75"],
            ].map(([background, color]) => (
              <div key={background} className="rounded-xl p-3" style={{ background }}>
                <span className="block h-1.5 w-3/4 rounded-full opacity-35" style={{ background: color }} />
                <span className="mt-3 block h-3 w-1/2 rounded-full" style={{ background: color }} />
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-[#ded9ce] bg-white p-3 sm:mt-4 sm:p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="h-1.5 w-20 rounded-full bg-[#1c2721]/70" />
              <span className="h-1.5 w-10 rounded-full bg-[#1c2721]/15" />
            </div>
            <div className="flex items-end gap-1.5">
              {[44, 58, 47, 74, 62, 86, 70].map((height, index) => (
                <span key={`${height}-${index}`} className="flex-1 rounded-t-sm bg-[#3f6653]" style={{ height: `${height / 2.1}px`, opacity: 0.44 + index * 0.06 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

export default function Offer() {
  const turnosInquiry = buildGmailComposeUrl(
    contactEmail,
    "Consulta por Turnos Furcode",
    "Hola Furcode,\n\nQuiero conocer más sobre Turnos Furcode y ver si encaja con mi actividad.\n\nQuedo atento/a.",
  );

  return (
    <section id="oferta" className="border-b border-[var(--color-line)]">
      <div className="section-shell py-16 sm:py-20 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Productos Furcode</p>
            <h2 className="display-title mt-4 text-4xl leading-none sm:text-5xl lg:text-6xl">
              Una familia de apps para trabajar mejor.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] lg:justify-self-end sm:text-lg sm:leading-8">
            Cada producto resuelve una necesidad distinta, pero todos hablan el mismo idioma:
            información ordenada, acciones claras y una experiencia que se aprende rápido.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2">
          <article className="surface overflow-hidden">
            <ProductPreview variant="backoffice" />
            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="eyebrow !tracking-[0.14em]">Gestión para comercios</p>
                <span className="rounded-lg bg-[var(--color-brand-soft)] px-2.5 py-1.5 text-xs font-bold text-[var(--color-brand-strong)]">Prueba gratis · 2 semanas</span>
              </div>
              <h3 className="display-title mt-3 text-3xl sm:text-4xl">Backoffice</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Ventas, stock, compras y proveedores en un espacio simple para todo tu equipo.
              </p>
              <a className="button-primary mt-6 sm:w-auto" href="https://backoffice-furcode.vercel.app" target="_blank" rel="noreferrer noopener">
                Probar Backoffice
                <ArrowIcon />
              </a>
            </div>
          </article>

          <article className="surface overflow-hidden">
            <ProductPreview variant="turnos" />
            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="eyebrow !tracking-[0.14em]">Agenda para profesionales</p>
                <span className="rounded-lg bg-[var(--color-accent-soft)] px-2.5 py-1.5 text-xs font-bold text-[#744b31]">Reservas y gestión diaria</span>
              </div>
              <h3 className="display-title mt-3 text-3xl sm:text-4xl">Turnos</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Reservas online, clientes y agenda diaria para cuidar el tiempo de profesionales y consultorios.
              </p>
              <a className="button-secondary mt-6 sm:w-auto" href={turnosInquiry} target="_blank" rel="noreferrer noopener">
                Consultar por Turnos
                <ArrowIcon />
              </a>
            </div>
          </article>
        </div>

        <div className="mt-16 border-t border-[var(--color-line)] pt-10 sm:mt-20 sm:pt-12">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="eyebrow">También construimos</p>
              <h2 className="display-title mt-3 text-3xl leading-tight sm:text-4xl">
                Cuando el producto estándar no alcanza.
              </h2>
            </div>
            <div className="border-t border-[var(--color-line)]">
              {services.map((service) => (
                <article key={service.number} className="grid gap-3 border-b border-[var(--color-line)] py-6 sm:grid-cols-[3.5rem_0.7fr_1.3fr] sm:items-start sm:gap-6 sm:py-7">
                  <span className="font-serif text-xl text-[var(--color-accent)]">{service.number}</span>
                  <h3 className="font-serif text-xl leading-tight sm:text-2xl">{service.title}</h3>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>
                </article>
              ))}
              <a className="button-primary mt-7 sm:w-auto" href="#contacto">
                Contanos qué querés resolver
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
