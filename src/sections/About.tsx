const steps = [
  {
    number: "01",
    title: "Entender tu agenda real",
    description: "Partimos de cómo llegan las reservas, dónde se pierde tiempo y qué necesita ver cada persona.",
  },
  {
    number: "02",
    title: "Ordenar el recorrido",
    description: "Priorizamos una experiencia simple: menos pasos, información clara y decisiones visibles.",
  },
  {
    number: "03",
    title: "Acompañar el uso",
    description: "La herramienta se integra al trabajo cotidiano con una base mantenible y espacio para crecer.",
  },
];

export default function About() {
  return (
    <section
      id="metodo"
      aria-labelledby="metodo-title"
      className="border-b border-[var(--color-line)] bg-[var(--color-surface)]/45"
    >
      <div className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 id="metodo-title" className="display-title mt-4 max-w-xl text-4xl leading-[0.98] sm:text-5xl">
              Primero ordenamos el proceso. Después elegimos la herramienta.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            Turnos tiene que sentirse liviano porque parte del trabajo real. El mismo criterio guía
            cada producto e implementación de Furcode.
          </p>
        </div>

        <div className="mt-10 grid border-t border-[var(--color-line)] lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="grid gap-3 border-b border-[var(--color-line)] py-6 lg:border-b-0 lg:border-r lg:px-7 lg:py-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span className="font-serif text-2xl text-[var(--color-accent)]">{step.number}</span>
              <h3 className="font-serif text-2xl leading-tight">{step.title}</h3>
              <p className="text-sm leading-7 text-[var(--color-muted)]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
