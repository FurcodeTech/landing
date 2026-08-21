import ArrowIcon from "../components/ArrowIcon";
import { buildMailtoUrl, contactEmail, jobsEmail } from "../lib/contact";
import type { FurcodeEmail } from "../lib/contact";

function MailChannel({
  email,
  title,
  description,
  primary = false,
}: {
  email: FurcodeEmail;
  title: string;
  description: string;
  primary?: boolean;
}) {
  return (
    <a
      className={`group block rounded-[1.15rem] border p-5 text-left transition focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#17231d] ${primary
        ? "border-amber-200/30 bg-amber-200/[0.09] hover:border-amber-200/60 hover:bg-amber-200/[0.14]"
        : "border-white/10 bg-white/[0.035] hover:border-white/30 hover:bg-white/[0.06]"
      }`}
      href={buildMailtoUrl(email)}
      aria-label={`${title}: ${email}`}
    >
      <span className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-white">{title}</span>
        <ArrowIcon />
      </span>
      <span className={`mt-3 block break-all text-base font-semibold ${primary ? "text-amber-100" : "text-white"}`}>
        {email}
      </span>
      <span className="mt-2 block text-xs leading-5 text-slate-400">{description}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="contacto" aria-labelledby="contacto-title" className="relative overflow-hidden bg-[var(--color-night)] text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(166,111,72,0.24),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(95,139,114,0.18),transparent_38%)]"
        aria-hidden="true"
      />

      <div className="section-shell relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow text-[#d9b99f]">Hablemos</p>
            <h2 id="contacto-title" className="display-title mt-3 max-w-2xl text-4xl leading-[0.98] sm:text-5xl lg:text-6xl">
              ¿Querés ordenar tu agenda con Turnos?
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Escribinos para conocer el alcance actual y evaluar el próximo paso. Si tu necesidad
              es otra, también la leemos desde el mismo canal.
            </p>
            <p className="mt-6 max-w-lg text-xs leading-5 text-slate-400">
              Si el enlace no abre tu cliente de correo, copiá la dirección visible y escribinos
              desde tu aplicación habitual.
            </p>
          </div>

          <div className="space-y-3">
            <MailChannel
              email={contactEmail}
              title="Turnos, productos y proyectos"
              description="Para conocer Turnos, Backoffice, implementaciones y soluciones a medida."
              primary
            />
            <MailChannel
              email={jobsEmail}
              title="Quiero trabajar en Furcode"
              description="Para búsquedas de empleo, propuestas laborales y talento."
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Furcode. Todos los derechos reservados.</p>
          <p>Software claro para negocios reales · Argentina</p>
        </div>
      </div>
    </footer>
  );
}
