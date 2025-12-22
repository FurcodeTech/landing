export default function Footer() {
  return (
    <footer id="contacto" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Contacto</h3>
            <p className="mt-3 max-w-md text-sm text-slate-300 leading-relaxed">
              Si necesitás asesoramiento o querés empezar un proyecto, escribinos
              y lo vemos rápido.
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <p className="text-slate-200">
                Email:{" "}
                <a
                  className="font-semibold underline decoration-lime-300 underline-offset-4 hover:decoration-lime-400"
                  href="mailto:hola@furcode.com"
                >
                  hola@furcode.com
                </a>
              </p>
              <p className="text-slate-200">
                Ubicación: <span className="font-semibold">Argentina</span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Empleos</h3>
            <p className="mt-3 max-w-md text-sm text-slate-300 leading-relaxed">
              Buscamos gente que disfrute crear soluciones simples para problemas
              reales. Si te gusta construir y mejorar, nos interesa conocerte.
            </p>

            <div className="mt-6">
              <a
                href="mailto:jobs@furcode.com"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Enviar CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} Furcode. Construido con estándares básicos
          de buen gusto.
        </div>
      </div>
    </footer>
  );
}
