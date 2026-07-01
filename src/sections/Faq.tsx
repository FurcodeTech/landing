const faqs = [
  {
    question: "¿Qué pasa después de que mando el mail?",
    answer:
      "Te respondemos con una lectura concreta: qué conviene hacer primero, qué puede esperar y cuál sería el siguiente paso.",
  },
  {
    question: "¿Trabajan sobre sistemas que ya tengo instalados?",
    answer:
      "Sí. La idea no es reemplazar por reemplazar, sino ordenar, integrar y simplificar lo que ya existe para que el equipo trabaje mejor.",
  },
  {
    question: "¿Sirve si todavía no sé exactamente qué necesito?",
    answer:
      "Sí. Justamente el primer paso es bajar la ambigüedad y convertir una necesidad difusa en una propuesta concreta y priorizada.",
  },
];

const reasons = [
  "Criterio técnico sin sobrecomplicar.",
  "Acompañamiento cercano y respondido por mail.",
  "Orientado a negocio, no solo a entrega técnica.",
];

export default function Faq() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-sm">
              Preguntas frecuentes
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Lo que suele querer saber alguien antes de escribir.
            </h2>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Esta sección baja dudas comunes y refuerza por qué Furcode se siente
              más como un partner de trabajo que como un proveedor genérico.
            </p>

            <div className="rounded-[1.4rem] border border-slate-200 bg-white/75 p-4 shadow-sm backdrop-blur sm:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Por qué Furcode
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {reasons.map((reason) => (
                  <li key={reason} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.35rem] border border-slate-200 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur sm:p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
