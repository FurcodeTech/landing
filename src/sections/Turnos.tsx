import ArrowIcon from "../components/ArrowIcon";
import { buildMailtoUrl, contactEmail } from "../lib/contact";

const benefits = [
  {
    number: "01",
    title: "Reservas en un solo lugar",
    description: "Concentrá las reservas online y evitá reconstruir la agenda entre mensajes sueltos.",
  },
  {
    number: "02",
    title: "Clientes a mano",
    description: "Encontrá la información necesaria junto al turno, sin saltar entre herramientas.",
  },
  {
    number: "03",
    title: "Un día fácil de leer",
    description: "Revisá horarios confirmados y espacios disponibles antes de que empiece la jornada.",
  },
];

export default function Turnos() {
  return (
    <section id="turnos" aria-labelledby="turnos-title" className="border-b border-[var(--color-line)] bg-[var(--color-surface)]/55">
      <div className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">Una agenda, un recorrido</p>
            <h2 id="turnos-title" className="display-title mt-4 max-w-xl text-4xl leading-[0.98] sm:text-5xl lg:text-6xl">
              Todo lo importante, antes del próximo turno.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            Turnos ordena la información que más se repite en el día a día para que atender no
            dependa de recordar dónde quedó cada mensaje.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          <div className="border-t border-[var(--color-line)]">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="grid gap-3 border-b border-[var(--color-line)] py-6 sm:grid-cols-[4rem_0.8fr_1.2fr] sm:items-start sm:gap-6 sm:py-7"
              >
                <span className="font-serif text-2xl text-[var(--color-accent)]">{benefit.number}</span>
                <h3 className="font-serif text-xl leading-tight sm:text-2xl">{benefit.title}</h3>
                <p className="text-sm leading-7 text-[var(--color-muted)]">{benefit.description}</p>
              </article>
            ))}
          </div>

          <aside className="relative overflow-hidden rounded-[1.6rem] bg-[var(--color-brand-strong)] p-6 text-white shadow-[0_24px_60px_rgba(40,72,56,0.18)] sm:p-8">
            <div className="absolute -right-20 -top-20 size-56 rounded-full bg-[#d9b99f]/15 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bad1c1]">Piloto fundador</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                ¿Querés evaluar Turnos sobre una agenda real?
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                Escribinos para conocer el alcance actual y los próximos pasos antes de avanzar.
              </p>
              <a
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[var(--color-brand-strong)] transition hover:-translate-y-0.5 hover:bg-[#fff8ef] focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[var(--color-brand-strong)]"
                href={buildMailtoUrl(contactEmail)}
              >
                Consultar por el piloto
                <ArrowIcon />
              </a>
              <p className="mt-4 break-all text-xs font-semibold text-[#dbe9df]">{contactEmail}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
