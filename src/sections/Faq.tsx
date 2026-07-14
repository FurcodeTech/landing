const faqs = [
  {
    question: "¿Qué pasa después de que mando el mail?",
    answer:
      "Te respondemos con una lectura concreta: qué conviene hacer primero, qué puede esperar y cuál sería el siguiente paso.",
  },
  {
    question: "¿Puedo empezar por un producto Furcode?",
    answer:
      "Sí. Backoffice y Turnos están pensados como puntos de entrada simples. Si tu caso necesita ajustes o una implementación adicional, lo vemos con vos.",
  },
  {
    question: "¿Trabajan sobre sistemas que ya tengo instalados?",
    answer:
      "Sí. No reemplazamos por reemplazar: ordenamos, integramos y simplificamos lo que ya existe para que el equipo trabaje mejor.",
  },
  {
    question: "¿Sirve si todavía no sé exactamente qué necesito?",
    answer:
      "Sí. El primer paso es bajar la ambigüedad y convertir una necesidad difusa en una propuesta concreta y priorizada.",
  },
];

export default function Faq() {
  return (
    <section className="bg-[var(--color-surface)]/45">
      <div className="section-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-28">
        <div>
          <p className="eyebrow">Antes de escribir</p>
          <h2 className="display-title mt-4 text-4xl leading-none sm:text-5xl">
            Lo importante, sin letra chica.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[var(--color-muted)]">
            Trabajamos como un partner cercano: entendemos el contexto, ordenamos prioridades y
            proponemos el camino más simple que realmente resuelva.
          </p>
          <a className="button-secondary mt-7 sm:w-auto" href="#contacto">
            Escribir ahora
          </a>
        </div>

        <div className="border-t border-[var(--color-line)]">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group border-b border-[var(--color-line)]">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 sm:py-7">
                <span className="grid gap-3 sm:grid-cols-[3rem_1fr] sm:gap-5">
                  <span className="font-serif text-lg text-[var(--color-accent)]">0{index + 1}</span>
                  <span className="font-serif text-xl leading-tight text-[var(--color-ink)] sm:text-2xl">
                    {faq.question}
                  </span>
                </span>
                <span className="faq-plus mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] text-xl text-[var(--color-brand-strong)] transition-transform" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-7 pl-0 text-sm leading-7 text-[var(--color-muted)] sm:pl-[5rem] sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
