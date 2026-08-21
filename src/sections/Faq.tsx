import { buildMailtoUrl, contactEmail } from "../lib/contact";

const faqs = [
  {
    question: "¿Para quién está pensado Turnos?",
    answer:
      "Para profesionales independientes y consultorios que necesitan ordenar reservas, clientes y agenda diaria sin sumar complejidad.",
  },
  {
    question: "¿Qué incluye la propuesta que muestra la landing?",
    answer:
      "Reservas online, gestión de clientes y una agenda diaria clara. Escribinos para conocer el alcance actual antes de avanzar.",
  },
  {
    question: "¿Cómo consulto por el piloto fundador?",
    answer:
      "Mandanos un mail a contact@furcode.com.ar. Te contamos el alcance disponible y los próximos pasos para evaluar Turnos en tu operación real.",
  },
  {
    question: "¿También trabajan en otras soluciones?",
    answer:
      "Sí. Furcode también desarrolla Backoffice, implementaciones IT, software a medida y formación práctica para equipos.",
  },
];

export default function Faq() {
  return (
    <section id="preguntas" aria-labelledby="preguntas-title" className="bg-[var(--color-surface)]/45">
      <div className="section-shell grid gap-9 py-16 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-24">
        <div>
          <p className="eyebrow">Antes de escribir</p>
          <h2 id="preguntas-title" className="display-title mt-4 text-4xl leading-none sm:text-5xl">
            Lo importante, sin vueltas.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[var(--color-muted)]">
            Empezamos por entender tu agenda y te respondemos con un próximo paso concreto.
          </p>
          <a className="button-secondary mt-7 sm:w-auto" href={buildMailtoUrl(contactEmail)}>
            Consultar por Turnos
          </a>
        </div>

        <div className="border-t border-[var(--color-line)]">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group border-b border-[var(--color-line)]">
              <summary className="flex min-h-16 cursor-pointer items-start justify-between gap-5 py-5 sm:py-6">
                <span className="grid gap-2 sm:grid-cols-[3rem_1fr] sm:gap-5">
                  <span className="font-serif text-lg text-[var(--color-accent)]">0{index + 1}</span>
                  <span className="font-serif text-xl leading-tight text-[var(--color-ink)] sm:text-2xl">
                    {faq.question}
                  </span>
                </span>
                <span className="faq-plus mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] text-xl text-[var(--color-brand-strong)] transition-transform" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pl-0 text-sm leading-7 text-[var(--color-muted)] sm:pl-[5rem] sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
