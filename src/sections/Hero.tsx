export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Imagen / Ilustración */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              {/* Reemplazá por tu imagen de stock */}
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80"
                alt="Tecnología y automatización"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="order-2 lg:order-1">
            <p className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
              Furcode
              <span className="mx-2 h-1 w-1 rounded-full bg-lime-400" />
              Software • Servicios • Academia
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Impulsamos tu negocio con{" "}
              <span className="underline decoration-lime-300 underline-offset-8">
                tecnología accesible
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Desarrollamos soluciones digitales que escalan con tu empresa, sin
              complejidad innecesaria.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#oferta"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2"
              >
                Conocé lo que hacemos
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2"
              >
                Contacto
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Simple</p>
                <p className="mt-1">Sin vueltas</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Escalable</p>
                <p className="mt-1">Crece con vos</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200 col-span-2 sm:col-span-1">
                <p className="font-semibold text-slate-900">Práctico</p>
                <p className="mt-1">Orientado a resultados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
