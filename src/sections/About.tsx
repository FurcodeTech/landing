export default function About() {
  return (
    <section id="nosotros" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Sobre nosotros
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              En Furcode creemos que la tecnología tiene que ser clara, útil y
              adaptable. Nacimos para ayudar a negocios de todos los tamaños a
              optimizar procesos, reducir tareas repetitivas y tomar decisiones
              con información real.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Trabajamos con enfoque práctico, comunicación directa y un objetivo
              simple: que tu negocio funcione mejor.
            </p>

            <div className="mt-6 inline-flex items-center rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-lime-400" />
              Menos fricción, más eficiencia.
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold">Cómo trabajamos</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                <span>Entendemos tu contexto antes de proponer soluciones.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                <span>Construimos modular para que puedas escalar sin rehacer.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                <span>Iteramos rápido: entregas claras y mejoras continuas.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
