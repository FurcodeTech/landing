import ArrowIcon from "../components/ArrowIcon";
import { buildMailtoUrl, contactEmail } from "../lib/contact";

const appointments = [
  { time: "09:00", label: "Confirmado", tone: "bg-[#dfe9e1] text-[#284838]" },
  { time: "10:30", label: "Próximo", tone: "bg-[#f1dfd1] text-[#7a4e32]" },
  { time: "12:00", label: "Disponible", tone: "bg-[#eee9df] text-[#5d6b63]" },
  { time: "15:30", label: "Confirmado", tone: "bg-[#dfe9e1] text-[#284838]" },
];

function TurnosPreview() {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] bg-[var(--color-night)] p-3 shadow-[0_34px_90px_rgba(23,35,29,0.24)] sm:p-5"
      role="img"
      aria-label="Vista conceptual de la agenda diaria de Turnos Furcode"
    >
      <div className="absolute -right-16 -top-20 size-64 rounded-full bg-[#5f8b72]/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-16 size-64 rounded-full bg-[#a66f48]/20 blur-3xl" aria-hidden="true" />

      <div className="relative flex items-center justify-between border-b border-white/10 px-2 pb-3 text-white sm:px-1 sm:pb-4" aria-hidden="true">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="grid size-7 place-items-center rounded-lg bg-white text-[var(--color-night)]">F</span>
          Turnos Furcode
        </div>
        <div className="flex items-center gap-2 text-[0.65rem] font-semibold text-[#c4d8ca]">
          <span className="app-dot text-[#7fc59a]" />
          Agenda de hoy
        </div>
      </div>

      <div className="relative mt-4 grid gap-3 sm:mt-5 sm:grid-cols-[1.15fr_0.85fr]" aria-hidden="true">
        <div className="app-window p-4 sm:p-5">
          <div className="flex items-start justify-between border-b border-[#d6d2c8] pb-4">
            <div>
              <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.16em] text-[#3f6653]">
                Mi jornada
              </p>
              <p className="mt-1 font-serif text-xl text-[#1c2721]">Martes 21</p>
            </div>
            <span className="rounded-lg bg-[#dfe9e1] px-2.5 py-1.5 text-[0.58rem] font-bold text-[#284838]">
              3 turnos
            </span>
          </div>

          <div className="mt-4 space-y-2.5">
            {appointments.map((appointment) => (
              <div
                key={appointment.time}
                className="flex items-center justify-between rounded-xl border border-[#ded9ce] bg-[#fffdf8] px-3 py-3"
              >
                <span className="font-serif text-lg text-[#1c2721]">{appointment.time}</span>
                <span className={`rounded-lg px-2 py-1 text-[0.58rem] font-bold ${appointment.tone}`}>
                  {appointment.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="app-window bg-[#fffdf8] p-4 sm:p-5">
            <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.16em] text-[#3f6653]">
              Próximo turno
            </p>
            <p className="mt-3 font-serif text-3xl text-[#1c2721]">10:30</p>
            <span className="mt-4 block h-2 w-full rounded-full bg-[#dfe9e1]">
              <span className="block h-full w-2/3 rounded-full bg-[#3f6653]" />
            </span>
            <p className="mt-3 text-[0.65rem] font-semibold text-[#5d6b63]">Todo listo para continuar</p>
          </div>

          <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.07] p-4 text-white sm:p-5">
            <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.16em] text-[#bad1c1]">
              En un vistazo
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                ["03", "Turnos"],
                ["01", "Libre"],
                ["04", "Clientes"],
              ].map(([value, label]) => (
                <div key={label}>
                  <span className="block font-serif text-xl">{value}</span>
                  <span className="mt-1 block text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-white/55">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="relative mt-4 px-1 text-xs leading-5 text-white/60" aria-hidden="true">
        Una agenda simple de leer, incluso cuando el día se llena.
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="section-shell">
        <header className="flex min-h-20 items-center justify-between gap-4 border-b border-[var(--color-line)]">
          <a href="/" className="flex min-h-11 items-center gap-3" aria-label="Furcode, inicio">
            <img
              src="/favicon.webp"
              alt=""
              className="size-9 rounded-xl border border-black/5 bg-white p-1 shadow-sm"
            />
            <span className="text-sm font-extrabold tracking-[-0.02em]">Furcode</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[var(--color-muted)] md:flex" aria-label="Navegación principal">
            <a className="inline-flex min-h-11 items-center transition hover:text-[var(--color-ink)]" href="#turnos">
              Turnos
            </a>
            <a className="inline-flex min-h-11 items-center transition hover:text-[var(--color-ink)]" href="#ecosistema">
              Ecosistema
            </a>
            <a className="inline-flex min-h-11 items-center transition hover:text-[var(--color-ink)]" href="#preguntas">
              Preguntas
            </a>
          </nav>

          <a className="button-secondary !min-h-11 !w-auto !rounded-xl !px-4 !py-2" href={buildMailtoUrl(contactEmail)}>
            Consultar
          </a>
        </header>

        <div className="grid gap-10 py-12 sm:py-16 lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-18">
          <div className="max-w-2xl">
            <p className="eyebrow">Turnos Furcode · Agenda para profesionales</p>
            <h1 className="display-title mt-5 text-[clamp(3.15rem,7vw,6.35rem)] leading-[0.9] text-[var(--color-ink)]">
              Menos mensajes sueltos. Más tiempo para atender.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
              Turnos reúne reservas online, clientes y agenda diaria en un espacio claro para
              profesionales y consultorios.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href={buildMailtoUrl(contactEmail)}>
                Quiero conocer Turnos
                <ArrowIcon />
              </a>
              <a className="button-secondary" href="#turnos">
                Ver cómo funciona
              </a>
            </div>

            <ul className="mt-9 grid grid-cols-3 divide-x divide-[var(--color-line)] border-y border-[var(--color-line)] py-4">
              {["Reservas online", "Clientes ordenados", "Agenda diaria"].map((item) => (
                <li
                  key={item}
                  className="px-2 text-center text-[0.63rem] font-extrabold uppercase leading-4 tracking-[0.1em] text-[var(--color-muted)] first:pl-0 last:pr-0 sm:px-5 sm:text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <TurnosPreview />
        </div>
      </div>
    </section>
  );
}
