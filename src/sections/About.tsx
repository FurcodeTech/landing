const principles = [
  {
    number: "01",
    title: "Entender antes de construir",
    description:
      "Partimos del proceso real, de quién lo usa y de dónde se pierde tiempo. La herramienta viene después.",
  },
  {
    number: "02",
    title: "Diseñar para el uso diario",
    description:
      "Jerarquía clara, decisiones visibles y el mínimo de pasos posible. Lo cotidiano tiene que sentirse liviano.",
  },
  {
    number: "03",
    title: "Dejar una base que crece",
    description:
      "Producto, implementación y acompañamiento se piensan como un sistema mantenible, no como una entrega aislada.",
  },
];

export default function About() {
  return (
    <section id="ecosistema" className="border-b border-[var(--color-line)] bg-[var(--color-surface)]/45">
      <div className="section-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:py-28">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <p className="eyebrow">Un mismo criterio</p>
          <h2 className="display-title mt-4 max-w-lg text-4xl leading-[0.98] sm:text-5xl lg:text-6xl">
            Cada producto se siente Furcode desde el primer clic.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            No buscamos que todas las apps se vean iguales. Buscamos que compartan una manera de
            resolver: calma visual, acciones obvias y tecnología que no compite con el trabajo.
          </p>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-[var(--color-brand-strong)] p-5 text-white shadow-[0_24px_60px_rgba(40,72,56,0.18)] sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bad1c1]">
              Lenguaje Furcode
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["#f4f0e7", "Marfil"],
                ["#3f6653", "Bosque"],
                ["#a66f48", "Terracota"],
              ].map(([color, label]) => (
                <div key={color}>
                  <span className="block aspect-[4/3] rounded-lg border border-white/10" style={{ background: color }} />
                  <span className="mt-2 block text-[0.68rem] font-semibold text-white/70">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 border-t border-white/12 pt-4 font-serif text-xl leading-7 text-white/90">
              “Cercano para usar. Preciso para confiar.”
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--color-line)]">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="grid gap-4 border-b border-[var(--color-line)] py-7 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-9"
            >
              <span className="font-serif text-3xl text-[var(--color-accent)]">{principle.number}</span>
              <div>
                <h3 className="display-title text-2xl leading-tight sm:text-3xl">{principle.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {principle.description}
                </p>
              </div>
            </article>
          ))}

          <div className="mt-8 flex flex-col gap-4 rounded-[1.4rem] bg-[var(--color-accent-soft)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="max-w-2xl text-sm font-semibold leading-6 text-[#68452f] sm:text-base">
              El resultado no es solo una interfaz más linda: es menos fricción para el equipo y
              una experiencia consistente para cada cliente.
            </p>
            <a className="inline-flex min-h-11 shrink-0 items-center text-sm font-extrabold text-[#68452f] underline decoration-[#a66f48]/40 underline-offset-4" href="#oferta">
              Ver productos y servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
